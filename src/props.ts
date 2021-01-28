import { TodoItemType } from './types';

export interface ITodoItemProps {
    _id: string;
    listId: string;
    title: string;
}

export interface ITodoListProps {
    _id: string;
    title: string;
    todoItemsCollection: TodoItemType[];
}
