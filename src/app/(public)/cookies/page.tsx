import { Metadata } from 'next';
import Link from 'next/link';
import { Cookie, Settings, Eye, Shield, Mail, ChevronRight, Info } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cookie Policy | SmallPets Club',
  description: 'Learn about how SmallPets Club uses cookies and similar technologies. Understand what cookies are, how we use them, and how you can manage your preferences.',
  keywords: ['cookie policy', 'cookies', 'tracking', 'data privacy', 'exotic pet care cookies'],
  openGraph: {
    title: 'Cookie Policy | SmallPets Club',
    description: 'Learn about how we use cookies and manage your preferences.',
    type: 'website',
    locale: 'en_US',
  },
};

const lastUpdated = 'April 1, 2026';

const tableOfContents = [
  { id: 'what-are-cookies', title: 'What Are Cookies' },
  { id: 'how-we-use', title: 'How We Use Cookies' },
  { id: 'types', title: 'Types of Cookies We Use' },
  { id: 'managing', title: 'Managing Cookies' },
  { id: 'third-party', title: 'Third-Party Cookies' },
  { id: 'contact', title: 'Contact Us' },
];

const cookieTypes = [
  {
    name: 'Essential Cookies',
    description: 'Required for the website to function properly',
    examples: ['Authentication', 'Security', 'Session management'],
    icon: Shield,
    color: 'primary',
  },
  {
    name: 'Analytics Cookies',
    description: 'Help us understand how visitors interact with our website',
    examples: ['Page views', 'Time on site', 'Navigation paths'],
    icon: Eye,
    color: 'secondary',
  },
  {
    name: 'Advertising Cookies',
    description: 'Used to deliver relevant advertisements to you',
    examples: ['Ad targeting', 'Conversion tracking', 'Retargeting'],
    icon: Cookie,
    color: 'accent',
  },
  {
    name: 'Functionality Cookies',
    description: 'Remember your preferences and settings',
    examples: ['Language preference', 'Theme settings', 'Saved items'],
    icon: Settings,
    color: 'primary',
  },
];

