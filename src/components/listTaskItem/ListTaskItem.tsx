import React from 'react';
import { observer } from 'mobx-react-lite';
import TaskItem, { ITaskItem } from '../taskItem/TaskItem';
import styles from './ListTaskItem.module.scss';

interface IListTaskItem {
	items: () => ITaskItem[];
	changeStatus: (id: string) => void;
	deleteTask: (id: string) => void;
}

export default observer((props: IListTaskItem) => {
	return (
		<div className={styles.listTaskItems}>
			{
				props.items().length !== 0
					?
					props.items().map(t =>
						<TaskItem
							key={t.id}
							id={t.id}
							person={t.person}
							textTask={t.textTask}
							isCompleted={t.isCompleted}
							changeStatus={(id) => props.changeStatus(id)}
							deleteTask={(id) => props.deleteTask(id)}
						/>)
					:
					<h1>Задачи не найдены!</h1>
			}
		</div>
	)
});