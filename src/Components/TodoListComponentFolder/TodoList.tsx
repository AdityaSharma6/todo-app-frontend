import { FunctionComponent } from 'react';
import { ITodoListProps } from '../../props';
import { TodoItem } from '../TodoItemComponentFolder/TodoItem';
import './TodoList.css';

export const TodoList: FunctionComponent<ITodoListProps> = (props: ITodoListProps) => {
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
                <div className='todolist-uncompleted-item-count'>
                    {props.todoItemsCollection.length}
                </div>
            </div>
            <div className='todolist-todoitem-collection-container'>
                {props.todoItemsCollection.map(todoItem => {
                    return (
                        <TodoItem
                            _id={todoItem._id}
                            listId={todoItem.listId}
                            title={todoItem.title}
                        />
                    );
                })}
            </div>
        </div>
    );
};
