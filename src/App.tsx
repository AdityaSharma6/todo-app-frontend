import React, { FunctionComponent, useState } from 'react';
import { Main } from './Components/MainComponentFolder/Main';
import { TodoItemType, TodoListType } from './type';
import { API } from './constants';

export const App: FunctionComponent = () => {
    const [todoListTitleToRequest, setTodoListTitleToRequest] = useState('');
    const [todoList, setTodoList] = useState<TodoListType>({
        _id: '',
        title: '',
        creationDate: '',
        description: '',
        todoItemsCollection: [],
    });

    const getTodoListRequest = async () => {
        const todoListResponse = await fetchTodoListTitle(todoListTitleToRequest);
        const todoItemsCollectionResponse = await fetchTodoItems(todoListResponse._id);
        const incompleteTodoItemCollection = todoItemsCollectionResponse.filter(todoItem => {
            if (!todoItem.isComplete) return todoItem;
        });
        setTodoList({
            _id: todoListResponse._id,
            title: todoListResponse.title,
            creationDate: todoListResponse.creationDate,
            description: todoListResponse.description,
            todoItemsCollection: incompleteTodoItemCollection,
        });
    };

    return (
        <Main
            key={todoList._id}
            getTodoListRequest={getTodoListRequest}
            updateTodoListTitleToRequest={setTodoListTitleToRequest}
            todoListNameToSearch={todoListTitleToRequest}
            todoList={todoList}
        />
    );
};

const fetchTodoListTitle = async (todoListTitle: string): Promise<TodoListType> => {
    try {
        const endpoint = API + `list/${todoListTitle}`;
        const response: Response = await fetch(endpoint);
        console.log(response);
        const { data } = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
};

const fetchTodoItems = async (todoListId: string): Promise<TodoItemType[]> => {
    try {
        const endpoint = API + `items/?_listId=${todoListId}`;
        const response = await fetch(endpoint);
        const { data } = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
};
