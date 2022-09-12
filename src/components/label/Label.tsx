import React from 'react'
import styles from './Label.module.scss';

interface ILabel {
	text?: string;
}

export default function Label(props: ILabel) {
	return (
		<label className={styles.Label}>
			{props.text}
		</label>
	)
}