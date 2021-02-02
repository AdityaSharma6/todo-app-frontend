import { TodoItemType, TodoListType } from './type';

export interface ITodoItemProps {
    _id: string;
    _listId: string;
    title: string;
    isComplete: boolean;
    updateTodoItemTitle: (updatedTodoItemId: string, updatedTodoItemTitle: string) => void;
    updateTodoItemCompletionStatus: (updatedTodoItemId: string) => void;
}

export interface ITodoListProps {
    _id: string;
    title: string;
    todoItemsCollection: TodoItemType[];
    setTodoListTitleState: (updatedTodoListTitle: string) => void;
    updateTodoListTitleHandler: (keyPressed: React.KeyboardEvent<HTMLInputElement>) => void;
}

export interface IMainProps {
    getTodoListRequest: () => void; // Presses Enter and Files Request
    updateTodoListTitleToRequest: (todoListNameToSearch: string) => void; // Everynew Input
    todoListNameToSearch: string;
    todoList: TodoListType;
}
