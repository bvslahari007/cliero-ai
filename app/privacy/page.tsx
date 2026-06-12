import { interTight } from "@/app/fonts";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className={`${interTight.className} max-w-3xl mx-auto p-8`}>
        <h1 className="text-4xl font-bold mb-2 text-blue-900">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Effective Date: June 12, 2026</p><p className="text-sm text-gray-500 mb-10">Effective Date: June 12, 2026</p>

      <p className="text-gray-700 leading-relaxed">
        Welcome to Cliero AI. We are committed to protecting your personal information and your right to
        privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information
        when you use our platform. Please read this policy carefully. If you disagree with its terms, please
        discontinue use of Cliero AI.
      </p>

      <h2 className="text-2xl text-black font-semibold mt-10 mb-3">1. Information We Collect</h2>

      <h3 className="text-lg text-black font-semibold mt-6 mb-2">1.1 Information You Provide Directly</h3>
      <p className="text-gray-700 leading-relaxed">When you register or interact with Cliero AI, we may collect:</p>
      <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
        <li>Full name and email address during account registration</li>
        <li>Password (stored in encrypted form — we never see your plaintext password)</li>
        <li>Engineering field/category selected during onboarding (e.g., CSE, AI/ML, ECE)</li>
        <li>Academic questions you submit to the Ask AI feature</li>
        <li>Topics you enter into the Smart Notes Generator</li>
        <li>Notes and Q&amp;A history you choose to save to your Library</li>
      </ul>

      <h3 className="text-lg text-black font-semibold mt-6 mb-2">1.2 Information Collected Automatically</h3>
      <p className="text-gray-700 leading-relaxed">When you use Cliero AI, certain technical data may be collected automatically, including:</p>
      <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
        <li>IP address and approximate geographic location</li>
        <li>Device type, browser type, and operating system</li>
        <li>Pages visited, features used, and time spent on the platform</li>
        <li>Error logs and performance data to improve the service</li>
      </ul>

      <h3 className="text-lg text-black font-semibold mt-6 mb-2">1.3 Information We Do Not Collect</h3>
      <p className="text-gray-700 leading-relaxed">
        Cliero AI does not collect payment information (we do not process payments in Phase 1),
        government-issued ID, or any sensitive personal information beyond what is listed above.
      </p>

      <h2 className="text-2xl text-black font-semibold mt-10 mb-3">2. How We Use Your Information</h2>
      <p className="text-gray-700 leading-relaxed">We use the information we collect for the following purposes:</p>
      <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
        <li>To create and manage your account and provide access to the platform</li>
        <li>To personalise your dashboard and AI responses based on your selected engineering field</li>
        <li>To generate AI-powered answers and notes tailored to your academic needs</li>
        <li>To save your question history and notes in your personal Library</li>
        <li>To improve, test, and develop new features of Cliero AI</li>
        <li>To communicate with you about account-related matters (e.g., password reset emails)</li>
        <li>To detect, prevent, and address technical issues or misuse of the platform</li>
      </ul>
      <p className="mt-4 text-gray-700 leading-relaxed">
        We do not sell your personal data to any third party. We do not use your data for advertising purposes.
      </p>

      <h2 className="text-2xl text-black font-semibold mt-10 mb-3">3. How We Store and Protect Your Data</h2>
      <p className="text-gray-700 leading-relaxed">Cliero AI takes data security seriously. We implement the following measures to protect your information:</p>
      <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
        <li>Passwords are hashed and salted using industry-standard cryptographic methods before storage</li>
        <li>All data transmission between your browser and our servers is encrypted via HTTPS/TLS</li>
        <li>Access to user data is restricted to authorised team members on a need-to-know basis</li>
        <li>Your saved notes and Q&amp;A history are linked to your unique User ID and are only accessible by you</li>
      </ul>
      <p className="mt-4 text-gray-700 leading-relaxed">
        While we take reasonable precautions, no system is completely secure. We encourage you to use a
        strong, unique password for your Cliero AI account.
      </p>

      <h2 className="text-2xl text-black font-semibold mt-10 mb-3">4. Data Retention</h2>
      <p className="text-gray-700 leading-relaxed">We retain your personal data for as long as your account is active or as needed to provide our services:</p>
      <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
        <li>Account information (email, category) is retained until you delete your account</li>
        <li>Saved questions and notes are retained until you manually delete them or delete your account</li>
        <li>Automatically collected technical logs may be retained for up to 90 days for debugging purposes</li>
      </ul>
      <p className="mt-4 text-gray-700 leading-relaxed">
        You may request deletion of your account and all associated data at any time by contacting us at
        the email provided in Section 8.
      </p>

      <h2 className="text-2xl text-black font-semibold mt-10 mb-3">5. Sharing of Information</h2>
      <p className="text-gray-700 leading-relaxed">
        We do not sell, trade, or rent your personal information. We may share your data only in the
        following limited circumstances:
      </p>
      <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
        <li>With AI API providers solely to process your queries — these providers are bound by their own privacy policies and do not retain your data for training without consent</li>
        <li>With cloud infrastructure providers necessary to operate Cliero AI</li>
        <li>When required by law, court order, or valid legal process</li>
        <li>To protect the rights, safety, or property of Cliero AI or its users</li>
      </ul>

      <h2 className="text-2xl text-black font-semibold mt-10 mb-3">6. Cookies and Tracking</h2>
      <p className="text-gray-700 leading-relaxed">
        Cliero AI may use session cookies or local storage tokens to maintain your login session and
        provide a seamless experience. These are not used for advertising or third-party tracking. You
        may disable cookies in your browser settings, but this may affect your ability to use the platform.
      </p>

      <h2 className="text-2xl text-black font-semibold mt-10 mb-3">7. Your Rights</h2>
      <p className="text-gray-700 leading-relaxed">Depending on your location, you may have the following rights regarding your personal data:</p>
      <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
        <li>Right to Access — request a copy of the personal data we hold about you</li>
        <li>Right to Correction — request correction of inaccurate or incomplete data</li>
        <li>Right to Deletion — request deletion of your account and personal data</li>
        <li>Right to Portability — request a copy of your data in a structured, machine-readable format</li>
        <li>Right to Withdraw Consent — where processing is based on consent, you may withdraw it at any time</li>
      </ul>

      <h2 className="text-2xl text-black font-semibold mt-10 mb-3">8. Contact Us</h2>
      <p className="text-gray-700 leading-relaxed">
        If you have questions, concerns, or requests regarding this Privacy Policy or your data, please contact:
      </p>
      <p className="mt-3 text-gray-700">
        <span className="font-semibold">B. V. Sangeeta Lahari - Cliero AI</span><br />
        Email:{" "}
        <a href="mailto:contact.clieroai@gmail.com" className="text-blue-600 hover:underline">
          contact.clieroai@gmail.com
        </a>
      </p>
      <p className="mt-3 text-gray-700">We aim to respond to all privacy-related inquiries within 7 business days.</p>

      <h2 className="text-2xl text-black font-semibold mt-10 mb-3">9. Changes to This Policy</h2>
      <p className="text-gray-700 leading-relaxed">
        We may update this Privacy Policy from time to time. When we do, we will revise the Effective
        Date at the top of this page. For significant changes, we will notify registered users via email.
        Continued use of Cliero AI after changes are posted constitutes acceptance of the updated policy.
      </p>

      <div className="mt-16 pt-8 border-t border-gray-200 text-center text-sm text-gray-400">
        © 2026 Cliero AI · Learn smarter. Build stronger.
      </div>
      </main>
    </div>
  );
}