import { FunctionComponent, useState } from 'react';
import { ITodoListProps } from '../../props';
import { TodoItemType } from '../../types';
import { TodoItem } from '../TodoItemComponentFolder/TodoItem';
import './TodoList.css';

export const TodoList: FunctionComponent<ITodoListProps> = (props: ITodoListProps) => {
    const [todoItemsCollection, setTodoItemsCollection] = useState(props.todoItemsCollection);

    const updateTodoItemTitle = (updatedTodoItemId: string, updatedTodoItemTitle: string) => {
        // API Request to update TodoItem in DB goes HERE
        setTodoItemsCollection(
            todoItemsCollection.map(todoItem => {
                if (todoItem._id === updatedTodoItemId) {
                    todoItem.title = updatedTodoItemTitle;
                }
                return todoItem;
            })
        );
    };

    const updateTodoItemCompletionStatus = (updatedTodoItemId: string) => {
        // API Request to update TodoItem in DB goes HERE
        setTodoItemsCollection(
            todoItemsCollection.filter(todoItem => {
                return todoItem._id !== updatedTodoItemId;
            })
        );
    };

    const addNewTodoItem = () => {
        // API Request to create a TodoItem in DB
        // Once API Request is complete, retrieve the new item details and put it into the array
        if (todoItemsCollection.filter(todoItem => !todoItem.title).length > 0) {
            alert('We have already created another Todo Item. Fill that out first.');
            return;
        }
        // Temp Stuff being placed in TodoItems[]
        const newTodoItem: TodoItemType = {
            _id: Math.random().toString(),
            listId: props._id,
            title: '',
            creationDate: '2020/01/28',
            isComplete: false,
        };

        const newTodoItemCollection = [...todoItemsCollection];
        newTodoItemCollection.push(newTodoItem);

        setTodoItemsCollection(newTodoItemCollection);
    };

    /*
    Data Used during Render:
    - TodoList Title
    - Count of Completed TodoItems within the TodoList
    - List of TodoItems
    */
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
                    onChange={e => props.updateTodoListTitle(props._id, e.target.value)}
                />
                <div className='todolist-uncompleted-item-count'>{todoItemsCollection.length}</div>
            </div>
            <div className='todolist-todoitem-collection-container'>
                {todoItemsCollection.map(todoItem => {
                    return (
                        <TodoItem
                            key={todoItem._id}
                            _id={todoItem._id}
                            listId={todoItem.listId}
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
