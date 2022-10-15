import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { rest } from 'msw'
import { SignIn } from './SignIn'

export default {
    title: 'Pages/SignIn',
    component: SignIn,
    args: {},
    argTypes: {},
    parameters: {
        msw: {
            handlers: [
                rest.post('/sessions', (req, res, ctx) => {
                    return res(ctx.json({
                        message: 'Login realizado'
                    }))
                })
            ],
        },
    }
} as Meta

export const Default: StoryObj = {
    //executa meus testes automatizados
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)

        userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'edilaine.santos839@gmail.com')
        userEvent.type(canvas.getByPlaceholderText('********'), '12345678')

        userEvent.click(canvas.getByRole('button'))

        //após executar aquelas ações, eu espero que...
        //expect(canvas.getByText('Login realizado!')).toBeInTheDocument()
        //dá erro, porque os componentes demoram um pouco para carregar, fazendo com que eu tenha que importar o waitFor

        await waitFor(() => {
            return expect(canvas.getByText('Login realizado!')).toBeInTheDocument()
        })
    }
}