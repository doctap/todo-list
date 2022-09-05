import React from 'react';
import styles from './TextField.module.scss';

interface ITextField {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TextField(props: ITextField) {
	return (
		<input
			type="text"
			value={props.value}
			onChange={props.onChange}
			className={styles.TextField}
		/>
	)
}
