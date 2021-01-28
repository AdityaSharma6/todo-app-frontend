import { FunctionComponent, useState } from 'react';
import { ITodoListProps } from '../../props';
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

    const updateTodoItemCompletionStatus = (
        updatedTodoItemId: string,
        updatedTodoItemCompletionStatus: boolean
    ) => {
        // API Request to update TodoItem in DB goes HERE
        setTodoItemsCollection(
            todoItemsCollection.filter(todoItem => {
                return todoItem._id !== updatedTodoItemId;
            })
        );
    };
    /*
    Data Used during Render:
    - TodoList Title
    - Count of Completed TodoItems within the TodoList
    - List of TodoItems
    */
    return (
        <div className='root-body-container'>
            <div className='todolist-information-container'>
                <div className='todolist-title'>{props.title}</div>
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
