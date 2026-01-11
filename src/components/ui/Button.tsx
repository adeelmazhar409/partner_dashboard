import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost' | 'lime' | 'outline';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export const Button = ({
  children,
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-medium transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        {
          'bg-black text-white hover:bg-neutral-800': variant === 'default',
          'bg-transparent hover:bg-neutral-100': variant === 'ghost',
          'bg-primary-lime text-black hover:bg-primary-green': variant === 'lime',
          'border border-neutral-200 bg-white hover:bg-neutral-50': variant === 'outline',
        },
        {
          'h-10 px-4 py-2': size === 'default',
          'h-9 rounded-md px-3': size === 'sm',
          'h-11 rounded-md px-8': size === 'lg',
          'h-10 w-10': size === 'icon',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};