import React, { useState } from 'react';
import styles from './App.module.scss';
import ListTaskItem from './components/listTaskItem/ListTaskItem';
import ControlPanel from './components/controlPanel/ControlPanel';
import todo, { Todo } from './store/todo';

function App() {
	const [selectedSort, setSelectedSort] = useState('allTasks');
	const allTasks = (toDoS: Todo) => <ListTaskItem items={() => toDoS.toDos} changeStatus={(id) => toDoS.changeStatusToDo(id)} deleteTask={(id) => toDoS.removeToDo(id)} />;

	const getListTasks = (selectVariant: string) => {
		switch (selectVariant) {
			case 'allTasks': return allTasks(todo);
			case 'completed': return <ListTaskItem items={() => todo.toDos.filter(t => t.isCompleted)} changeStatus={(id) => todo.changeStatusToDo(id)} deleteTask={(id) => todo.removeToDo(id)} />;
			case 'unimplemented': return <ListTaskItem items={() => todo.toDos.filter(t => !t.isCompleted)} changeStatus={(id) => todo.changeStatusToDo(id)} deleteTask={(id) => todo.removeToDo(id)} />;
			default: return allTasks(todo);
		}
	};
	
	return (
		<div className={styles.App}>
			<div className={styles.TaskMaker}>
				<ControlPanel
					sortValue={selectedSort}
					onChange={(sort) => setSelectedSort(sort)}
				/>
			</div>
			<div className={styles.ListTaskItem}>
				{
					getListTasks(selectedSort)
				}
			</div>
		</div>
	);
}

export default App;

