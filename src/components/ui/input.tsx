import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  small?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, small, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex w-full rounded-md border border-input bg-background ring-offset-background file:border-0 file:bg-transparent  placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
        small ? "h-[50px] px-4 py-1 file:text-base file:font-semibold text-base" : "h-10 file:text-sm file:font-medium text-sm px-3 py-2",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
