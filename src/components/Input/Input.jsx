import PropTypes from 'prop-types';
import styles from './input.module.css'

export const Input = ({ type, name, value, placeholder, onChange, onBlur}) => {
	return (
		<input
			type={type}
			name={name}
			value={value}
			placeholder={placeholder}
			onChange={onChange}
			className={styles.input}
			onBlur= {onBlur}
		/>
	);
};


Input.propTypes = {
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	onBlur: PropTypes.func,
};
