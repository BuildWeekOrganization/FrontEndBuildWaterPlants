import * as yup from 'yup';


const signUpSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Username Required')
        .min(5, 'Username must contain at least 5 characters'),
    // email: yup
    //     .string()
    //     .trim()
    //     .email()
    //     .required('Email Required'),
    phone_num: yup
        .string()
        .required('Phone Number Required')
        .min(12, 'Phone must be valid number/format')
        .max(12, 'Phone must be valid number/format'),
    password: yup
        .string()
        .trim()
        .required('Password Required')
        .min(8, 'Password must be at least 8 characters long.'),

})

export default signUpSchema