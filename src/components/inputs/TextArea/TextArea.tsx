import React from 'react';
import styles from './TextArea.module.scss';

interface ITextArea {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextArea(props: ITextArea) {
	return (
		<textarea className={styles.textArea} value={props.value} onChange={props.onChange} name="TextArea" id="" cols={100} rows={5}>
			{props.value}
		</textarea>
	)
}
