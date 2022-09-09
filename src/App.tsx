import React, { useState } from 'react';
import styles from './App.module.scss';
import ListTaskItem from './components/listTaskItem/ListTaskItem';
import ControlPanel from './components/controlPanel/ControlPanel';
import todo, { arrToDos } from './store/todo';

function App() {

	const [selectedSort, setSelectedSort] = useState('');

	const sortTasks = (sort: string) => {
		setSelectedSort(sort);
		if (sort === 'completed') todo.sortToDos([...arrToDos].filter(t => t.isCompleted === true), sort);
		if (sort === 'unimplemented') todo.sortToDos([...arrToDos].filter(t => t.isCompleted === false), sort);
		if (sort === 'allTasks') todo.sortToDos([...arrToDos], sort);
	};

	return (
		<div className={styles.App}>
			<div className={styles.TaskMaker}>
				<ControlPanel
					sortValue={selectedSort}
					onChange={sortTasks}
				/>
			</div>

			<div className={styles.ListTaskItem}>
				<ListTaskItem />
			</div>
		</div>
	);
}

export default App;

