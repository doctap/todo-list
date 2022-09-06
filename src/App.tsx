import React, { useState } from 'react';
import styles from './App.module.scss';
import ListTaskItem from './components/listTaskItem/ListTaskItem';
import { ITaskItem } from './components/taskItem/TaskItem';
import TaskMaker from './components/taskMaker/TaskMaker';

function App() {

	const [arrToDos, setArrToDos] = useState(TODOS);

	const requestAddTask = (task: ITaskItem) => {
		setArrToDos([...TODOS, task]);
		TODOS.push(task);
	};

	const requestChangeStatus = (taskID: string) => {
		const foundTask: ITaskItem = TODOS.find(t => t.id === taskID) ?? { id: '', isCompleted: false, person: '', textTask: '' };
		foundTask.isCompleted = !foundTask.isCompleted;
	};

	const requestDeleteTask = (taskID: string) => {

	};

	return (
		<div className={styles.App}>
			<div className={styles.TaskMaker}>
				<TaskMaker getTask={requestAddTask} />
			</div>

			<div className={styles.ListTaskItem}>
				<ListTaskItem changeStatus={requestChangeStatus} items={arrToDos} />
			</div>
		</div>
	);
}

export default App;

const TODOS: ITaskItem[] = [
	{
		id: '1',
		isCompleted: false,
		person: 'Кирил Валерьевич',
		textTask: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repudiandae voluptas, sunt qui omnis nam voluptatum accusantium! Amet quibusdam saepe repudiandae error suscipit quaerat neque. Sapiente consectetur repellendus odio doloribus!',
	},
	{
		id: '2',
		isCompleted: false,
		person: 'Генадий Викторович',
		textTask: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repudiandae voluptas, sunt qui omnis nam voluptatum accusantium! Amet quibusdam saepe repudiandae error suscipit quaerat neque. Sapiente consectetur repellendus odio doloribus!',
	},
	{
		id: '3',
		isCompleted: false,
		person: 'Анна Дмитриевна',
		textTask: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repudiandae voluptas, sunt qui omnis nam voluptatum accusantium! Amet quibusdam saepe repudiandae error suscipit quaerat neque. Sapiente consectetur repellendus odio doloribus!',
	},

];