import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react' 
import { TextInput, TextInputRootProps } from './TextInput'

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: [
                <TextInput.Icon>
                    <Envelope/>
                </TextInput.Icon>,
                <TextInput.Input placeholder='Type your e-mail address'/>
        ],
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
} as Meta<TextInputRootProps>
//dentro de args eu posso passar qualquer atributo do input do html tradicional
//TextInput.Input pois estou exportando um obj no TextInput

export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
    args:{
        children: <TextInput.Input placeholder='Type your e-mail address'/>
    }
}