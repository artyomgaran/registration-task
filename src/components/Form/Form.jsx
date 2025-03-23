import { useForm } from "react-hook-form";
import styles from "./form.module.css";

export const Form = () => {
	const { register, handleSubmit, watch, formState } = useForm();

	const { errors, isValid } = formState;

	const passwordValue = watch("password");

	const validationRules = {
		email: { required: "Введите почту" },
		password: {
			required: "Введите пароль",
			minLength: { value: 6, message: "Минимум 6 символов" },
		},
		repeatPassword: {
			required: "Повторите пароль",
			validate: (value) => value === passwordValue || "Пароли не совпадают",
		},
	};

	const onSubmit = (formData) => {
		console.log("Данные формы:", formData);
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			{errors.email && <div className={styles.errorLabel}>{errors.email.message}</div>}
			{errors.password && <div className={styles.errorLabel}>{errors.password.message}</div>}
			{errors.repeatPassword && <div className={styles.errorLabel}>{errors.repeatPassword.message}</div>}

			<input
				className={styles.input}
				type="email" placeholder="Почта"
				{...register("email", validationRules.email)}
			/>
			<input
				className={styles.input}
				type="password"
				placeholder="Пароль"
				{...register("password", validationRules.password)}
			/>
			<input
				className={styles.input}
				type="password"
				placeholder="Повторите пароль"
				{...register("repeatPassword", validationRules.repeatPassword)}
			/>
			<button type="submit" className={styles.button} disabled={!isValid}>
				Зарегистрироваться
			</button>
		</form>
	);
};
