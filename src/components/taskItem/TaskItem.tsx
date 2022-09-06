import React from 'react';
import styles from './TaskItem.module.scss';

export interface ITaskItem {
	id: string;
	isCompleted: boolean;
	textTask: string;
	person: string;
	changeStatus?: (taskID: string) => void;
}

export default function TaskItem(props: ITaskItem) {
	return (
		<div className={styles.task}>
			<label className={styles.StatusTaskCheckbox}>
				Status Task
				<input
					type="checkbox"
					id={props.id}
					onChange={(e) => props.changeStatus?.(e.currentTarget.id)}
				/>
			</label>

			<div className={styles.body}>
				<div className={styles.person}>
					{props.person}
				</div>
				<div className={styles.textTask}>
					{props.textTask}
				</div>
			</div>


			<div>
				<button children='удалить' />
			</div>
		</div>
	)
}
