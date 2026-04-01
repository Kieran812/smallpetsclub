import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Scale, Link as LinkIcon, AlertTriangle, Mail, ChevronRight, Copyright } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Use | SmallPets Club',
  description: 'Read the terms and conditions governing your use of the SmallPets Club website. Understand your rights and responsibilities as a user.',
  keywords: ['terms of use', 'terms and conditions', 'website terms', 'legal terms', 'exotic pet care terms'],
  openGraph: {
    title: 'Terms of Use | SmallPets Club',
    description: 'Read the terms and conditions governing your use of our website.',
    type: 'website',
    locale: 'en_US',
  },
};

const lastUpdated = 'April 1, 2026';

const tableOfContents = [
  { id: 'acceptance', title: 'Acceptance of Terms' },
  { id: 'use-of-site', title: 'Use of the Site' },
  { id: 'intellectual-property', title: 'Intellectual Property' },
  { id: 'user-contributions', title: 'User Contributions' },
  { id: 'links', title: 'Links to Other Sites' },
  { id: 'liability', title: 'Limitation of Liability' },
  { id: 'changes', title: 'Changes to Terms' },
  { id: 'contact', title: 'Contact Us' },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-background-warm to-background py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6">
              <Scale className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text leading-tight">
              Terms of <span className="text-primary">Use</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text-muted leading-relaxed">
              Please read these terms carefully before using our website. These terms govern your
              use of SmallPets Club and set out your rights and responsibilities.
            </p>
            <p className="mt-4 text-sm text-text-muted">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Table of Contents - Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-background-warm rounded-2xl p-6 border border-border/50">
                  <h3 className="font-heading text-lg font-bold text-text mb-4">Contents</h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors py-1"
                      >
                        <ChevronRight className="w-4 h-4" />
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-10">
              {/* Acceptance of Terms */}
              <div id="acceptance">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text">
                    Acceptance of Terms
                  </h2>
                </div>
                <div className="prose prose-lg max-w-none text-text-muted space-y-4">
                  <p>
                    By accessing or using the SmallPets Club website, you agree to be bound by these
                    Terms of Use and all applicable laws and regulations. If you do not agree with any
                    part of these terms, you may not use our website.
                  </p>
                  <p>
                    These terms apply to all visitors, users, and others who access the site. We reserve
                    the right to modify these terms at any time without prior notice. Your continued use
                    of the site after any changes constitutes acceptance of the new terms.
                  </p>
                </div>
              </div>

              {/* Use of the Site */}
              <div id="use-of-site">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center">
                    <Scale className="w-5 h-5 text-secondary-dark" />
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text">
                    Use of the Site
                  </h2>
                </div>
                <div className="prose prose-lg max-w-none text-text-muted space-y-4">
                  <p>You agree to use our website only for lawful purposes and in a way that does not infringe on the rights of others. Specifically, you agree NOT to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Use the site in any way that violates applicable local, state, national, or international laws</li>
                    <li>Attempt to gain unauthorized access to any part of the website</li>
                    <li>Use the site to transmit spam, chain letters, or unsolicited commercial email</li>
                    <li>Introduce viruses, trojan horses, or other malicious code</li>
                    <li>Collect or harvest information about other users without their consent</li>
                    <li>Interfere with or disrupt the website or servers connected to the site</li>
                  </ul>
                </div>
              </div>

              {/* Intellectual Property */}
              <div id="intellectual-property">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Copyright className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text">
                    Intellectual Property
                  </h2>
                </div>
                <div className="prose prose-lg max-w-none text-text-muted space-y-4">
                  <p>
                    All content on this website, including but not limited to text, graphics, logos,
                    images, articles, and software, is the property of SmallPets Club or its content
                    suppliers and is protected by copyright and other intellectual property laws.
                  </p>
                  <p>
                    You may not reproduce, distribute, modify, or create derivative works from any content
                    on this site without our express written permission. However, you may:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Share links to our content for personal, non-commercial use</li>
                    <li>Quote brief excerpts for commentary or educational purposes with proper attribution</li>
                    <li>Print copies of content for personal, non-commercial use</li>
                  </ul>
                </div>
              </div>

              {/* User Contributions */}
              <div id="user-contributions">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text">
                    User Contributions
                  </h2>
                </div>
                <div className="prose prose-lg max-w-none text-text-muted space-y-4">
                  <p>
                    Our website may allow you to post comments, feedback, or other content. By posting
                    any content on our site, you:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Grant us a non-exclusive, royalty-free, perpetual license to use, reproduce, and distribute your content</li>
                    <li>Represent that you own or have the necessary rights to post such content</li>
                    <li>Agree that your content will not violate any third-party rights or contain unlawful material</li>
                  </ul>
                  <p>
                    We reserve the right to remove any content that we deem inappropriate, offensive,
                    or that violates these terms.
                  </p>
                </div>
              </div>

              {/* Links to Other Sites */}
              <div id="links">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center">
                    <LinkIcon className="w-5 h-5 text-secondary-dark" />
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text">
                    Links to Other Sites
                  </h2>
                </div>
                <div className="prose prose-lg max-w-none text-text-muted space-y-4">
                  <p>
                    Our website may contain links to third-party websites that are not owned or controlled
                    by SmallPets Club. We have no control over and assume no responsibility for the content,
                    privacy policies, or practices of any third-party sites.
                  </p>
                  <p>
                    We encourage you to review the terms and privacy policies of any third-party sites
                    you visit. Your use of such sites is at your own risk.
                  </p>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div id="liability">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text">
                    Limitation of Liability
                  </h2>
                </div>
                <div className="prose prose-lg max-w-none text-text-muted space-y-4">
                  <p>
                    To the fullest extent permitted by law, SmallPets Club and its owners, employees,
                    and affiliates shall not be liable for any indirect, incidental, special, consequential,
                    or punitive damages resulting from:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Your use or inability to use the website</li>
                    <li>Any content obtained from the website</li>
                    <li>Unauthorized access to your personal data</li>
                    <li>Any errors, inaccuracies, or omissions in content</li>
                  </ul>
                  <p>
                    The information on this website is for educational purposes only and should not be
                    considered professional veterinary advice. Always consult a qualified veterinarian for
                    medical advice regarding your pet.
                  </p>
                </div>
              </div>

              {/* Changes to Terms */}
              <div id="changes">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text">
                    Changes to Terms
                  </h2>
                </div>
                <div className="prose prose-lg max-w-none text-text-muted space-y-4">
                  <p>
                    We reserve the right to modify or replace these terms at any time at our sole discretion.
                    If a revision is material, we will provide at least 30 days notice prior to any new terms
                    taking effect. What constitutes a material change will be determined at our sole discretion.
                  </p>
                  <p>
                    By continuing to access or use our website after any revisions become effective, you agree
                    to be bound by the revised terms.
                  </p>
                </div>
              </div>

              {/* Contact Us */}
              <div id="contact">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-secondary-dark" />
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text">
                    Contact Us
                  </h2>
                </div>
                <div className="prose prose-lg max-w-none text-text-muted space-y-4">
                  <p>
                    If you have any questions about these Terms of Use, please contact us:
                  </p>
                  <div className="bg-background-warm rounded-xl p-6 border border-border/50">
                    <p className="font-semibold text-text mb-2">SmallPets Club</p>
                    <p>Email: <a href="mailto:legal@exoticpetcare.com" className="text-primary hover:underline">legal@exoticpetcare.com</a></p>
                    <p>Location: San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links Section */}
      <section className="py-16 lg:py-24 bg-background-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text mb-4">
              Related Legal Pages
            </h2>
            <p className="text-text-muted text-lg">
              Please also review our other legal documents for complete information about our practices.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
            <Link
              href="/privacy"
              className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group border border-border/50 hover:border-primary/20"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <FileText className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-text mb-2">Privacy Policy</h3>
              <p className="text-text-muted text-sm">Learn how we collect, use, and protect your data.</p>
            </Link>

            <Link
              href="/cookies"
              className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group border border-border/50 hover:border-primary/20"
            >
              <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
                <LinkIcon className="w-7 h-7 text-secondary-dark" />
              </div>
              <h3 className="font-heading text-xl font-bold text-text mb-2">Cookie Policy</h3>
              <p className="text-text-muted text-sm">Understand how we use cookies and manage preferences.</p>
            </Link>

            <Link
              href="/contact"
              className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group border border-border/50 hover:border-primary/20"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Mail className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-bold text-text mb-2">Contact Us</h3>
              <p className="text-text-muted text-sm">Have questions? Get in touch with our team.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
