import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Mail, Phone, Building, MessageSquare, Calendar, RefreshCcw, LogOut } from 'lucide-react';
import Navbar from '../components/Navbar';

import { API_BASE_URL } from '../config';

export default function AdminDashboard() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }
    fetchLeads();
  }, [navigate]);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${API_BASE_URL}/leads`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status === 401) {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminUser');
        navigate('/admin/login');
        return;
      }

      if (!response.ok) {
        throw new Error('Failed to fetch leads');
      }
      const data = await response.json();
      setLeads(data);
      setError('');
    } catch (err) {
      setError('Error loading leads. Please check if backend is running.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, newStatus) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${API_BASE_URL}/leads/${id}/status`, {
        method: 'PATCH',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      });
      
      if (response.status === 401) {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminUser');
        navigate('/admin/login');
        return;
      }

      if (response.ok) {
        setLeads(leads.map(lead => 
          lead._id === id ? { ...lead, status: newStatus } : lead
        ));
      }
    } catch (err) {
      console.error('Failed to update status:', err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    navigate('/admin/login');
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  // Stats Logic
  const totalLeads = leads.length;
  const pendingLeads = leads.filter(l => (l.status || 'Pending') === 'Pending').length;
  const contactedLeads = leads.filter(l => l.status === 'Contacted').length;

  return (
    <div className="min-h-screen bg-gray-50 font-['Inter',sans-serif]">
      {/* Simple Admin Navbar */}
      <nav className="bg-slate-900 text-white shadow-lg">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold">Vertical Elevators Admin</span>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-300">
                {JSON.parse(localStorage.getItem('adminUser') || '{}').username}
              </span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
              >
                <LogOut className="w-4 h-4" /> Logout
              </button>
              <a href="/" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Site
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Leads Dashboard</h1>
          <button 
            onClick={fetchLeads} 
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            <RefreshCcw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 uppercase font-semibold">Total Leads</p>
                <p className="text-3xl font-bold text-gray-900">{totalLeads}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <User className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 uppercase font-semibold">Pending Action</p>
                <p className="text-3xl font-bold text-gray-900">{pendingLeads}</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full">
                <Calendar className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 uppercase font-semibold">Contacted</p>
                <p className="text-3xl font-bold text-gray-900">{contactedLeads}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900"></div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-100 text-gray-600 uppercase text-sm font-semibold">
                  <tr>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Contact Info</th>
                    <th className="px-6 py-4">Project Type</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Message</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {leads.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="px-6 py-12 text-center text-gray-500">
                        No leads found yet.
                      </td>
                    </tr>
                  ) : (
                    leads.map((lead) => (
                      <tr key={lead._id} className="hover:bg-gray-50 transition">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {formatDate(lead.createdAt)}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 font-medium text-gray-900">
                            <User className="w-4 h-4 text-blue-900" />
                            {lead.name}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Mail className="w-3 h-3" /> {lead.email}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Phone className="w-3 h-3" /> {lead.phone}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {lead.projectType}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                           <select 
                             value={lead.status || 'Pending'} 
                             onChange={(e) => updateStatus(lead._id, e.target.value)}
                             className={`text-sm rounded-full px-3 py-1 font-medium border-0 focus:ring-2 focus:ring-offset-2 ${
                               (lead.status === 'Contacted') 
                                 ? 'bg-green-100 text-green-800 focus:ring-green-500' 
                                 : 'bg-yellow-100 text-yellow-800 focus:ring-yellow-500'
                             }`}
                           >
                             <option value="Pending">Pending</option>
                             <option value="Contacted">Contacted</option>
                           </select>
                        </td>
                        <td className="px-6 py-4 max-w-xs">
                          <div className="text-sm text-gray-600 truncate" title={lead.message}>
                            {lead.message || '-'}
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 text-sm text-gray-500">
              Total Leads: {leads.length}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
