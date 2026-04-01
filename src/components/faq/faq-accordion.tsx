'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  category: string;
  icon: string;
  items: FAQItem[];
}

interface FaqAccordionProps {
  categories: FAQCategory[];
}

export function FaqAccordion({ categories }: FaqAccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (categoryIndex: number, itemIndex: number) => {
    const itemKey = `${categoryIndex}-${itemIndex}`;
    const newOpenItems = new Set(openItems);

    if (newOpenItems.has(itemKey)) {
      newOpenItems.delete(itemKey);
    } else {
      newOpenItems.add(itemKey);
    }

    setOpenItems(newOpenItems);
  };

  const isOpen = (categoryIndex: number, itemIndex: number) => {
    return openItems.has(`${categoryIndex}-${itemIndex}`);
  };

  return (
    <div className="space-y-8">
      {categories.map((category, categoryIndex) => (
        <div key={category.category} className="bg-white rounded-2xl shadow-md border border-border/50 overflow-hidden">
          {/* Category Header */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 px-6 py-4 border-b border-border/50">
            <h3 className="font-heading text-xl font-bold text-text flex items-center gap-2">
              <span className="text-2xl">{category.icon}</span>
              {category.category}
            </h3>
          </div>

          {/* FAQ Items */}
          <div className="divide-y divide-border/50">
            {category.items.map((item, itemIndex) => (
              <div key={itemIndex}>
                <button
                  onClick={() => toggleItem(categoryIndex, itemIndex)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-background-warm transition-colors duration-200"
                  aria-expanded={isOpen(categoryIndex, itemIndex)}
                >
                  <span className="font-semibold text-text pr-4">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-text-muted flex-shrink-0 transition-transform duration-300 ${
                      isOpen(categoryIndex, itemIndex) ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Animated Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen(categoryIndex, itemIndex) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4 text-text-muted leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
