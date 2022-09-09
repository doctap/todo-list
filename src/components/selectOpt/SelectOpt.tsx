import React from 'react';
import styles from './SelectOpt.module.scss';

export interface IOptions {
	value: string;
	name: string;
}

interface ISelectOpt {
	onChange: (option: string) => void;
	options: IOptions[];
	value: string;
	defaultValue: string;
}

export default function SelectOpt(props: ISelectOpt) {
	return (
		<select
			value={props.value}
			onChange={event => props.onChange(event.target.value)}
			className={styles.select}
		>
			{
				props.options.map(opt => <option key={opt.name} value={opt.value} children={opt.name} />)
			}
		</select>
	)
}
