import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [submitStatus, setSubmitStatus] = useState('idle'); // Added based on instruction's usage

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus('idle'); // Set status to idle at the start of submission

    try {
      const response = await fetch(`${API_BASE_URL}/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Failed to submit. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">
      <h3 className="text-2xl font-bold mb-4 text-white">Get Free Quote</h3>
      
      {submitted && (
        <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            <span><strong>Thank you!</strong> We'll contact you shortly.</span>
          </div>
        </div>
      )}

      {error && (
        <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      <div className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-white/30 bg-white/20 text-white placeholder-white/70 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent outline-none transition"
            placeholder="Full Name *"
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-white/30 bg-white/20 text-white placeholder-white/70 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent outline-none transition"
            placeholder="Email Address *"
          />
        </div>

        <div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-white/30 bg-white/20 text-white placeholder-white/70 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent outline-none transition"
            placeholder="Phone Number *"
          />
        </div>

        <div>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-white/30 bg-white/20 text-white placeholder-white/70 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent outline-none transition"
          >
            <option value="" className="text-gray-900">Select Project Type *</option>
            <option value="residential" className="text-gray-900">Residential Building</option>
            <option value="commercial" className="text-gray-900">Commercial Complex</option>
            <option value="hospital" className="text-gray-900">Hospital/Medical</option>
            <option value="home" className="text-gray-900">Home Elevator</option>
            <option value="modernization" className="text-gray-900">Modernization</option>
            <option value="other" className="text-gray-900">Other</option>
          </select>
        </div>

        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-3 border border-white/30 bg-white/20 text-white placeholder-white/70 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent outline-none transition resize-none"
            placeholder="Project Details (Optional)"
          ></textarea>
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-white text-blue-900 py-3 px-6 rounded-lg font-bold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? 'Submitting...' : 'Submit Request'}
          {!loading && <ArrowRight className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
}
