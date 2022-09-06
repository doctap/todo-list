import React, { useState } from 'react';
import Submit from '../buttons/submit/Submit';
import TextField from '../inputs/textField/TextField';
import { ITaskItem } from '../taskItem/TaskItem';
import styles from './TaskMaker.module.scss';
import uniqID from 'uniqid';

interface ITaskMaker {
	getTask: (task: ITaskItem) => void;
}

export default function TaskMaker(props: ITaskMaker) {

	const [nameWorker, setNameWorker] = useState('');
	const [description, setDescription] = useState('');

	const sendData = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (nameWorker && description) {
			props.getTask({id: uniqID() , person: nameWorker, textTask: description, isCompleted: false });
			setNameWorker('');
			setDescription('');
		}
	};

	return (
		<form className={styles.taskMaker}>
			<div className={styles.form}>
				<div>
					<TextField label='Имя работника' value={nameWorker} onChange={(e) => setNameWorker(e.currentTarget.value)} />
				</div>
				<div>
					<TextField label='Описание задачи' value={description} onChange={(e) => setDescription(e.currentTarget.value)} />
				</div>
			</div>

			<div className={styles.Submit}>
				<Submit name='Создать задачу' onClick={sendData} />
			</div>
		</form>
	)
}
