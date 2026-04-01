import { Metadata } from 'next';
import { HelpCircle, MessageCircle, Mail, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { FaqAccordion } from '@/components/faq/faq-accordion';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | SmallPets Club',
  description: 'Find answers to common questions about caring for exotic pets including hamsters, chinchillas, hedgehogs, and fancy rats. Get expert advice on diet, housing, health, and social needs.',
  keywords: ['FAQ', 'exotic pet FAQ', 'hamster care questions', 'chinchilla care questions', 'hedgehog FAQ', 'fancy rat questions', 'pet care help'],
  openGraph: {
    title: 'Frequently Asked Questions | SmallPets Club',
    description: 'Find answers to common questions about caring for exotic pets.',
    type: 'website',
    locale: 'en_US',
  },
};

const faqData = [
  {
    category: 'General',
    icon: '🐾',
    items: [
      {
        question: 'What do exotic pets eat?',
        answer: 'Each exotic pet has specific dietary needs. Hamsters thrive on quality hamster pellets, fresh vegetables, and occasional protein like mealworms. Chinchillas need unlimited timothy hay and limited pellets. Hedgehogs are insectivores requiring high-protein diets with insects and specialized kibble. Fancy rats are omnivores that enjoy pellets, fresh veggies, fruits, and occasional cooked eggs or lean meats. Always research your specific pet\'s nutritional requirements and avoid foods high in sugar, fat, or that are toxic to your particular species.',
      },
      {
        question: 'How often should I take my exotic pet to the vet?',
        answer: 'Exotic pets should have annual wellness exams with an exotics-trained veterinarian. These check-ups help establish baseline health data and catch potential issues early. Between visits, monitor your pet daily for changes in appetite, behavior, droppings, or appearance. Seek immediate veterinary care if you notice lethargy, loss of appetite, breathing difficulties, bleeding, or any sudden behavioral changes. Many exotic pet issues can become serious quickly if left untreated.',
      },
      {
        question: 'Can exotic pets live together?',
        answer: 'This depends entirely on the species. Syrian hamsters are strictly solitary and must live alone, while dwarf hamsters may tolerate same-species pairs under careful introduction. Chinchillas are generally solitary and do best alone. Hedgehogs are solitary and should be housed separately. Fancy rats are highly social and actually need at least one same-species companion to thrive. Never house different species together, as this can lead to injury, stress, or disease transmission.',
      },
    ],
  },
  {
    category: 'Hamster Care',
    icon: '🐹',
    items: [
      {
        question: 'How often should I clean my hamster\'s cage?',
        answer: 'A deep clean should happen every 3-4 weeks, but spot cleaning should be done daily. Remove soiled bedding and droppings daily, and replace with fresh bedding. Full cage cleaning involves removing all bedding, scrubbing the cage with mild soap, rinsing thoroughly, and adding completely fresh bedding. Avoid harsh chemicals that could harm your hamster. Some hamsters mark territory, so they may become stressed after deep cleaning - consider leaving some old bedding with their scent to help them feel secure.',
      },
      {
        question: 'What size cage does a hamster need?',
        answer: 'The minimum recommended cage size for a Syrian hamster is 450 square inches of floor space (about 30" x 15"), though bigger is always better. Dwarf hamsters need at least 360 square inches. The cage should have good ventilation, a solid floor (not wiremesh which can hurt their feet), multiple levels for exploration, and space for an exercise wheel, hideouts, and enrichment items. Many experts recommend cages with at least 600-800 square inches for optimal wellbeing.',
      },
      {
        question: 'Why is my hamster biting me?',
        answer: 'Hamsters may bite for several reasons: fear (especially if they\'re not hand-tamed), being startled from sleep, smelling food on your hands, or feeling cornered or threatened. To prevent biting, move slowly, wash your hands before handling, let your hamster sniff your hand first, and avoid waking them abruptly. If your hamster does bite, avoid flinching or shaking your hand as this can injure them. With patience and consistent gentle handling, most hamsters learn to trust their owners and stop biting.',
      },
    ],
  },
  {
    category: 'Chinchilla Care',
    icon: '🦫',
    items: [
      {
        question: 'Can chinchillas get wet?',
        answer: 'No! Chinchillas should never get wet. Their fur is extremely dense - about 60 hairs per follicle compared to humans\' one hair per follicle - and cannot dry properly. Wet fur can lead to fungal infections, hypothermia, and serious health issues. Instead of bathing in water, chinchillas take dust baths. Commercial chinchilla dust (not sand) should be offered in a small container 2-4 times per week for 10-15 minutes. The dust absorbs oils and moisture from their fur, keeping it clean and fluffy.',
      },
      {
        question: 'What temperature do chinchillas need?',
        answer: 'Chinchillas are extremely heat-sensitive and need temperatures between 60-70°F (15-21°C). Anything above 75°F (24°C) puts them at risk for heat stroke, which can be fatal. They cannot pant or sweat like humans, so they struggle to cool down. Keep your chinchilla\'s room well-air conditioned, away from direct sunlight and heat sources. In summer, use ceramic tiles, granite slabs, or air conditioning to keep them cool. A room that\'s too cold (below 50°F) can also cause health problems.',
      },
      {
        question: 'Do chinchillas need companionship?',
        answer: 'Chinchillas can be social but are not colony animals in the wild. While some chinchillas enjoy living with a same-species companion if introduced properly at a young age, many prefer to live alone. Housing two chinchillas together always carries risks of fighting, stress, and competition for resources. If you want to house chinchillas together, careful same-sex introductions and providing multiple hiding spots, food bowls, and water bottles is essential. Monitor all interactions closely and have a backup plan to separate them if needed.',
      },
    ],
  },
  {
    category: 'Hedgehog Care',
    icon: '🦔',
    items: [
      {
        question: 'Do hedgehogs make good pets?',
        answer: 'Hedgehogs can make wonderful pets for the right owners. They\'re quiet, space-efficient, and have unique personalities. However, they\'re nocturnal, which means they\'re most active at night - not ideal if you want to interact during daytime. Hedgehogs require regular handling to stay tame, need a warm environment (72-80°F), and can be messy. They also have specific dietary needs and require annual vet checkups with an exotic pet veterinarian. Research thoroughly before adopting to ensure a hedgehog\'s needs align with your lifestyle.',
      },
      {
        question: 'What should I feed my hedgehog?',
        answer: 'A proper hedgehog diet is high in protein and low in fat. Commercial hedgehog kibble forms a good base, supplemented with insects (mealworms, crickets, waxworms as treats), cooked lean meats, and small amounts of fruits and vegetables like apples, carrots, or green beans. Avoid cat food as a primary diet (too many carbohydrates), nuts, seeds, raw meat, onions, garlic, and anything high in sugar or fat. Fresh water should always be available. Some hedgehogs are prone to weight gain, so monitor their food intake and adjust accordingly.',
      },
      {
        question: 'How do I handle my hedgehog?',
        answer: 'Approach your hedgehog calmly and let them sniff your hand first. Some hedgehogs huff or curl into balls when nervous - this is normal. Support their belly and let them uncurl at their own pace. Use gloves if they\'re especially spiny, and place them in a safe, enclosed area for floor time. Handle for short periods daily to build trust. Never squeeze a hedgehog or grab them from above (this scares them). With patience, most hedgehogs learn to recognize their owners and relax during handling sessions.',
      },
    ],
  },
  {
    category: 'Fancy Rat Care',
    icon: '🐀',
    items: [
      {
        question: 'Are fancy rats social animals?',
        answer: 'Absolutely! Fancy rats are highly social and should never live alone. They need at least one same-species companion to thrive. Same-sex pairs or groups work best - males can be kept together if raised together from a young age, while females are generally easier to introduce at any age. A lone rat will become depressed, stressed, and may develop behavioral or health problems. If you only want one pet, plan to spend several hours daily interacting with your rat to meet their social needs.',
      },
      {
        question: 'What kind of cage do rats need?',
        answer: 'Rats need spacious cages with multiple levels for climbing and exploration. The minimum for two rats is 2 cubic feet (about 24" x 12" x 12"), but larger is always better. Look for cages with solid floors (wire floors hurt their feet), narrow bar spacing (less than 1/2 inch to prevent escapes), and easy cleaning access. Avoid aquariums as they have poor ventilation. The cage should include hammocks, hideouts, platforms, and plenty of rat-safe toys. Clean the cage thoroughly at least once a week.',
      },
      {
        question: 'Are male or female rats better?',
        answer: 'Both make excellent pets with some key differences. Males tend to be larger, lazier, and more cuddly - they often enjoy lounging on your lap or shoulders. Females are more active, curious, and playful, often showing more energy during interaction time. Males can develop hormonal aggression if not neutered and may have stronger odors, while females are generally more explorative. Neither is objectively "better" - the choice depends on your preferences for size, activity level, and snuggliness.',
      },
    ],
  },
];

