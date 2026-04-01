import { cn } from '@/lib/utils';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className, children }: CardProps) {
  return (
    <div className={cn('bg-white rounded-3xl p-6 shadow-md border border-border/50', className)}>
      {children}
    </div>
  );
}

export function PetCard({ className, children }: CardProps) {
  return (
    <div className={cn('bg-gradient-to-b from-background-warm to-background rounded-3xl p-8 text-center border-2 border-transparent hover:border-primary transition-all duration-200 cursor-pointer hover:-translate-y-1', className)}>
      {children}
    </div>
  );
}

export function PostCard({ className, children }: CardProps) {
  return (
    <div className={cn('bg-white rounded-3xl overflow-hidden shadow-sm border border-border/50 hover:shadow-lg transition-all duration-200 cursor-pointer hover:-translate-y-1', className)}>
      {children}
    </div>
  );
}
