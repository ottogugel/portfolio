import { cn } from "@/app/lib/util"
import { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, className, ...props}: ButtonProps) => {
  return (
    <button
    className={cn(
      'bg-blue-600 py-3 px-4 rounded-lg text-gray-50 flex items-center justify-center gap-2 hover:bg-blue-500 transition-all disabled:opacity-50',
      className
    )}
    {...props}
    >
      {children}
    </button>
  )
}