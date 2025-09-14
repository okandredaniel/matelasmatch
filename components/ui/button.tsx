'use client';

import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 shrink-0 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-secondary text-foreground hover:bg-secondary/90 shadow-sm',
        primary:
          'bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm',
        secondary:
          'bg-secondary text-foreground hover:bg-secondary/85 shadow-sm',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm',
        outline:
          'border-2 border-input bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent',
        ghost:
          'bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground',
        link: 'bg-transparent text-accent underline-offset-4 h-auto p-0 hover:underline focus-visible:underline visited:text-accent/90',
        affiliate:
          'text-white border border-white/20 bg-gradient-to-r from-indigo-500/80 to-purple-500/80 backdrop-blur-md shadow-lg hover:from-indigo-600/90 hover:to-purple-600/90 hover:shadow-indigo-500/25 motion-safe:transition-transform motion-safe:hover:scale-105',
      },
      size: {
        sm: 'h-8 px-3',
        default: 'h-9 px-4',
        lg: 'h-10 px-6',
        xl: 'h-14 px-8',
        icon: 'size-9',
      },
      block: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      block: false,
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      block,
      asChild = false,
      disabled,
      onClick,
      type,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    const handleClick: React.MouseEventHandler<HTMLElement> = (e) => {
      if (disabled) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      onClick?.(e as unknown as React.MouseEvent<HTMLButtonElement>);
    };

    const sharedProps = {
      'data-slot': 'button',
      'data-variant': variant,
      'data-size': size,
      className: cn(buttonVariants({ variant, size, block }), className),
      onClick: handleClick,
      ...(asChild
        ? {
            'aria-disabled': disabled || undefined,
            'data-disabled': disabled ? '' : undefined,
            tabIndex: disabled ? -1 : undefined,
            role: 'button',
          }
        : { disabled, type: type ?? 'button' }),
    };

    return <Comp ref={ref} {...sharedProps} {...props} />;
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
