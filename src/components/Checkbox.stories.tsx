import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from './Checkbox'
import { Text } from './Text'

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {},
    argTypes: {},
    decorators: [
        (Story) => {
            return (
                <div className='flex items-center gap-2'>
                    {Story()}
                    <Text size='sm'>Lembrar-me de mim por 30 dias</Text>
                </div>
            )
        }
    ]
} as Meta<CheckboxProps>

//decorators servem para adicionar elementos a mais além do elemento principal mostrado em tela

export const Default: StoryObj<CheckboxProps> = {}