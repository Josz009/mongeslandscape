"use client";

import { Header, Footer } from "@/components/layout";
import { Container } from "@/components/ui";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-cream">
          <Container>
            <div className="text-center">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-forest-green mb-4">
                Privacy Policy
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Your privacy matters to us. This policy explains how Monge&apos;s
                Landscape collects, uses, and protects your personal information.
              </p>
            </div>
          </Container>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto prose prose-lg">
              <p className="text-gray-600 mb-8">
                <strong>Effective Date:</strong> January 1, 2025
              </p>

              {/* Introduction */}
              <h2 className="font-heading text-2xl font-bold text-forest-green mb-4">
                Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Monge&apos;s Landscape (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the
                website mongelandscape.com (the &quot;Site&quot;). This Privacy Policy
                describes how we collect, use, disclose, and safeguard your
                information when you visit our Site or use our landscaping
                services. Please read this policy carefully. If you do not agree
                with the terms of this Privacy Policy, please do not access the
                Site.
              </p>

              {/* Information We Collect */}
              <h2 className="font-heading text-2xl font-bold text-forest-green mb-4">
                Information We Collect
              </h2>
              <h3 className="font-heading text-xl font-semibold text-near-black mb-3">
                Personal Information
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide
                to us when you:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Fill out a quote request or contact form on our Site</li>
                <li>Call us or send us an email</li>
                <li>Enter into a service agreement with us</li>
                <li>Communicate with us through any other channel</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                This information may include your name, email address, phone
                number, property address, and details about the landscaping
                services you are requesting.
              </p>

              <h3 className="font-heading text-xl font-semibold text-near-black mb-3">
                Automatically Collected Information
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                When you visit our Site, we may automatically collect certain
                information about your device, including your IP address, browser
                type, operating system, referring URLs, pages viewed, and the
                dates and times of your visits. This information is used to
                analyze trends, administer the Site, and gather demographic
                information about our user base as a whole.
              </p>

              {/* Cookies and Tracking */}
              <h2 className="font-heading text-2xl font-bold text-forest-green mb-4">
                Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may use cookies, web beacons, and similar tracking
                technologies to collect information about your browsing
                activities on our Site. Cookies are small data files stored on
                your device that help us improve your experience on our Site.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the following types of cookies:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>
                  <strong>Essential Cookies:</strong> Required for the Site to
                  function properly, such as remembering your language preference.
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Help us understand how
                  visitors interact with our Site so we can improve our content
                  and user experience.
                </li>
                <li>
                  <strong>Marketing Cookies:</strong> Used to deliver relevant
                  advertisements and track the effectiveness of our marketing
                  campaigns.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                You can control cookies through your browser settings. Please
                note that disabling cookies may affect the functionality of
                certain parts of the Site.
              </p>

              {/* How We Use Your Information */}
              <h2 className="font-heading text-2xl font-bold text-forest-green mb-4">
                How We Use Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>To provide, operate, and maintain our landscaping services</li>
                <li>To respond to your inquiries and quote requests</li>
                <li>To schedule and manage service appointments</li>
                <li>To send you service-related communications, including estimates, invoices, and follow-ups</li>
                <li>To improve our Site and services based on your feedback and usage patterns</li>
                <li>To send marketing communications, such as seasonal promotions or new service announcements (with your consent where required)</li>
                <li>To comply with applicable laws and regulations</li>
              </ul>

              {/* Sharing of Information */}
              <h2 className="font-heading text-2xl font-bold text-forest-green mb-4">
                Sharing of Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third
                parties. We may share your information in the following limited
                circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>
                  <strong>Service Providers:</strong> We may share information
                  with trusted third-party vendors who assist us in operating our
                  Site, conducting business, or providing services to you (e.g.,
                  payment processors, email platforms, analytics providers).
                  These parties are contractually obligated to keep your
                  information confidential.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose your
                  information if required to do so by law, court order, or
                  governmental regulation, or if we believe disclosure is
                  necessary to protect our rights, your safety, or the safety of
                  others.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the event of a merger,
                  acquisition, or sale of assets, your information may be
                  transferred as part of the business transaction.
                </li>
              </ul>

              {/* Third-Party Links */}
              <h2 className="font-heading text-2xl font-bold text-forest-green mb-4">
                Third-Party Links
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our Site may contain links to third-party websites, such as
                social media platforms or mapping services. We are not
                responsible for the privacy practices or content of those
                websites. We encourage you to review the privacy policies of any
                third-party sites you visit.
              </p>

              {/* Data Security */}
              <h2 className="font-heading text-2xl font-bold text-forest-green mb-4">
                Data Security
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We implement reasonable administrative, technical, and physical
                security measures to protect your personal information from
                unauthorized access, alteration, disclosure, or destruction.
                However, no method of transmission over the Internet or
                electronic storage is 100% secure, and we cannot guarantee
                absolute security.
              </p>

              {/* Data Retention */}
              <h2 className="font-heading text-2xl font-bold text-forest-green mb-4">
                Data Retention
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We retain your personal information only as long as necessary to
                fulfill the purposes outlined in this Privacy Policy, unless a
                longer retention period is required by law. When your information
                is no longer needed, we will securely delete or anonymize it.
              </p>

              {/* Your Rights */}
              <h2 className="font-heading text-2xl font-bold text-forest-green mb-4">
                Your Rights
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your location, you may have the following rights
                regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>The right to access the personal information we hold about you</li>
                <li>The right to request correction of inaccurate information</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to opt out of marketing communications at any time</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                To exercise any of these rights, please contact us using the
                information provided below.
              </p>

              {/* Children's Privacy */}
              <h2 className="font-heading text-2xl font-bold text-forest-green mb-4">
                Children&apos;s Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our Site is not directed to individuals under the age of 13. We
                do not knowingly collect personal information from children under
                13. If you believe we have inadvertently collected such
                information, please contact us and we will promptly delete it.
              </p>

              {/* Changes to This Policy */}
              <h2 className="font-heading text-2xl font-bold text-forest-green mb-4">
                Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or for other operational, legal, or
                regulatory reasons. We will post the updated policy on this page
                with a revised effective date. We encourage you to review this
                page periodically.
              </p>

              {/* Contact Information */}
              <h2 className="font-heading text-2xl font-bold text-forest-green mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions or concerns about this Privacy Policy or
                our data practices, please contact us:
              </p>
              <div className="bg-cream rounded-xl p-6 mb-6">
                <p className="text-near-black font-semibold mb-2">
                  Monge&apos;s Landscape
                </p>
                <p className="text-gray-700">Houston, Texas</p>
                <p className="text-gray-700">
                  Phone:{" "}
                  <a
                    href="tel:+17135028435"
                    className="text-forest-green hover:text-grass-green transition-colors"
                  >
                    713-502-8435
                  </a>
                </p>
                <p className="text-gray-700">
                  Email:{" "}
                  <a
                    href="mailto:info@monges-landscape.com"
                    className="text-forest-green hover:text-grass-green transition-colors"
                  >
                    info@monges-landscape.com
                  </a>
                </p>
                <p className="text-gray-700">
                  Website:{" "}
                  <a
                    href="https://mongelandscape.com"
                    className="text-forest-green hover:text-grass-green transition-colors"
                  >
                    mongelandscape.com
                  </a>
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
