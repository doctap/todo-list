import React from 'react';
import { observer } from 'mobx-react-lite';
import TaskItem from '../taskItem/TaskItem';
import todo from '../../store/todo';
import styles from './ListTaskItem.module.scss';

function ListTaskItem() {
	return (
		<div className={styles.listTaskItems}>
			{todo.toDos.map(t =>
				<TaskItem
					key={t.id}
					id={t.id}
					person={t.person}
					textTask={t.textTask}
					isCompleted={t.isCompleted}
					changeStatus={(ID) => todo.completedToDo(ID)}
					deleteTask={(ID) => todo.removeToDo(ID)}
				/>
			)}
		</div>
	)
};

export default observer(ListTaskItem);