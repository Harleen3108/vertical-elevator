import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="text-blue-600 hover:text-blue-800 mb-6 inline-block">
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Privacy Policy</h1>
        <p className="text-xl font-semibold text-blue-800 mb-2">VERTICAL ELEVATORS</p>
        <p className="text-gray-600 mb-8">Last Updated: January 2026</p>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            Vertical Elevators ("we," "us," "our," or "Company") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us in any manner.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">1. INFORMATION WE COLLECT</h2>
          
          <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">1.1 Personal Information</h3>
          <p>We may collect personal information that you voluntarily provide to us when you:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Request a quote or consultation for elevator installation, maintenance, or repair services</li>
            <li>Fill out contact forms on our website</li>
            <li>Subscribe to our newsletter or marketing communications</li>
            <li>Register for an account on our website</li>
            <li>Communicate with us via phone, email, or other channels</li>
            <li>Participate in surveys or promotions</li>
          </ul>
          
          <p className="mt-4">This information may include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Postal address</li>
            <li>Company name and designation</li>
            <li>Property details (for service requests)</li>
            <li>Payment information (processed securely through third-party payment processors)</li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">1.2 Automatically Collected Information</h3>
          <p>When you visit our website, we may automatically collect certain information about your device and browsing behavior, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referring website addresses</li>
            <li>Device identifiers</li>
            <li>Geographic location data</li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">1.3 Cookies and Tracking Technologies</h3>
          <p>
            We use cookies, web beacons, and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device that help us remember your preferences and understand how you use our website. You can control cookie settings through your browser preferences.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">2. HOW WE USE YOUR INFORMATION</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Service Delivery:</strong> To provide, maintain, and improve our elevator installation, maintenance, modernization, and repair services</li>
            <li><strong>Communication:</strong> To respond to your inquiries, provide customer support, and send service-related notifications</li>
            <li><strong>Quotations and Proposals:</strong> To prepare and send estimates, quotations, and service proposals</li>
            <li><strong>Contract Management:</strong> To process and manage service contracts, warranties, and maintenance agreements</li>
            <li><strong>Marketing:</strong> To send promotional materials, newsletters, and information about new products or services (with your consent)</li>
            <li><strong>Analytics:</strong> To analyze website usage patterns and improve our digital presence</li>
            <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes</li>
            <li><strong>Safety and Security:</strong> To protect our business, employees, customers, and property</li>
            <li><strong>Business Operations:</strong> To manage our internal operations, including troubleshooting, data analysis, and research</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">3. LEGAL BASIS FOR PROCESSING (UNDER INDIAN LAW)</h2>
          <p>We process your personal information under the following legal bases:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Consent:</strong> When you have given explicit consent for specific processing activities</li>
            <li><strong>Contract Performance:</strong> When processing is necessary to fulfill a contract with you</li>
            <li><strong>Legal Obligation:</strong> When we must process your data to comply with legal requirements</li>
            <li><strong>Legitimate Interest:</strong> When processing is necessary for our legitimate business interests, such as fraud prevention and business development</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">4. INFORMATION SHARING AND DISCLOSURE</h2>
          <p>We may share your information with:</p>
          
          <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">4.1 Service Providers and Business Partners</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Third-party contractors and technicians who assist in providing elevator services</li>
            <li>Payment processors for secure transaction handling</li>
            <li>IT service providers for website hosting and maintenance</li>
            <li>Marketing and analytics service providers</li>
            <li>Professional advisors, including lawyers and accountants</li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">4.2 Legal Requirements</h3>
          <p>We may disclose your information when required by law or in response to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Court orders, subpoenas, or other legal processes</li>
            <li>Requests from government authorities or regulatory bodies</li>
            <li>Enforcement of our terms and conditions</li>
            <li>Protection of our rights, property, or safety, or that of others</li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">4.3 Business Transfers</h3>
          <p>
            In the event of a merger, acquisition, reorganization, or sale of assets, your information may be transferred to the successor entity.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">5. DATA SECURITY</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Encryption of sensitive data during transmission (SSL/TLS)</li>
            <li>Secure servers with firewall protection</li>
            <li>Access controls and authentication mechanisms</li>
            <li>Regular security audits and vulnerability assessments</li>
            <li>Employee training on data protection practices</li>
          </ul>
          <p className="mt-4">
            However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">6. DATA RETENTION</h2>
          <p>
            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Retention periods vary based on:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The nature of the information collected</li>
            <li>Legal and regulatory requirements (e.g., tax, accounting, or warranty obligations)</li>
            <li>Our legitimate business needs</li>
            <li>Contractual obligations</li>
          </ul>
          <p className="mt-4">
            When information is no longer needed, we will securely delete or anonymize it.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">7. YOUR RIGHTS AND CHOICES</h2>
          <p>Under applicable Indian data protection laws, you have the following rights:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Access:</strong> You may request access to the personal information we hold about you</li>
            <li><strong>Correction:</strong> You may request correction of inaccurate or incomplete information</li>
            <li><strong>Deletion:</strong> You may request deletion of your personal information, subject to legal obligations</li>
            <li><strong>Objection:</strong> You may object to certain processing activities, including direct marketing</li>
            <li><strong>Data Portability:</strong> You may request a copy of your data in a structured, commonly used format</li>
            <li><strong>Withdrawal of Consent:</strong> Where processing is based on consent, you may withdraw it at any time</li>
            <li><strong>Complaint:</strong> You have the right to lodge a complaint with relevant data protection authorities</li>
          </ul>
          <p className="mt-4">
            To exercise any of these rights, please contact us using the information provided below.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">8. MARKETING COMMUNICATIONS</h2>
          <p>
            We may send you marketing communications about our products, services, and promotions. You can opt out of receiving marketing emails by:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Clicking the "unsubscribe" link in any marketing email</li>
            <li>Contacting us directly with your opt-out request</li>
            <li>Updating your communication preferences in your account settings (if applicable)</li>
          </ul>
          <p className="mt-4">
            Please note that even if you opt out of marketing communications, we may still send you service-related messages regarding your orders, contracts, or account.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">9. THIRD-PARTY LINKS</h2>
          <p>
            Our website may contain links to third-party websites, services, or applications. We are not responsible for the privacy practices or content of these third parties. We encourage you to review the privacy policies of any third-party sites you visit.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">10. CHILDREN'S PRIVACY</h2>
          <p>
            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected information from a child, we will take steps to delete such information promptly.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">11. INTERNATIONAL DATA TRANSFERS</h2>
          <p>
            Your information may be transferred to and processed in locations outside of India. When we transfer data internationally, we ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">12. CHANGES TO THIS PRIVACY POLICY</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Posting the updated policy on our website with a new "Last Updated" date</li>
            <li>Sending you an email notification (if we have your email address)</li>
            <li>Displaying a prominent notice on our website</li>
          </ul>
          <p className="mt-4">
            Your continued use of our services after such modifications constitutes your acknowledgment and acceptance of the updated Privacy Policy.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">13. GRIEVANCE REDRESSAL</h2>
          <p>
            In accordance with the Information Technology Act, 2000, and rules made thereunder, if you have any grievances regarding the processing of your personal information, you may contact our Grievance Officer. We will address your concerns within the timeframe specified by applicable law.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">14. CONTACT INFORMATION</h2>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
          </p>
          <div className="bg-gray-100 p-6 rounded-lg mt-4">
            <p className="font-semibold">Vertical Elevators</p>
            <p className="mt-2"><strong>Call:</strong></p>
            <p>7419740060, 7419740061, 7419740062</p>
            <p>7419740063, 7419740064, 7419740065</p>
            <p className="mt-2"><strong>WhatsApp:</strong> 7419636356</p>
            <p className="mt-2"><strong>Business Hours:</strong> Monday - Saturday: 9:00 AM - 6:00 PM</p>
          </div>
          <p className="mt-6">
            We are committed to resolving any privacy-related concerns promptly and in accordance with applicable laws.
          </p>

          <div className="border-t border-gray-300 mt-8 pt-6 text-center">
            <p className="font-semibold text-gray-600">END OF PRIVACY POLICY</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
