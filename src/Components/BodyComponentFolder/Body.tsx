import { FunctionComponent } from 'react';
import { TodoItem } from '../TodoItemComponentFolder/TodoItem';
import './Body.css';

export const Body: FunctionComponent = (props: any) => {
    return (
        <div className='root-body-container'>
            <div className='todolist-information-container'>
                <div className='todolist-title'>Todo List Title</div>
                <div className='todolist-completed-item-count'>5</div>
            </div>
            <div className='todolist-todoitem-collection-container'>
                <TodoItem /> <TodoItem />
            </div>
        </div>
    );
};
