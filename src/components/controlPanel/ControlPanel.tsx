import React from 'react';
import todo, { optionsForSelectSort } from '../../store/todo';
import SelectOpt from '../selectOpt/SelectOpt';
import TaskMaker from '../taskMaker/TaskMaker';
import styles from './ControlPanel.module.scss';

interface IControlPanel {
	onChange: (sort: string) => void;
	sortValue: string;
}

export default function ControlPanel(props: IControlPanel) {
	return (
		<div className={styles.controlPanel}>
			<div className={styles.TaskMaker}>
			<TaskMaker getTask={(task) => todo.addToDo(task)} />
			</div>
			<SelectOpt
				onChange={(sort) => props.onChange(sort)}
				options={optionsForSelectSort}
				value={props.sortValue}
				defaultValue='Сортировка'
			/>
		</div>
	)
}