import * as Yup from 'yup'

export const validationSchema = Yup.object({
    name: Yup.string().trim().matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, 'Solo se permiten letras.').max(15, 'Exceso de caractéres...').required('Campo requerido.'),
    lastname: Yup.string().matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, 'Solo se permiten letras.').trim().max(15, 'Exceso de caractéres...').required('Campo requerido.'),
    email: Yup.string().email('Formato de email no valido...').required('Campo requerido.')
})