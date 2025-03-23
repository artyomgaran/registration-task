import { useState } from 'react';
import { Input } from '../Input/Input';
import styles from './form.module.css';
import { useStore } from '../../hooks/useStore';
import { validateAndGetErrorMessage } from '../../utils/validation'

export const Form = () => {
    const { state, updateState, resetState } = useStore();
    const [error, setError] = useState(null);

    const onSubmit = (event) => {
        event.preventDefault();
        const entries = Object.entries(state).slice(0, 2)
		const formData = Object.fromEntries(entries);
		console.log(formData);
        resetState();
        setError(null);
    };

    const onChange = ({ target }) => {
        updateState(target.name, target.value);
    };

    const onBlur = () => {
        let err = validateAndGetErrorMessage(state);
        setError(err);
    };

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            {error && <div className={styles.errorLabel}>{error}</div>}
            <Input
                type="email"
                name="email"
                value={state.email}
                placeholder="Почта"
                onChange={onChange}
                onBlur={onBlur}
            />

            <Input
                type="password"
                name="password"
                value={state.password}
                placeholder="Пароль"
                onChange={onChange}
                onBlur={onBlur}
            />

            <Input
                type="password"
                name="repeatPassword"
                value={state.repeatPassword}
                placeholder="Повторите пароль"
                onChange={onChange}
                onBlur={onBlur}
            />

            <button type="submit" className={styles.button} disabled={!!error}>Зарегистрироваться</button>
        </form>
    );
};
