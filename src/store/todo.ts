import { makeAutoObservable } from 'mobx';
import uniqID from 'uniqid';
import { ITaskItem } from '../components/taskItem/TaskItem';

export class Todo {

	toDos: ITaskItem[] = [
		{
			id: uniqID(),
			isCompleted: false,
			person: 'Кирилл Валерьевич',
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
		this.toDos.push(toDo)
	}

	removeToDo(taskId: string) {
		this.toDos = this.toDos.filter(t => t.id !== taskId)
	}

	changeStatusToDo(taskId: string) {
		this.toDos = this.toDos.map(t => t.id === taskId ? { ...t, isCompleted: !t.isCompleted } : t)
	}
}

export default new Todo();