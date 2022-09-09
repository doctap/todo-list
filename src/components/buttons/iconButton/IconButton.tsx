import React from 'react';
import styles from './IconButton.module.scss';

interface IIconButton {
	text: string;
	onClick: () => void;
	buttonSize?: string;
	color?: string;
}

export default function IconButton(props: IIconButton) {
	return (
		<button
			type='button'
			children={props.text}
			onClick={props.onClick}
			className={styles.myButton}
			style={{
				fontSize: props.buttonSize ?? '1.5rem',
				color: props.color ?? 'black',
			}}
		/>
	)
}
