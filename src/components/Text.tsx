import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react';

export interface TextProps{
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}
//o children é porque o texto precisa ter algo dentro
//o children era Text, mas tive que mudar para ReactNode poder receber a tag além do texto

export function Text({ size = 'md', children, asChild, className }: TextProps){
    const Comp = asChild ? Slot : 'span' //caso eu receba uma tag, o asChild recebe true, e eu uso o Slot, caso asChild seja falso, eu uso o span

    return(
        <Comp className={clsx(
            'text-gray-100 font-sans',
            {
                'text-xs': size === 'sm',
                'text-sn': size === 'md',
                'text-md': size === 'lg',
            },
            className,
            )}
        >{children}</Comp>
    )
}