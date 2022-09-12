import React, { useState } from 'react';
import Submit from '../buttons/submit/Submit';
import TextField from '../inputs/textField/TextField';
import { ITaskItem } from '../taskItem/TaskItem';
import styles from './TaskMaker.module.scss';
import uniqID from 'uniqid';
import TextArea from '../inputs/TextArea/TextArea';

interface ITaskMaker {
	getTask: (task: ITaskItem) => void;
}

export default function TaskMaker(props: ITaskMaker) {

	const [nameWorker, setNameWorker] = useState('');
	const [description, setDescription] = useState('');

	const sendData = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (nameWorker && description) {
			props.getTask({ id: uniqID(), person: nameWorker, textTask: description, isCompleted: false });
			setNameWorker('');
			setDescription('');
		}
	};

	return (
		<form className={styles.taskMaker}>
			<div className={styles.inputs}>
				<div className={styles.TextField}>
					<TextField label='Имя работника' value={nameWorker} onChange={(e) => setNameWorker(e.currentTarget.value)} />
				</div>
				<div className={styles.TextArea}>
					<TextArea label='Описание задачи' value={description} onChange={(e) => setDescription(e.currentTarget.value)} />
				</div>
			</div>
			<div className={styles.Submit}>
				<Submit name='Добавить' onClick={sendData} />
			</div>
		</form>
	)
}