export default function CookiesPage() {
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
              <Cookie className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text leading-tight">
              Cookie <span className="text-primary">Policy</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text-muted leading-relaxed">
              This policy explains what cookies are, how SmallPets Club uses them, and the
              choices you have regarding their use when you visit our website.
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
              {/* What Are Cookies */}
              <div id="what-are-cookies">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Cookie className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text">
                    What Are Cookies
                  </h2>
                </div>
                <div className="prose prose-lg max-w-none text-text-muted space-y-4">
                  <p>
                    Cookies are small text files that are stored on your computer or mobile device when
                    you visit a website. They are widely used to make websites work more efficiently,
                    provide a better user experience, and give website owners useful information.
                  </p>
                  <p>
                    When you visit our website, cookies are placed on your device to help us:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Remember your preferences and settings</li>
                    <li>Understand how you use our website</li>
                    <li>Deliver personalized content and advertisements</li>
                    <li>Improve your overall browsing experience</li>
                  </ul>
                  <p>
                    Cookies do not typically contain personally identifying information, but when you
                    create an account or subscribe to our newsletter, your personal information may be
                    linked to the cookies stored on your device.
                  </p>
                </div>
              </div>

              {/* How We Use Cookies */}
              <div id="how-we-use">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center">
                    <Eye className="w-5 h-5 text-secondary-dark" />
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text">
                    How We Use Cookies
                  </h2>
                </div>
                <div className="prose prose-lg max-w-none text-text-muted space-y-4">
                  <p>
                    We use cookies for various purposes, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Authentication:</strong> To recognize you when you sign in and keep you logged in during your visit</li>
                    <li><strong>Preferences:</strong> To remember your settings and preferences, such as language and location</li>
                    <li><strong>Analytics:</strong> To understand how visitors use our site so we can improve it</li>
                    <li><strong>Advertising:</strong> To deliver relevant advertisements and measure their effectiveness</li>
                    <li><strong>Security:</strong> To detect and prevent fraudulent activity and ensure security</li>
                  </ul>
                </div>
              </div>

              {/* Types of Cookies We Use */}
              <div id="types">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Settings className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text">
                    Types of Cookies We Use
                  </h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {cookieTypes.map((type) => (
                    <div
                      key={type.name}
                      className="bg-background-warm rounded-xl p-5 border border-border/50"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 bg-${type.color}/10 rounded-xl flex items-center justify-center`}>
                          <type.icon className={`w-5 h-5 text-${type.color}`} />
                        </div>
                        <h3 className="font-heading text-lg font-bold text-text">{type.name}</h3>
                      </div>
                      <p className="text-text-muted text-sm mb-3">{type.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {type.examples.map((example) => (
                          <span
                            key={example}
                            className="px-2 py-1 bg-white rounded-md text-xs text-text-muted border border-border/50"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-blue-50 rounded-xl p-4 border border-blue-100">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-blue-700">
                      <strong>Session vs. Persistent Cookies:</strong> Session cookies are deleted when you close
                      your browser. Persistent cookies remain on your device until they expire or you delete them.
                    </p>
                  </div>
                </div>
              </div>

              {/* Managing Cookies */}
              <div id="managing">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Settings className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text">
                    Managing Cookies
                  </h2>
                </div>
                <div className="prose prose-lg max-w-none text-text-muted space-y-4">
                  <p>
                    You have several options for managing your cookie preferences:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-background-warm rounded-xl p-5 border border-border/50">
                      <h4 className="font-heading text-lg font-bold text-text mb-2">Browser Settings</h4>
                      <p className="text-sm mb-3">
                        Most web browsers allow you to control cookies through their settings. You can:
                      </p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>View what cookies are stored on your device</li>
                        <li>Delete all or specific cookies</li>
                        <li>Block cookies from all or certain websites</li>
                        <li>Block third-party cookies</li>
                        <li>Clear all cookies when you close the browser</li>
                      </ul>
                    </div>

                    <div className="bg-background-warm rounded-xl p-5 border border-border/50">
                      <h4 className="font-heading text-lg font-bold text-text mb-2">Cookie Consent Banner</h4>
                      <p className="text-sm">
                        When you first visit our website, you will see a cookie consent banner where you can
                        accept or decline non-essential cookies. You can change your preferences at any time
                        by clicking the "Cookie Settings" link in our footer.
                      </p>
                    </div>

                    <div className="bg-background-warm rounded-xl p-5 border border-border/50">
                      <h4 className="font-heading text-lg font-bold text-text mb-2">Opt-Out Links</h4>
                      <p className="text-sm mb-3">
                        Some advertising partners offer opt-out options:
                      </p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li><a href="https://www.google.com/policies/technologies/partner/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Ads</a></li>
                        <li><a href="https://www.facebook.com/help/568137493302217" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Facebook Pixel</a></li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-4">
                    Please note that blocking essential cookies may affect the functionality of our website,
                    and some features may not work properly without them.
                  </p>
                </div>
              </div>

              {/* Third-Party Cookies */}
              <div id="third-party">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center">
                    <Eye className="w-5 h-5 text-secondary-dark" />
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text">
                    Third-Party Cookies
                  </h2>
                </div>
                <div className="prose prose-lg max-w-none text-text-muted space-y-4">
                  <p>
                    Some cookies on our website are placed by third-party services that appear on our pages.
                    We use third-party services for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Google Analytics:</strong> To understand how visitors use our website</li>
                    <li><strong>Google Ads:</strong> To deliver relevant advertisements</li>
                    <li><strong>Facebook Pixel:</strong> To measure and optimize ad campaigns</li>
                    <li><strong>Email Service Providers:</strong> To send newsletters if you subscribe</li>
                  </ul>
                  <p>
                    These third parties may use cookies, web beacons, and similar technologies to collect
                    information about your use of our website and other websites. This information may be
                    used to deliver relevant advertisements on other platforms.
                  </p>
                  <p>
                    We do not control these third-party cookies. If you would like to learn more about how
                    third parties use your information, please visit their respective privacy policies.
                  </p>
                </div>
              </div>

              {/* Contact Us */}
              <div id="contact">
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
                    If you have any questions about our use of cookies or this Cookie Policy, please contact us:
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
              href="/privacy"
              className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group border border-border/50 hover:border-primary/20"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-text mb-2">Privacy Policy</h3>
              <p className="text-text-muted text-sm">Learn how we collect, use, and protect your data.</p>
            </Link>

            <Link
              href="/terms"
              className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group border border-border/50 hover:border-primary/20"
            >
              <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
                <Settings className="w-7 h-7 text-secondary-dark" />
              </div>
              <h3 className="font-heading text-xl font-bold text-text mb-2">Terms of Use</h3>
              <p className="text-text-muted text-sm">Review the terms governing your use of our website.</p>
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
