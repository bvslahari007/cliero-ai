import { interTight } from "@/app/fonts";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className={`${interTight.className} max-w-3xl mx-auto p-8`}>
        <h1 className="text-4xl font-bold mb-2 text-blue-900">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-500 mb-10">
          Effective Date: June 12, 2026
        </p>
        <p className="text-gray-700 leading-relaxed">
          These Terms of Service govern your use of Cliero AI. By creating an
          account or using any feature of our platform, you agree to be bound by
          these Terms. If you do not agree, please do not use Cliero AI.
        </p>
        <h2 className="text-2xl text-black font-semibold mt-10 mb-3">
          1. Eligibility
        </h2>
        <p className="text-gray-700 leading-relaxed">
          You must be at least 13 years of age to use Cliero AI. By using the
          platform, you confirm you meet this requirement. If you are under 18,
          you confirm that you have permission from a parent or guardian.
        </p>
        <h2 className="text-2xl text-black font-semibold mt-10 mb-3">
          2. Account Registration
        </h2>
        <p className="text-gray-700 leading-relaxed">
          To access core features, you must register for an account. You agree
          to:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
          <li>
            Provide accurate, current, and complete information during
            registration
          </li>
          <li>Keep your password confidential and not share it with anyone</li>
          <li>
            Notify us immediately if you suspect any unauthorised use of your
            account
          </li>
          <li>
            Take responsibility for all activity that occurs under your account
          </li>
        </ul>
        <p className="mt-4 text-gray-700 leading-relaxed">
          We reserve the right to suspend or terminate accounts that provide
          false information or violate these Terms.
        </p>
        <h2 className="text-2xl text-black font-semibold mt-10 mb-3">
          3. Permitted Use
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Cliero AI is designed as an academic productivity platform for
          engineering students. You may use the platform to ask academic
          questions, generate structured notes, and manage your personal
          learning history. All use must be for lawful, personal, non-commercial
          educational purposes.
        </p>
        <h2 className="text-2xl text-black font-semibold mt-10 mb-3">
          4. Prohibited Use
        </h2>
        <p className="text-gray-700 leading-relaxed">You agree not to:</p>
        <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
          <li>
            Submit AI-generated content as your own work in violation of your
            institution's academic integrity policies — this responsibility
            rests solely with you
          </li>
          <li>
            Attempt to reverse-engineer, scrape, or extract data from the
            platform in bulk
          </li>
          <li>
            Upload or transmit any content that is illegal, harmful, abusive, or
            violates the rights of others
          </li>
          <li>
            Use automated bots or scripts to access the platform without our
            prior written consent
          </li>
          <li>
            Attempt to gain unauthorised access to any part of the platform,
            servers, or databases
          </li>
          <li>
            Generate content that promotes violence, discrimination, or any
            unlawful activity
          </li>
          <li>
            Resell, redistribute, or commercially exploit any AI-generated
            content from Cliero AI
          </li>
        </ul>
        <h2 className="text-2xl text-black font-semibold mt-10 mb-3">
          5. AI-Generated Content Disclaimer
        </h2>
        <p className="text-gray-700 leading-relaxed">
          By using Cliero AI, you acknowledge that:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
          <li>
            AI-generated content may occasionally contain errors, inaccuracies,
            or outdated information
          </li>
          <li>
            We do not guarantee the accuracy or suitability of any AI-generated
            content for academic submission or professional use
          </li>
          <li>
            You should always verify important information with authoritative
            sources such as textbooks or qualified instructors
          </li>
          <li>
            Cliero AI is a study support tool, not a substitute for formal
            education or professional advice
          </li>
        </ul>
        <p className="mt-4 text-gray-700 leading-relaxed">
          We are not responsible for any academic consequences or decisions
          taken based on AI-generated content from our platform.
        </p>
        <h2 className="text-2xl text-black font-semibold mt-10 mb-3">
          6. Intellectual Property
        </h2>
        <h3 className="text-lg text-black font-semibold mt-6 mb-2">
          6.1 Our Platform
        </h3>
        <p className="text-gray-700 leading-relaxed">
          All software, design, branding, logos, and proprietary features of
          Cliero AI are our intellectual property. You may not copy, reproduce,
          distribute, or create derivative works from any part of the platform
          without our explicit written permission.
        </p>
        <h3 className="text-lg text-black font-semibold mt-6 mb-2">
          6.2 Your Content
        </h3>
        <p className="text-gray-700 leading-relaxed">
          You retain ownership of the questions and inputs you submit. By
          submitting content, you grant Cliero AI a limited, non-exclusive
          licence to process your inputs through AI systems solely to generate
          your requested outputs. We do not claim ownership of your questions or
          saved notes.
        </p>
        <h3 className="text-lg text-black font-semibold mt-6 mb-2">
          6.3 AI Outputs
        </h3>
        <p className="text-gray-700 leading-relaxed">
          AI-generated notes and answers are provided for your personal
          educational use. You may save, copy, and use this content for your own
          studies. Commercial resale or distribution of AI outputs is not
          permitted.
        </p>
        <h2 className="text-2xl text-black font-semibold mt-10 mb-3">
          7. Privacy
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Your use of Cliero AI is also governed by our{" "}
          <a href="/privacy" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
          , which is incorporated into these Terms by reference. By using the
          platform, you consent to the data practices described therein.
        </p>
        <h2 className="text-2xl text-black font-semibold mt-10 mb-3">
          8. Availability and Modifications
        </h2>
        <p className="text-gray-700 leading-relaxed">
          We reserve the right to:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
          <li>
            Modify, suspend, or discontinue any feature or the platform at any
            time, with or without notice
          </li>
          <li>
            Update these Terms from time to time — continued use after changes
            are posted constitutes acceptance
          </li>
          <li>
            Perform maintenance or updates that may temporarily affect platform
            availability
          </li>
        </ul>
        <h2 className="text-2xl text-black font-semibold mt-10 mb-3">
          9. Limitation of Liability
        </h2>
        <p className="text-gray-700 leading-relaxed">
          To the fullest extent permitted by applicable law, Cliero AI and its
          team shall not be liable for any indirect, incidental, or
          consequential damages arising from your use of the platform, loss of
          data, or reliance on AI-generated content. Our total liability for any
          claim shall not exceed the amount you have paid us in the 12 months
          preceding the claim.
        </p>
        <h2 className="text-2xl text-black font-semibold mt-10 mb-3">
          10. Termination
        </h2>
        <p className="text-gray-700 leading-relaxed">
          You may stop using Cliero AI at any time and request account deletion
          by contacting us. We reserve the right to suspend or terminate your
          account without notice if you have violated these Terms or acted in a
          manner harmful to other users or the platform.
        </p>
        <h2 className="text-2xl text-black font-semibold mt-10 mb-3">
          11. Governing Law
        </h2>
        <p className="text-gray-700 leading-relaxed">
          These Terms are governed by the laws of India. Any disputes arising
          from these Terms or your use of Cliero AI shall be subject to the
          exclusive jurisdiction of the competent courts in India.
        </p>
        <h2 className="text-2xl text-black font-semibold mt-10 mb-3">
          12. Contact Us
        </h2>
        <p className="text-gray-700 leading-relaxed">
          For any questions or concerns regarding these Terms, please contact:
        </p>
        <p className="mt-3 text-gray-700">
          <span className="font-semibold">
            B. V. Sangeeta Lahari - Cliero AI{" "}
          </span>
          <br />
          Email:{" "}
          <a
            href="mailto:bvslahari@gmail.com"
            className="text-blue-600 hover:underline"
          >
            bvslahari@gmail.com
          </a>
        </p>
        <p className="mt-3 text-gray-700">
          We aim to respond to all enquiries within 7 business days.
        </p>
        <div className="mt-16 pt-8 border-t border-gray-200 text-center text-sm text-gray-400">
          © 2026 Cliero AI · Learn smarter. Build stronger.
        </div>{" "}
      </main>
    </div>
  );
}
