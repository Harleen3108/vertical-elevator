import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="text-blue-600 hover:text-blue-800 mb-6 inline-block">
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Terms and Conditions</h1>
        <p className="text-xl font-semibold text-blue-800 mb-2">VERTICAL ELEVATORS</p>
        <p className="text-gray-600 mb-8">Last Updated: January 2026</p>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            Welcome to Vertical Elevators. These Terms and Conditions ("Terms") govern your use of our website, products, and services. By accessing our website or engaging our services, you agree to be bound by these Terms. Please read them carefully.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">1. DEFINITIONS</h2>
          <p><strong>1.1</strong> "Company," "we," "us," or "our" refers to Vertical Elevators.</p>
          <p><strong>1.2</strong> "Customer," "you," or "your" refers to the individual or entity using our services.</p>
          <p><strong>1.3</strong> "Services" refers to elevator installation, maintenance, modernization, repair, and related services provided by the Company.</p>
          <p><strong>1.4</strong> "Website" refers to our website and all associated pages.</p>
          <p><strong>1.5</strong> "Products" refers to elevators, lift systems, components, and related equipment.</p>
          <p><strong>1.6</strong> "Agreement" refers to any service contract, purchase order, or written agreement between the Company and Customer.</p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">2. ACCEPTANCE OF TERMS</h2>
          <p><strong>2.1</strong> By using our website or services, you acknowledge that you have read, understood, and agree to be bound by these Terms.</p>
          <p><strong>2.2</strong> If you do not agree with these Terms, you must not use our website or services.</p>
          <p><strong>2.3</strong> We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website.</p>
          <p><strong>2.4</strong> Your continued use of our services after modifications constitutes acceptance of the updated Terms.</p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">3. SERVICES PROVIDED</h2>
          
          <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">3.1 Elevator Installation</h3>
          <p>We provide complete elevator installation services including site assessment, design consultation, equipment supply, installation, testing, and commissioning.</p>

          <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">3.2 Maintenance Services</h3>
          <p>We offer comprehensive annual maintenance contracts (AMC) covering preventive maintenance, routine inspections, and emergency repairs.</p>

          <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">3.3 Modernization Services</h3>
          <p>We provide elevator modernization solutions to upgrade older systems with modern technology, safety features, and improved performance.</p>

          <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">3.4 Repair Services</h3>
          <p>We offer emergency and scheduled repair services for all types of elevators and lift systems.</p>

          <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">3.5 Consultation Services</h3>
          <p>We provide technical consultation, feasibility studies, and customized solutions for elevator requirements.</p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">4. QUOTATIONS AND ORDERS</h2>
          <p><strong>4.1</strong> All quotations provided by the Company are valid for 30 days from the date of issue unless otherwise specified.</p>
          <p><strong>4.2</strong> Quotations are subject to site conditions, availability of materials, and other factors that may affect final pricing.</p>
          <p><strong>4.3</strong> Orders are confirmed only upon receipt of a signed agreement and advance payment as specified in the quotation.</p>
          <p><strong>4.4</strong> The Company reserves the right to accept or reject any order at its sole discretion.</p>
          <p><strong>4.5</strong> Prices quoted are exclusive of applicable taxes, duties, and charges unless otherwise stated.</p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">5. PAYMENT TERMS</h2>
          <p><strong>5.1</strong> Payment terms will be specified in the service agreement or quotation.</p>
          <p><strong>5.2</strong> Standard payment terms include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Advance payment: As specified in the agreement (typically 30-50%)</li>
            <li>Progress payments: Based on project milestones</li>
            <li>Final payment: Upon successful completion and commissioning</li>
          </ul>
          <p><strong>5.3</strong> All payments must be made within the specified timeframe.</p>
          <p><strong>5.4</strong> Delayed payments may attract interest charges at the rate specified in the agreement or as permitted by law.</p>
          <p><strong>5.5</strong> The Company reserves the right to suspend services or withhold delivery in case of non-payment.</p>
          <p><strong>5.6</strong> All prices are in Indian Rupees (INR) unless otherwise specified.</p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">6. CUSTOMER OBLIGATIONS</h2>
          <p><strong>6.1</strong> Customers must provide accurate and complete information regarding site conditions, requirements, and specifications.</p>
          <p><strong>6.2</strong> Customers must ensure site readiness, including civil work, electrical connections, and adequate access for installation.</p>
          <p><strong>6.3</strong> Customers must obtain all necessary permits, approvals, and clearances from local authorities.</p>
          <p><strong>6.4</strong> Customers must provide a safe working environment and comply with all safety regulations.</p>
          <p><strong>6.5</strong> Customers must grant reasonable access to Company personnel for installation, maintenance, and repairs.</p>
          <p><strong>6.6</strong> Customers are responsible for any damage to Company equipment or personnel caused by site conditions or third-party actions.</p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">7. INSTALLATION AND COMMISSIONING</h2>
          <p><strong>7.1</strong> Installation timelines are estimates and may vary based on site conditions, weather, material availability, and other factors.</p>
          <p><strong>7.2</strong> The Company will make reasonable efforts to complete installation within the agreed timeframe.</p>
          <p><strong>7.3</strong> Delays caused by factors beyond the Company's control (force majeure, customer delays, permit issues) will not be the Company's responsibility.</p>
          <p><strong>7.4</strong> The Customer must inspect and approve the installation before commissioning.</p>
          <p><strong>7.5</strong> Final commissioning will be done only after receipt of all due payments and necessary clearances.</p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">8. WARRANTY</h2>
          
          <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">8.1 Product Warranty</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Elevator equipment is covered by the manufacturer's warranty, typically 12-24 months from commissioning.</li>
            <li>Warranty covers manufacturing defects and material failures under normal use.</li>
            <li>Warranty does not cover wear and tear, misuse, unauthorized modifications, or external damage.</li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">8.2 Installation Warranty</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Our installation workmanship is warranted for 12 months from the date of commissioning.</li>
            <li>Warranty covers defects in installation but not equipment failures or customer-caused damage.</li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">8.3 Warranty Exclusions</h3>
          <p>Warranty does not cover:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Damage due to improper use, negligence, or accidents</li>
            <li>Unauthorized repairs or modifications</li>
            <li>Failure to follow maintenance schedules</li>
            <li>Force majeure events</li>
            <li>Normal wear and tear</li>
            <li>Consumable items and routine maintenance</li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">8.4 Warranty Claims</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>All warranty claims must be reported in writing within 7 days of discovery.</li>
            <li>The Company will inspect and determine warranty validity.</li>
            <li>Approved claims will be remedied at the Company's discretion through repair or replacement.</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">9. MAINTENANCE CONTRACTS (AMC)</h2>
          <p><strong>9.1</strong> AMC covers preventive maintenance, routine inspections, adjustments, and minor repairs.</p>
          <p><strong>9.2</strong> AMC does not include major repairs, part replacements, or modernization.</p>
          <p><strong>9.3</strong> AMC renewal is subject to mutual agreement and may involve price revisions.</p>
          <p><strong>9.4</strong> Customers must renew AMC before expiry to avoid service interruption.</p>
          <p><strong>9.5</strong> Emergency call-out charges may apply for non-AMC customers or outside AMC scope.</p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">10. LIMITATION OF LIABILITY</h2>
          <p><strong>10.1</strong> The Company's total liability under any agreement shall not exceed the total amount paid by the Customer for the specific service or product.</p>
          <p><strong>10.2</strong> The Company is not liable for indirect, incidental, consequential, or punitive damages.</p>
          <p><strong>10.3</strong> The Company is not liable for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Delays in service due to force majeure events</li>
            <li>Damages caused by customer negligence or third-party actions</li>
            <li>Loss of business, revenue, or profits</li>
            <li>Equipment failures due to power fluctuations, environmental factors, or improper use</li>
            <li>Accidents or injuries caused by customer's failure to follow safety guidelines</li>
          </ul>
          <p><strong>10.4</strong> Customers are advised to maintain adequate insurance coverage for their property and equipment.</p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">11. INTELLECTUAL PROPERTY</h2>
          <p><strong>11.1</strong> All designs, drawings, specifications, and technical information provided by the Company remain our intellectual property.</p>
          <p><strong>11.2</strong> Customers may not reproduce, distribute, or use such information without prior written consent.</p>
          <p><strong>11.3</strong> Company trademarks, logos, and brand names are protected and may not be used without authorization.</p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">12. CONFIDENTIALITY</h2>
          <p><strong>12.1</strong> Both parties agree to keep confidential all proprietary information shared during the course of business.</p>
          <p><strong>12.2</strong> Confidential information includes pricing, technical specifications, business strategies, and customer data.</p>
          <p><strong>12.3</strong> Confidentiality obligations survive termination of the agreement.</p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">13. CANCELLATION AND REFUNDS</h2>
          <p><strong>13.1</strong> Order cancellations must be requested in writing.</p>
          <p><strong>13.2</strong> Cancellation charges apply based on project stage:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Before manufacturing/procurement: 10% of order value</li>
            <li>After manufacturing/procurement: 25-50% of order value</li>
            <li>After installation commencement: No refund</li>
          </ul>
          <p><strong>13.3</strong> Advance payments are non-refundable except in cases where the Company cannot fulfill the order.</p>
          <p><strong>13.4</strong> AMC cancellations will be subject to pro-rata charges for services rendered.</p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">14. FORCE MAJEURE</h2>
          <p><strong>14.1</strong> Neither party shall be liable for failure to perform obligations due to circumstances beyond reasonable control, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Natural disasters (earthquakes, floods, storms)</li>
            <li>War, civil unrest, or terrorism</li>
            <li>Government actions, regulations, or restrictions</li>
            <li>Strikes, lockouts, or labor disputes</li>
            <li>Pandemics or public health emergencies</li>
            <li>Power failures or telecommunication disruptions</li>
          </ul>
          <p><strong>14.2</strong> The affected party must notify the other party promptly and make reasonable efforts to mitigate the impact.</p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">15. COMPLIANCE AND SAFETY</h2>
          <p><strong>15.1</strong> All installations comply with relevant Indian standards (IS codes) and local regulations.</p>
          <p><strong>15.2</strong> Customers must ensure elevators are used in accordance with safety guidelines and load limits.</p>
          <p><strong>15.3</strong> Customers must conduct periodic statutory inspections as required by law.</p>
          <p><strong>15.4</strong> The Company is not responsible for non-compliance arising from customer's failure to follow regulations.</p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">16. TERMINATION</h2>
          <p><strong>16.1</strong> Either party may terminate an agreement by providing written notice as specified in the contract.</p>
          <p><strong>16.2</strong> The Company may terminate immediately if:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Customer fails to make payments</li>
            <li>Customer breaches terms of the agreement</li>
            <li>Customer's actions endanger personnel or equipment</li>
          </ul>
          <p><strong>16.3</strong> Upon termination, Customer must pay for all services rendered and materials supplied.</p>
          <p><strong>16.4</strong> Termination does not relieve either party of obligations accrued prior to termination.</p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">17. DISPUTE RESOLUTION</h2>
          <p><strong>17.1</strong> Any disputes arising from these Terms or any agreement shall first be attempted to be resolved through good faith negotiations.</p>
          <p><strong>17.2</strong> If negotiations fail, disputes shall be referred to arbitration in accordance with the Indian Arbitration and Conciliation Act, 1996.</p>
          <p><strong>17.3</strong> Arbitration shall be conducted in India, and proceedings shall be in English.</p>
          <p><strong>17.4</strong> The arbitrator's decision shall be final and binding on both parties.</p>
          <p><strong>17.5</strong> Each party shall bear its own costs unless the arbitrator decides otherwise.</p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">18. GOVERNING LAW AND JURISDICTION</h2>
          <p><strong>18.1</strong> These Terms and all agreements shall be governed by the laws of India.</p>
          <p><strong>18.2</strong> Subject to the arbitration clause, the courts of India shall have exclusive jurisdiction.</p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">19. INDEMNIFICATION</h2>
          <p><strong>19.1</strong> Customer agrees to indemnify and hold harmless the Company from any claims, damages, or expenses arising from:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Customer's breach of these Terms</li>
            <li>Misuse or improper operation of equipment</li>
            <li>Failure to follow safety guidelines</li>
            <li>Third-party claims related to Customer's use of services</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">20. DATA PROTECTION</h2>
          <p><strong>20.1</strong> The Company collects and processes personal data in accordance with our Privacy Policy.</p>
          <p><strong>20.2</strong> By using our services, you consent to data collection and processing as described in the Privacy Policy.</p>
          <p><strong>20.3</strong> We implement reasonable security measures to protect customer data.</p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">21. COMMUNICATIONS</h2>
          <p><strong>21.1</strong> All official communications must be in writing (email or physical letter).</p>
          <p><strong>21.2</strong> Communications sent to the addresses provided in agreements shall be deemed delivered.</p>
          <p><strong>21.3</strong> Customers must notify the Company of any change in contact details.</p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">22. ENTIRE AGREEMENT</h2>
          <p><strong>22.1</strong> These Terms, together with any signed agreements, quotations, and the Privacy Policy, constitute the entire agreement between the parties.</p>
          <p><strong>22.2</strong> These Terms supersede all prior negotiations, representations, or agreements.</p>
          <p><strong>22.3</strong> Any modifications must be in writing and signed by authorized representatives of both parties.</p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">23. SEVERABILITY</h2>
          <p><strong>23.1</strong> If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.</p>
          <p><strong>23.2</strong> Invalid provisions shall be modified to the minimum extent necessary to make them valid and enforceable.</p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">24. WAIVER</h2>
          <p><strong>24.1</strong> Failure to enforce any provision of these Terms does not constitute a waiver of that provision or any other provision.</p>
          <p><strong>24.2</strong> Waivers must be in writing to be effective.</p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">25. ASSIGNMENT</h2>
          <p><strong>25.1</strong> Customers may not assign or transfer their rights or obligations without prior written consent from the Company.</p>
          <p><strong>25.2</strong> The Company may assign its rights and obligations to affiliates or successors.</p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">26. CONTACT INFORMATION</h2>
          <p>For any questions regarding these Terms and Conditions, please contact us at:</p>
          <div className="bg-gray-100 p-6 rounded-lg mt-4">
            <p className="font-semibold">Vertical Elevators</p>
            <p className="mt-2"><strong>Call:</strong></p>
            <p>7419740060, 7419740061, 7419740062</p>
            <p>7419740063, 7419740064, 7419740065</p>
            <p className="mt-2"><strong>WhatsApp:</strong> 7419636356</p>
            <p className="mt-2"><strong>Customer Service Hours:</strong> Monday - Saturday: 9:00 AM - 6:00 PM</p>
          </div>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">27. ACKNOWLEDGMENT</h2>
          <p>
            By using our website or services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
          </p>

          <div className="border-t border-gray-300 mt-8 pt-6 text-center">
            <p className="font-semibold text-gray-600">END OF TERMS AND CONDITIONS</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
