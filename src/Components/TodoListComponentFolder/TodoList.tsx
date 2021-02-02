import React, { FunctionComponent, useState } from 'react';
import { API } from '../../constants';
import { ITodoListProps } from '../../props';
import { TodoItemType } from '../../type';
import { TodoItem } from '../TodoItemComponentFolder/TodoItem';
import './TodoList.css';

export const TodoList: FunctionComponent<ITodoListProps> = (props: ITodoListProps) => {
    const [todoItemsCollection, setTodoItemsCollection] = useState(props.todoItemsCollection);

    // Function to update the TodoItem information in local state & database
    const updateTodoItemTitle = async (updatedTodoItemId: string, updatedTodoItemTitle: string) => {
        // API Request to update TodoItem in DB goes HERE
        console.log('updating', updatedTodoItemId);
        setTodoItemsCollection(
            todoItemsCollection.map(todoItem => {
                if (todoItem._id === updatedTodoItemId) {
                    todoItem.title = updatedTodoItemTitle;
                }
                return todoItem;
            }),
        );
        await updateTodoItemInDatabase(updatedTodoItemId, { title: updatedTodoItemTitle });
    };

    const updateTodoItemCompletionStatus = async (updatedTodoItemId: string) => {
        // API Request to update TodoItem in DB goes HERE
        console.log('updating completion');
        setTodoItemsCollection(
            todoItemsCollection.filter(todoItem => {
                return todoItem._id !== updatedTodoItemId;
            }),
        );
        await updateTodoItemInDatabase(updatedTodoItemId, { isComplete: true });
    };

    const addNewTodoItem = async () => {
        // API Request to create a TodoItem in DB
        // Once API Request is complete, retrieve the new item details and put it into the array
        if (todoItemsCollection.filter(todoItem => !todoItem.title).length > 0) {
            alert('We have already created another Todo Item. Fill that out first.');
            return;
        }

        // Temp Stuff being placed in TodoItems[]
        const newTodoItem: TodoItemType = await createTodoItemInDatabase(props._id);
        console.log(newTodoItem);
        const newTodoItemCollection = [...todoItemsCollection];
        newTodoItemCollection.push(newTodoItem);
        setTodoItemsCollection(newTodoItemCollection);
    };

    return (
        <div className='root-todolist-container'>
            <button className={'add-todoitem-button'} onClick={addNewTodoItem}>
                +
            </button>
            <div className='todolist-information-container'>
                <input
                    className='todolist-title'
                    value={props.title}
                    placeholder={'Add Todo List Title'}
                    onChange={e => props.setTodoListTitleState(e.target.value)}
                    onKeyPress={e => props.updateTodoListTitleHandler(e)}
                />
                <div className='todolist-uncompleted-item-count'>{todoItemsCollection.length}</div>
            </div>
            <div className='todolist-todoitem-collection-container'>
                {todoItemsCollection.map(todoItem => {
                    return (
                        <TodoItem
                            key={todoItem._id}
                            _id={todoItem._id}
                            _listId={todoItem._listId}
                            title={todoItem.title}
                            isComplete={todoItem.isComplete}
                            updateTodoItemTitle={updateTodoItemTitle}
                            updateTodoItemCompletionStatus={updateTodoItemCompletionStatus}
                        />
                    );
                })}
            </div>
        </div>
    );
};

const updateTodoItemInDatabase = async (itemId: string, updatedItem: any) => {
    const endpoint = API + `items/${itemId}`;
    try {
        const response = await fetch(endpoint, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                _id: itemId,
                ...updatedItem,
            }),
        });
        const { data } = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
};

const createTodoItemInDatabase = async (_listId: string) => {
    const endpoint = API + `items/1`;
    try {
        console.log(_listId);
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                _listId: _listId,
                title: ' ',
                description: ' ',
            }),
        });
        const { data } = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
};
