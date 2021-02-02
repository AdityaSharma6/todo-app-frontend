import React, { FunctionComponent, useState } from 'react';
import { Main } from './Components/MainComponentFolder/Main';
import { TodoItemType, TodoListType } from './type';
import { API } from './constants';
import { getTodaysDate } from './Utility/getTodaysDate';

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

    const createTodoListHandler = async () => {
        const response = await createTodoListInDatabase();
        console.log(response);
        setTodoList({
            _id: response._id,
            title: response.title,
            creationDate: response.creationDate,
            description: response.description,
            todoItemsCollection: [],
        });
    };

    return (
        <Main
            key={todoList._id}
            getTodoListRequest={getTodoListRequest}
            updateTodoListTitleToRequest={setTodoListTitleToRequest}
            todoListNameToSearch={todoListTitleToRequest}
            todoList={todoList}
            createTodoListHandler={createTodoListHandler}
        />
    );
};

// GET readOneList
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

// GET readAllItemsFromList
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

// POST createOneList
const createTodoListInDatabase = async (): Promise<TodoListType> => {
    const endpoint = API + 'list/';
    try {
        const date = getTodaysDate();
        console.log(date);
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: `Fake Title #${date}`,
                description: '',
            }),
        });
        const { data } = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
};
