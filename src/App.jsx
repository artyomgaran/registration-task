import styles from './app.module.css'
import { Form } from './components/Form/Form';



export const App = () => {

	return (
		<>
		<div className={styles.app}>
			<h1 className={styles['page-heading']}>Регистрация</h1>
			<Form/>
		</div>
		</>
	);
};
