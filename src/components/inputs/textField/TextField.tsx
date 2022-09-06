import React from 'react';
import styles from './TextField.module.scss';

interface ITextField {
	label?: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TextField(props: ITextField) {
	return (
		<label className={styles.inputContainer}>
			<span className={styles.inputLabel}>
				{props.label}
			</span>
			<input
				type="text"
				value={props.value}
				onChange={props.onChange}
				className={styles.TextField}
			/>
		</label>
	)
}
