import React, { ChangeEvent } from 'react'
import styles from './CheckboxTick.module.scss';

interface ICheckbox {
	checked: boolean;
	onChange: (isChecked: boolean) => void;
}

export default function CheckboxTick(props: ICheckbox) {

	const toggleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
		const elem = e.currentTarget;
		props.onChange(elem.checked);
	}

	return (
		<label className={styles.container}>
			<input
				type='checkbox'
				checked={props.checked}
				onChange={toggleCheckbox}
			/>
			<div className={styles.Tick}>check</div>
			<span className={styles.checkmark}></span>
		</label>
	)
}
