export type TodoItemType = {
    _id: string;
    listId: string;
    title: string;
    description?: string;
    creationDate: string;
    dueDate?: string;
};

export type TodoListType = {
    _id: string;
    title: string;
    description?: string;
    creationDate: string;
    todoItemsCollection: TodoItemType[];
};
