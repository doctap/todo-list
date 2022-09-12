import React from 'react';
import Label from '../../label/Label';
import styles from './TextField.module.scss';

interface ITextField {
	label?: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TextField(props: ITextField) {
	return (
		<label className={styles.inputContainer}>
			<Label text={props.label} />
			<input
				type="text"
				value={props.value}
				onChange={props.onChange}
				className={styles.TextField}
			/>
		</label>
	)
}
