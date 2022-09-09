import { makeAutoObservable } from 'mobx';
import uniqID from 'uniqid';
import { toJS } from 'mobx';
import { ITaskItem } from '../components/taskItem/TaskItem';
import { IOptions } from '../components/selectOpt/SelectOpt';

export const optionsForSelectSort: IOptions[] = [
	{
		name: 'Все задачи',
		value: 'allTasks',
	},
	{
		name: 'Выполненные',
		value: 'completed',
	},
	{
		name: 'Невыполненные',
		value: 'unimplemented',
	},
];

export class Todo {
	/**
	 * defaultSortValue
	 */
	sortValue: string = optionsForSelectSort[0].value;

	toDos: ITaskItem[] = [
		{
			id: uniqID(),
			isCompleted: false,
			person: 'Кирил Валерьевич',
			textTask: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repudiandae voluptas, sunt qui omnis nam voluptatum accusantium! Amet quibusdam saepe repudiandae error suscipit quaerat neque. Sapiente consectetur repellendus odio doloribus!',
		},
		{
			id: uniqID(),
			isCompleted: true,
			person: 'Генадий Викторович',
			textTask: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repudiandae voluptas, sunt qui omnis nam voluptatum accusantium! Amet quibusdam saepe repudiandae error suscipit quaerat neque. Sapiente consectetur repellendus odio doloribus!',
		},
		{
			id: uniqID(),
			isCompleted: false,
			person: 'Анна Дмитриевна',
			textTask: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repudiandae voluptas, sunt qui omnis nam voluptatum accusantium! Amet quibusdam saepe repudiandae error suscipit quaerat neque. Sapiente consectetur repellendus odio doloribus!',
		},
	];

	constructor() {
		makeAutoObservable(this)
	}

	addToDo(toDo: ITaskItem) {
		console.log('addToDo')
		arrToDos.push(toDo)
		if (this.sortValue === 'allTasks') {
			this.toDos.push(toDo)
		}
		console.log(arrToDos)
	}

	removeToDo(taskID: string) {
		console.log('removeToDo')
		this.toDos = this.toDos.filter(t => t.id !== taskID)
		arrToDos = [...toJS(this.toDos)]
		console.log(arrToDos)
	}

	completedToDo(taskID: string) {
		console.log('completedToDo')
		this.toDos = this.toDos.map(t => t.id === taskID ? { ...t, isCompleted: !t.isCompleted } : t)
		arrToDos = [...toJS(this.toDos)]
		console.log(arrToDos)
	}

	sortToDos(sort: ITaskItem[], sortValue: string) {
		this.toDos = sort
		this.getSortValue(sortValue)
		console.log([...toJS(this.toDos)])
		console.log(arrToDos)
	}

	getSortValue(sortValue: string) {
		this.sortValue = sortValue
	}
}

export default new Todo();

export let arrToDos: ITaskItem[] = [];
arrToDos.push(...toJS(new Todo().toDos));