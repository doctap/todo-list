import React from 'react';
import TaskItem, { ITaskItem } from '../taskItem/TaskItem';
import styles from './ListTaskItem.module.scss';

interface IListTaskItem {
	items: ITaskItem[];
}

export default function ListTaskItem(props: IListTaskItem) {
  return (
	 <div className={styles.listTaskItems}>
		{props.items.map(it => <TaskItem key={it.id} id={it.id} person={it.person} textTask={it.textTask} />)}
	 </div>
  )
}
