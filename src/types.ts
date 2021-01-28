export interface TodoItem {
    _id: string;
    listId: string;
    title: string;
    description?: string;
    creationDate: string;
    dueDate?: string;
}

export interface TodoList {
    _id: string;
    title: string;
    description?: string;
    creationDate: string;
}
