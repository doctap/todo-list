import React, { useState } from 'react';
import TextField from '../inputs/textField/TextField';
import styles from './TaskMaker.module.scss';

export default function TaskMaker() {

	const [nameWorker, setNameWorker] = useState('');
	const [description, setDescription] = useState('');

	return (
		<div className={styles.taskMaker}>
			<form className={styles.form}>
					<TextField value={nameWorker} onChange={(e) => setNameWorker(e.currentTarget.value)} />
					<TextField value={description} onChange={(e) => setDescription(e.currentTarget.value)} />
			</form>

		</div>
	)
}
