import { object, string, TypeOf } from 'zod'

export const createUserSchema = object({
    body: object({
        name: string({ required_error: 'Name is required' }),
        password: string({ required_error: 'Name is required' }).min(
            6,
            'Password must be 6 chars minimum'
        ),
        passwordConfirmation: string({
            required_error: 'pwdConfirm is required',
        }),
        email: string({ required_error: 'email is required' }).email(
            'email is invalid'
        ),
    }).refine((data) => data.password === data.passwordConfirmation, {
        message: 'pwds done match',
        path: ['passwordConfirmation'],
    }),
})

export type CreateUserInput = Omit<
    TypeOf<typeof createUserSchema>,
    'body.passwordConfirmation'
>
