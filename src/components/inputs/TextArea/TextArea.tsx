import React from 'react';
import Label from '../../label/Label';
import styles from './TextArea.module.scss';

interface ITextArea {
	label: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextArea(props: ITextArea) {
	return (
		<div className={styles.wrapperTextarea}>
			<Label text={props.label} />
			<textarea className={styles.textArea} value={props.value} onChange={props.onChange} name="TextArea" >
				{props.value}
			</textarea>
		</div>
	)
}
