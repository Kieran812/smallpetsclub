import { Metadata } from 'next';
import Link from 'next/link';
import { Mail, MapPin, Clock, MessageCircle, Heart } from 'lucide-react';
import ContactForm from './contact-form';

export const metadata: Metadata = {
  title: 'Contact Us | SmallPets Club',
  description: 'Get in touch with our team. We are here to answer your questions about exotic pet care, hear your suggestions, or discuss partnership opportunities.',
  keywords: ['contact exotic pet care', 'get in touch', 'exotic pet questions', 'pet care support'],
  openGraph: {
    title: 'Contact Us | SmallPets Club',
    description: 'Get in touch with our team about exotic pet care questions and more.',
    type: 'website',
    locale: 'en_US',
  },
};

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: 'Pinterest',
    href: 'https://pinterest.com',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
];

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    content: 'hello@exoticpetcare.com',
    href: 'mailto:hello@exoticpetcare.com',
  },
  {
    icon: Clock,
    title: 'Response Time',
    content: 'We reply within 24-48 hours',
    href: null,
  },
  {
    icon: MapPin,
    title: 'Location',
    content: 'San Francisco, CA',
    href: null,
  },
];

export default function ContactPage() {
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
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text leading-tight">
              Get in{' '}
              <span className="text-primary">Touch</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text-muted leading-relaxed">
              Have a question about your exotic pet? Have a story to share? Or just want to say hello?
              We would love to hear from you. Our team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="font-heading text-3xl font-bold text-text mb-3">Send Us a Message</h2>
                <p className="text-text-muted">
                  Fill out the form below and we will get back to you as soon as possible.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <h2 className="font-heading text-3xl font-bold text-text mb-3">
                  Contact Information
                </h2>
                <p className="text-text-muted">
                  Prefer another way to reach us? Here is all the ways you can get in touch.
                </p>
              </div>

              {/* Info Cards */}
              <div className="space-y-4 mb-10">
                {contactInfo.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-4 p-4 bg-background-warm rounded-xl border border-border/50"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-text">{item.title}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-text-muted hover:text-primary transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-text-muted">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mb-10">
                <h3 className="font-heading text-xl font-bold text-text mb-4">Follow Us</h3>
                <p className="text-text-muted mb-4">
                  Stay connected with us on social media for the latest pet care tips, cute photos,
                  and community updates.
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-background-warm rounded-xl flex items-center justify-center text-text-muted hover:text-primary hover:bg-primary/10 transition-all duration-200 border border-border/50"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* FAQ Link */}
              <div className="bg-gradient-to-br from-secondary/20 to-background-warm rounded-2xl p-6 border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-secondary-dark" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-text mb-2">
                      Have a Quick Question?
                    </h3>
                    <p className="text-text-muted text-sm mb-3">
                      Check out our FAQ section for instant answers to common questions about
                      pet care, content, and more.
                    </p>
                    <Link
                      href="/faq"
                      className="inline-flex items-center gap-1 text-primary font-semibold hover:gap-2 transition-all duration-200"
                    >
                      Visit FAQ
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pet Gallery CTA */}
      <section className="py-16 lg:py-24 bg-background-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 lg:p-12 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-primary animate-bounce-soft" />
              <span className="text-primary font-semibold">We Care About Your Pets</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-text mb-4">
              Every Message Matters to Us
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto leading-relaxed">
              Whether you have a question about your hamster is diet, need advice on chinchilla
              enrichment, or want to share your pet parenting journey, we are here for you and
              your furry (or spiky) friends.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
