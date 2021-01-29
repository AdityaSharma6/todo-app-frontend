import { TodoItemType } from './types';

export interface ITodoItemProps {
    _id: string;
    listId: string;
    title: string;
    isComplete: boolean;
    updateTodoItemTitle: (updatedTodoItemId: string, updatedTodoItemTitle: string) => void;
    updateTodoItemCompletionStatus: (updatedTodoItemId: string) => void;
}

export interface ITodoListProps {
    _id: string;
    title: string;
    todoItemsCollection: TodoItemType[];
    updateTodoListTitle: (updatedTodoListId: string, updatedTodoListTitle: string) => void;
}
