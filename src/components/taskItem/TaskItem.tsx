import React, { useState } from 'react';
import IconButton from '../buttons/iconButton/IconButton';
import CheckboxTick from '../inputs/checkboxTick/CheckboxTick';
import styles from './TaskItem.module.scss';

export interface ITaskItem {
	id: string;
	isCompleted: boolean;
	textTask: string;
	person: string;
	changeStatus?: (taskId: string) => void;
	deleteTask?: (taskId: string) => void;
}

export default function TaskItem(props: ITaskItem) {

	const [isChecked, setIsChecked] = useState(props.isCompleted);
	const [isOpenTask, setIsOpenTask] = useState(false);

	return (
		<div className={styles.task}>
			<div className={styles.StatusTaskCheckbox}>
				<CheckboxTick checked={isChecked} onChange={(isChecked) => {
					props.changeStatus?.(props.id)
					setIsChecked(isChecked)
				}}
				/>
			</div>

			<div
				className={styles.body}
				onClick={() => setIsOpenTask(!isOpenTask)}
			>
				<div className={styles.person}>
					{props.person}
				</div>
				<div
					style={isOpenTask ?
						undefined
						:
						{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', }
					}
					className={isChecked ? `${styles.textTask} ${styles.textTask_textDecoration}` : styles.textTask}
				>
					{props.textTask}
				</div>
			</div>

			<div className={styles.IconButton}>
				<IconButton color='#ab1313' buttonSize='2rem' text='delete_forever' onClick={() => props.deleteTask?.(props.id)} />
			</div>
		</div>
	)
}
