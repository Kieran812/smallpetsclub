import { Shield, Calendar, BadgeCheck, Heart } from 'lucide-react';

const signals = [
  { icon: Shield, label: 'Expert Guides', desc: 'Written by pet care specialists' },
  { icon: Calendar, label: 'Updated Weekly', desc: 'Fresh content every week' },
  { icon: BadgeCheck, label: 'Vet Reviewed', desc: 'Approved by veterinarians' },
  { icon: Heart, label: 'Community Loved', desc: '10,000+ happy readers' },
];

export function TrustSignals() {
  return (
    <section className="py-12 lg:py-16 bg-background-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {signals.map((signal) => (
            <div key={signal.label} className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                <signal.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-heading font-bold text-text mb-1">{signal.label}</h4>
              <p className="text-sm text-text-muted">{signal.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}