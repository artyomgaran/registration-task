import { useState } from 'react';

const initialState = {
	email: '',
	password: '',
	repeatPassword: '',
};

export const useStore = () => {
	const [state, setState] = useState(initialState);

	return {
		state,
		updateState: (fieldName, newValue) => {
			setState(prevState => ({
				...prevState,
				[fieldName]: newValue
			}));
		},
		resetState: () => {
			setState(initialState)
		}
	}
}
