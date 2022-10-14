import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react'

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps{
}
//herdando propriedades de CheckboxPrimitive

export function Checkbox(props: CheckboxProps){

    return(
        <CheckboxPrimitive.Root className='w-6 h-6 p-[2px] bg-gray-800 rounded' {... props}>
            <CheckboxPrimitive.Indicator asChild>
                <Check weight='bold' className='h-5 w-5 text-cyan-500'/>
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        
    )
    //usei componente de checkbox do radix (funciona como componente nativo do html), e para isso eu instalei com npm install @radix-ui/react-checkbox
}