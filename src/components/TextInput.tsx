import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';


export interface TextInputProps extends InputHTMLAttributes<HTMLElement>{
    placeholder?:string
}
//esse extend permite que meu input receba todas as propriedades que um input html tradicional receberia

export interface TextInputRootProps {
    children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
    return(
        <div className="flex items-center gap-3 h-12 py-4 px-3 bg-gray-800 rounded w-full focus-within::ring-2 ring-cyan-300">
            {props.children}
        </div>
    )
}
//focus-within vê se eu tenho um elemento com focus dentro da div

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps{
    children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
    return (
        <Slot className='w-6 h6 text-gray-400'>
            {props.children}
        </Slot>
    )
}
//pensei em usar <></> no lugar de slot (do radix), mas eu queria usar estilização
//como só tem o slot dentro do TextInputIcon, ele se perde para descobrir o nome da função, dando erro, para corrigir, usamos

TextInputIcon.displayName = 'TextInputIcon'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLElement>{}

function TextInputInput(props: TextInputProps) {
    return(
        <input className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none'
                 {...props}
            />
    )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}
//com componente com varios componentes dentro, isso é React de alto nível