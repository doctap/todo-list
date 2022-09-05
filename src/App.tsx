import React from 'react';
import styles from './App.module.scss';
import ListTaskItem from './components/listTaskItem/ListTaskItem';
import { ITaskItem } from './components/taskItem/TaskItem';
import TaskMaker from './components/taskMaker/TaskMaker';

function App() {
	return (
		<div className={styles.App}>

			<div>
			<TaskMaker />
			</div>

			<div className={styles.ListTaskItem}>
				<ListTaskItem items={TODOS} />
			</div>
		</div>
	);
}

export default App;

const TODOS: ITaskItem[] = [
	{
		id: '1',
		person: 'Кирил Валерьевич',
		textTask: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repudiandae voluptas, sunt qui omnis nam voluptatum accusantium! Amet quibusdam saepe repudiandae error suscipit quaerat neque. Sapiente consectetur repellendus odio doloribus!',
	},
	{
		id: '1',
		person: 'Кирил Валерьевич',
		textTask: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repudiandae voluptas, sunt qui omnis nam voluptatum accusantium! Amet quibusdam saepe repudiandae error suscipit quaerat neque. Sapiente consectetur repellendus odio doloribus!',
	},
	{
		id: '1',
		person: 'Кирил Валерьевич',
		textTask: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repudiandae voluptas, sunt qui omnis nam voluptatum accusantium! Amet quibusdam saepe repudiandae error suscipit quaerat neque. Sapiente consectetur repellendus odio doloribus!',
	},

];