"use client";

import { Header, Footer } from "@/components/layout";
import { Container } from "@/components/ui";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-cream">
          <Container>
            <div className="text-center">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-forest-green mb-4">
                Terms of Service
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Please review the following terms and conditions that govern your
                use of our website and landscaping services.
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

              {/* Agreement to Terms */}
              <h2 className="font-heading text-2xl font-bold text-forest-green mb-4">
                Agreement to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                By accessing or using the website mongelandscape.com (the
                &quot;Site&quot;) operated by Monge&apos;s Landscape (&quot;we,&quot;
                &quot;us,&quot; or &quot;our&quot;), or by engaging our landscaping
                services, you agree to be bound by these Terms of Service
                (&quot;Terms&quot;). If you do not agree to these Terms, you must
                not use our Site or services.
              </p>

              {/* Services Description */}
              <h2 className="font-heading text-2xl font-bold text-forest-green mb-4">
                Services
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Monge&apos;s Landscape provides professional landscaping and
                outdoor services in the Houston, Texas area, including but not
                limited to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Landscape maintenance and lawn care</li>
                <li>Irrigation system installation and repair</li>
                <li>Landscape design and construction</li>
                <li>Fence construction</li>
                <li>Trash and debris cleanup</li>
                <li>Emergency landscaping services</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                Specific services, pricing, and schedules will be outlined in
                individual service agreements or proposals provided to the
                client. These agreements may contain additional terms that
                supplement these Terms of Service.
              </p>

              {/* Quotes and Estimates */}
              <h2 className="font-heading text-2xl font-bold text-forest-green mb-4">
                Quotes and Estimates
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Quotes and estimates provided by Monge&apos;s Landscape are
                based on the information available at the time of assessment and
                are valid for 30 days from the date of issuance unless otherwise
                stated. Final pricing may vary based on actual conditions
                discovered during the course of work, changes in scope requested
                by the client, or unforeseen circumstances. We will communicate
                any changes in pricing before proceeding with additional work.
              </p>

              {/* Payment Terms */}
              <h2 className="font-heading text-2xl font-bold text-forest-green mb-4">
                Payment Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The following payment terms apply to all services provided by
                Monge&apos;s Landscape:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>
                  Payment terms will be outlined in your individual service
                  agreement or invoice. Unless otherwise agreed, payment is due
                  upon completion of services.
                </li>
                <li>
                  For larger projects, a deposit may be required before work
                  begins. Deposit amounts will be specified in the service
                  agreement.
                </li>
                <li>
                  We accept payment by check, cash, credit card, and electronic
                  bank transfer. Accepted methods will be confirmed at the time
                  of service.
                </li>
                <li>
                  Invoices not paid within 30 days of the due date may be subject
                  to a late fee of 1.5% per month on the outstanding balance.
                </li>
                <li>
                  If an account remains delinquent, we reserve the right to
                  suspend services until the balance is paid in full.
                </li>
              </ul>

              {/* Scheduling and Cancellations */}
              <h2 className="font-heading text-2xl font-bold text-forest-green mb-4">
                Scheduling and Cancellations
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Service schedules are arranged based on mutual agreement between
                Monge&apos;s Landscape and the client. Please note the
                following:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>
                  Service dates may be adjusted due to weather conditions, equipment
                  availability, or other factors beyond our control. We will make
                  reasonable efforts to reschedule promptly.
                </li>
                <li>
                  Clients may cancel or reschedule a service appointment with at
                  least 24 hours&apos; notice without penalty.
                </li>
                <li>
                  Cancellations made with less than 24 hours&apos; notice may be
                  subject to a cancellation fee, as outlined in the service
                  agreement.
                </li>
                <li>
                  For recurring maintenance contracts, termination terms will be
                  specified in the service agreement. Generally, either party may
                  terminate with 30 days&apos; written notice.
                </li>
              </ul>

              {/* Client Responsibilities */}
              <h2 className="font-heading text-2xl font-bold text-forest-green mb-4">
                Client Responsibilities
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To ensure the successful delivery of our services, the client
                agrees to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>
                  Provide safe and reasonable access to the property for our
                  crew and equipment
                </li>
                <li>
                  Inform us of any known hazards, underground utilities, sprinkler
                  lines, or other obstacles on the property
                </li>
                <li>
                  Ensure pets are secured during scheduled service visits
                </li>
                <li>
                  Communicate any changes to the scope of work in writing or
                  through our agreed communication channels
                </li>
                <li>
                  Maintain timely payment in accordance with the agreed payment
                  terms
                </li>
              </ul>

              {/* Warranty and Guarantees */}
              <h2 className="font-heading text-2xl font-bold text-forest-green mb-4">
                Warranty and Satisfaction Guarantee
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We take pride in the quality of our work and stand behind our
                services. If you are not satisfied with any service we have
                provided, please contact us within 48 hours of service
                completion, and we will work to resolve the issue promptly.
                Warranty terms for specific projects (such as plant health
                guarantees, irrigation system warranties, or construction
                warranties) will be detailed in the individual service agreement.
              </p>

              {/* Limitation of Liability */}
              <h2 className="font-heading text-2xl font-bold text-forest-green mb-4">
                Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                To the fullest extent permitted by applicable law, Monge&apos;s
                Landscape shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages arising out of or
                related to the use of our Site or services. Our total liability
                for any claim arising from our services shall not exceed the
                total amount paid by the client for the specific service giving
                rise to the claim.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Monge&apos;s Landscape is not liable for damage to underground
                utilities, irrigation lines, or other features not disclosed by
                the client or not reasonably discoverable prior to the start of
                work. We are also not responsible for plant loss due to factors
                outside our control, including but not limited to extreme weather
                events, drought, pests, or disease, unless a specific warranty
                is provided.
              </p>

              {/* Insurance */}
              <h2 className="font-heading text-2xl font-bold text-forest-green mb-4">
                Insurance
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Monge&apos;s Landscape carries general liability insurance and
                workers&apos; compensation coverage as required by the State of
                Texas. Proof of insurance is available upon request.
              </p>

              {/* Intellectual Property */}
              <h2 className="font-heading text-2xl font-bold text-forest-green mb-4">
                Intellectual Property
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                All content on this Site, including text, images, graphics,
                logos, and design elements, is the property of Monge&apos;s
                Landscape or its licensors and is protected by copyright and
                other intellectual property laws. You may not reproduce,
                distribute, modify, or create derivative works from any content
                on this Site without our prior written consent.
              </p>

              {/* Website Use */}
              <h2 className="font-heading text-2xl font-bold text-forest-green mb-4">
                Use of the Website
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree to use the Site only for lawful purposes. You may not:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>
                  Use the Site in any way that violates applicable local, state,
                  or federal laws
                </li>
                <li>
                  Attempt to gain unauthorized access to any part of the Site or
                  its servers
                </li>
                <li>
                  Transmit any harmful code, viruses, or other destructive content
                </li>
                <li>
                  Use automated tools to scrape, crawl, or collect data from the
                  Site without our written permission
                </li>
              </ul>

              {/* Indemnification */}
              <h2 className="font-heading text-2xl font-bold text-forest-green mb-4">
                Indemnification
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                You agree to indemnify, defend, and hold harmless Monge&apos;s
                Landscape, its owners, employees, and agents from any claims,
                damages, losses, or expenses (including reasonable
                attorneys&apos; fees) arising from your use of the Site, your
                violation of these Terms, or your negligent or wrongful conduct.
              </p>

              {/* Governing Law */}
              <h2 className="font-heading text-2xl font-bold text-forest-green mb-4">
                Governing Law
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                These Terms shall be governed by and construed in accordance with
                the laws of the State of Texas, without regard to its conflict of
                law principles. Any disputes arising from or related to these
                Terms or our services shall be resolved in the courts of Harris
                County, Texas.
              </p>

              {/* Dispute Resolution */}
              <h2 className="font-heading text-2xl font-bold text-forest-green mb-4">
                Dispute Resolution
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                In the event of a dispute, both parties agree to first attempt to
                resolve the matter through good-faith negotiation. If the
                dispute cannot be resolved informally, either party may pursue
                resolution through mediation or binding arbitration in Harris
                County, Texas, before resorting to litigation.
              </p>

              {/* Severability */}
              <h2 className="font-heading text-2xl font-bold text-forest-green mb-4">
                Severability
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                If any provision of these Terms is found to be invalid,
                unlawful, or unenforceable, the remaining provisions shall
                continue in full force and effect.
              </p>

              {/* Changes to Terms */}
              <h2 className="font-heading text-2xl font-bold text-forest-green mb-4">
                Changes to These Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We reserve the right to modify or update these Terms of Service
                at any time. Changes will be posted on this page with an updated
                effective date. Your continued use of the Site or our services
                after any changes constitutes your acceptance of the revised
                Terms.
              </p>

              {/* Contact Information */}
              <h2 className="font-heading text-2xl font-bold text-forest-green mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please
                contact us:
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
