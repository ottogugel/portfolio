import { cn } from '@/app/lib/util';
import NextLink from 'next/link'
import { ComponentProps } from 'react'


type LinKProps = ComponentProps<typeof NextLink>;

export const Link = ({ className, children, ...props} :LinKProps) => {
    return (
        <NextLink className={cn('flex items-center gap-2 text-gray-300 text-sm hover:text-blue-500 transition-colors', className)} {...props}>
        {children}
        </NextLink>
    )
}