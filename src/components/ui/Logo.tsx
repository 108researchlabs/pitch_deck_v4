import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className, size = 'md' }: LogoProps) {
  const dimensions = {
    sm: 'h-6 w-auto',
    md: 'h-10 w-auto',
    lg: 'h-20 w-auto',
  };

  return (
    <div className={cn('inline-flex items-center', dimensions[size], className)}>
      <img 
        src="/logo.png" 
        alt="108 Research Labs" 
        className="h-full w-auto object-contain"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
