import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Lock, Eye, Users, FileText, Mail, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | SmallPets Club',
  description: 'Learn how SmallPets Club collects, uses, and protects your personal information. Your privacy matters to us.',
  keywords: ['privacy policy', 'data protection', 'personal information', 'exotic pet care privacy'],
  openGraph: {
    title: 'Privacy Policy | SmallPets Club',
    description: 'Learn how we collect, use, and protect your personal information.',
    type: 'website',
    locale: 'en_US',
  },
};

const lastUpdated = 'April 1, 2026';

const tableOfContents = [
  { id: 'information-we-collect', title: 'Information We Collect' },
  { id: 'how-we-use', title: 'How We Use Your Information' },
  { id: 'information-sharing', title: 'Information Sharing' },
  { id: 'data-security', title: 'Data Security' },
  { id: 'your-rights', title: 'Your Rights' },
  { id: 'contact-us', title: 'Contact Us' },
];

export default function PrivacyPage() {
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
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text leading-tight">
              Privacy <span className="text-primary">Policy</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text-muted leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use,
              and protect your personal information when you visit our website.
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
              {/* Information We Collect */}
              <div id="information-we-collect">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Eye className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text">
                    Information We Collect
                  </h2>
                </div>
                <div className="prose prose-lg max-w-none text-text-muted space-y-4">
                  <p>
                    We collect information you provide directly to us, such as when you subscribe to our
                    newsletter, leave a comment, or contact us through our website. This includes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Personal Information:</strong> Name, email address, and any other information you voluntarily provide</li>
                    <li><strong>Comments:</strong> Content you post on our blog, including your name and email</li>
                    <li><strong>Communications:</strong> Any messages or inquiries you send to us</li>
                    <li><strong>Newsletter Subscription:</strong> Email address used to send you updates and care tips</li>
                  </ul>
                  <p>
                    We also automatically collect certain information when you visit our site, including your
                    IP address, browser type, operating system, referring URLs, and pages viewed through cookies
                    and similar technologies.
                  </p>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div id="how-we-use">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center">
                    <FileText className="w-5 h-5 text-secondary-dark" />
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text">
                    How We Use Your Information
                  </h2>
                </div>
                <div className="prose prose-lg max-w-none text-text-muted space-y-4">
                  <p>We use the information we collect for the following purposes:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>To send you newsletters and updates about exotic pet care that you have subscribed to</li>
                    <li>To respond to your comments, questions, and customer service requests</li>
                    <li>To analyze website usage and improve our content and user experience</li>
                    <li>To display relevant advertisements through our advertising partners</li>
                    <li>To prevent fraudulent activity and ensure website security</li>
                    <li>To notify you about new articles, guides, and important updates</li>
                  </ul>
                </div>
              </div>

              {/* Information Sharing */}
              <div id="information-sharing">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text">
                    Information Sharing
                  </h2>
                </div>
                <div className="prose prose-lg max-w-none text-text-muted space-y-4">
                  <p>We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Service Providers:</strong> We may share information with trusted service providers who assist us in operating our website, conducting our business, or serving our users</li>
                    <li><strong>Advertising Partners:</strong> We may share aggregated, non-personally identifying information with our advertising partners for ad targeting purposes</li>
                    <li><strong>Legal Requirements:</strong> We may disclose information if required by law, regulation, or legal process</li>
                    <li><strong>Protection of Rights:</strong> We may disclose information to protect the rights, property, or safety of SmallPets Club, our users, or others</li>
                  </ul>
                </div>
              </div>

              {/* Data Security */}
              <div id="data-security">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Lock className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text">
                    Data Security
                  </h2>
                </div>
                <div className="prose prose-lg max-w-none text-text-muted space-y-4">
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal
                    information against unauthorized access, alteration, disclosure, or destruction. However,
                    no method of transmission over the Internet or electronic storage is 100% secure, and
                    we cannot guarantee absolute security.
                  </p>
                  <p>
                    We use HTTPS encryption for all data transmission, employ secure servers, and regularly
                    update our security practices to ensure your data remains protected.
                  </p>
                </div>
              </div>

              {/* Your Rights */}
              <div id="your-rights">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-secondary-dark" />
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text">
                    Your Rights
                  </h2>
                </div>
                <div className="prose prose-lg max-w-none text-text-muted space-y-4">
                  <p>You have certain rights regarding your personal information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Access:</strong> You can request a copy of the personal information we hold about you</li>
                    <li><strong>Correction:</strong> You can request that we correct any inaccurate or incomplete information</li>
                    <li><strong>Deletion:</strong> You can request that we delete your personal information</li>
                    <li><strong>Opt-out:</strong> You can unsubscribe from our newsletter at any time by clicking the unsubscribe link in any email</li>
                    <li><strong>Cookie Preferences:</strong> You can manage your cookie preferences through our Cookie Settings</li>
                  </ul>
                  <p>
                    To exercise any of these rights, please contact us using the information provided below.
                  </p>
                </div>
              </div>

              {/* Contact Us */}
              <div id="contact-us">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text">
                    Contact Us
                  </h2>
                </div>
                <div className="prose prose-lg max-w-none text-text-muted space-y-4">
                  <p>
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                  </p>
                  <div className="bg-background-warm rounded-xl p-6 border border-border/50">
                    <p className="font-semibold text-text mb-2">SmallPets Club</p>
                    <p>Email: <a href="mailto:privacy@exoticpetcare.com" className="text-primary hover:underline">privacy@exoticpetcare.com</a></p>
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
              href="/terms"
              className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group border border-border/50 hover:border-primary/20"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <FileText className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-text mb-2">Terms of Use</h3>
              <p className="text-text-muted text-sm">Review the terms governing your use of our website.</p>
            </Link>

            <Link
              href="/cookies"
              className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group border border-border/50 hover:border-primary/20"
            >
              <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
                <Eye className="w-7 h-7 text-secondary-dark" />
              </div>
              <h3 className="font-heading text-xl font-bold text-text mb-2">Cookie Policy</h3>
              <p className="text-text-muted text-sm">Learn about how we use cookies and manage your preferences.</p>
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
