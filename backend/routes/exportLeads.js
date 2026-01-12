const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead');
const ExcelJS = require('exceljs');
const authMiddleware = require('../middleware/auth');

// GET - Export leads to Excel with date filtering
router.get('/', authMiddleware, async (req, res) => {
  try {
    const { filterType, startDate, endDate } = req.query;
    
    // Build date filter query
    let dateFilter = {};
    const now = new Date();
    
    if (filterType === 'week') {
      // Get start of current week (Sunday)
      const startOfWeek = new Date(now);
      startOfWeek.setDate(now.getDate() - now.getDay());
      startOfWeek.setHours(0, 0, 0, 0);
      
      // Get end of current week (Saturday)
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);
      endOfWeek.setHours(23, 59, 59, 999);
      
      dateFilter = {
        createdAt: {
          $gte: startOfWeek,
          $lte: endOfWeek
        }
      };
    } else if (filterType === 'month') {
      // Get start of current month
      const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      startOfMonth.setHours(0, 0, 0, 0);
      
      // Get end of current month
      const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
      endOfMonth.setHours(23, 59, 59, 999);
      
      dateFilter = {
        createdAt: {
          $gte: startOfMonth,
          $lte: endOfMonth
        }
      };
    } else if (filterType === 'custom' && startDate && endDate) {
      // Custom date range
      const start = new Date(startDate);
      start.setHours(0, 0, 0, 0);
      
      const end = new Date(endDate);
      end.setHours(23, 59, 59, 999);
      
      dateFilter = {
        createdAt: {
          $gte: start,
          $lte: end
        }
      };
    }
    
    // Fetch leads with date filter
    const leads = await Lead.find(dateFilter).sort({ createdAt: -1 });
    
    // Create Excel workbook
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Leads');
    
    // Define columns
    worksheet.columns = [
      { header: 'Date', key: 'date', width: 20 },
      { header: 'Name', key: 'name', width: 25 },
      { header: 'Email', key: 'email', width: 30 },
      { header: 'Phone', key: 'phone', width: 15 },
      { header: 'Project Type', key: 'projectType', width: 20 },
      { header: 'Status', key: 'status', width: 15 },
      { header: 'Message', key: 'message', width: 40 }
    ];
    
    // Style header row
    worksheet.getRow(1).font = { bold: true, size: 12 };
    worksheet.getRow(1).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FF4472C4' }
    };
    worksheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
    worksheet.getRow(1).alignment = { vertical: 'middle', horizontal: 'center' };
    worksheet.getRow(1).height = 25;
    
    // Add data rows
    leads.forEach((lead) => {
      worksheet.addRow({
        date: new Date(lead.createdAt).toLocaleString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        name: lead.name,
        email: lead.email,
        phone: lead.phone,
        projectType: lead.projectType,
        status: lead.status || 'Pending',
        message: lead.message || '-'
      });
    });
    
    // Add borders to all cells
    worksheet.eachRow((row, rowNumber) => {
      row.eachCell((cell) => {
        cell.border = {
          top: { style: 'thin' },
          left: { style: 'thin' },
          bottom: { style: 'thin' },
          right: { style: 'thin' }
        };
      });
      
      // Alternate row colors for better readability (skip header)
      if (rowNumber > 1 && rowNumber % 2 === 0) {
        row.eachCell((cell) => {
          cell.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'FFF3F4F6' }
          };
        });
      }
    });
    
    // Generate filename with date range
    let filename = 'leads_export';
    if (filterType === 'week') {
      filename += '_this_week';
    } else if (filterType === 'month') {
      filename += '_this_month';
    } else if (filterType === 'custom') {
      filename += `_${startDate}_to_${endDate}`;
    } else {
      filename += '_all';
    }
    filename += '.xlsx';
    
    // Set response headers
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    );
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    
    // Write to response
    await workbook.xlsx.write(res);
    res.end();
    
    console.log(`✓ Excel export generated: ${filename} (${leads.length} leads)`);
    
  } catch (error) {
    console.error('✗ Excel export failed:', error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