const quickLinks = [
  {
    icon: BookOpen,
    title: 'Care Guides',
    description: 'Detailed care instructions for each species',
    href: '/blog',
  },
  {
    icon: MessageCircle,
    title: 'Community Forum',
    description: 'Connect with other exotic pet owners',
    href: '/blog',
  },
  {
    icon: Mail,
    title: 'Contact Us',
    description: 'Couldn\'t find your answer? Reach out directly',
    href: '/contact',
  },
];

export default function FAQPage() {
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
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text leading-tight">
              Frequently Asked{' '}
              <span className="text-primary">Questions</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text-muted leading-relaxed">
              Everything you need to know about caring for your exotic pet.
              From diet and housing to health and behavior, we&apos;ve got answers to help you be the best pet parent.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion categories={faqData} />
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary-dark font-semibold text-sm rounded-full mb-4">
              Still Have Questions?
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text mb-4">
              Explore More Resources
            </h2>
            <p className="text-text-muted text-lg">
              Can&apos;t find what you&apos;re looking for? Check out our care guides or get in touch with our community.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {quickLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="bg-background-warm rounded-2xl p-6 hover:bg-primary/10 transition-colors duration-300 group border border-transparent hover:border-primary/20"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  <link.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-text mb-2">{link.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-secondary to-secondary-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Learn More?
          </h2>
          <p className="text-white/90 text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Dive into our comprehensive care guides and join thousands of happy exotic pet parents who trust us with their little friends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-secondary font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              Browse Care Guides
              <BookOpen className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-2xl hover:bg-white/10 transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
