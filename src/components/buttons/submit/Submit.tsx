import React from 'react';
import styles from './Submit.module.scss';

interface ISubmit {
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	name: string;
}

export default function Submit(props: ISubmit) {
	return (
		<button
			name={props.name}
			type='submit'
			onClick={props.onClick}
			className={styles.submit}
			children={props.name}
		/>
	)
}
