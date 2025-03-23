import * as yup from 'yup';

const validationSchema = yup.object({
	email: yup.string().required('Введите корректную почту').email('Введите почту'),
	password: yup.string().required('Введите пароль').min(3, 'Пароль должен содержать минимум 3 символа'),
	repeatPassword: yup.string()
		.oneOf([yup.ref('password')], 'Пароли не совпадают')
		.required('Повторите пароль')
});

export const validateAndGetErrorMessage = (values) => {
	let errorMessage = null;
	try {
		validationSchema.validateSync(values, { abortEarly: false });
	} catch (err) {
		errorMessage = err.errors[0];
	}
	return errorMessage;
};
