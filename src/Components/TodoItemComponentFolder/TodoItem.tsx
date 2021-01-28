import { FunctionComponent } from 'react';
import { ITodoItemProps } from '../../props';
import './TodoItem.css';

export const TodoItem: FunctionComponent<ITodoItemProps> = (props: ITodoItemProps) => {
    /*
    Data Used
    - TodoItem Title
    */
    return (
        <div className='todoitem-container'>
            <div className='todoitem-completion-button-container'>
                <input type='checkbox' className='todoitem-completion-button' />
            </div>
            <div className={'todoitem-information-container'}>
                <input
                    type={'text'}
                    className={'todoitem-title'}
                    placeholder={'Add Todo Item'}
                    value={props.title}
                />
            </div>
        </div>
    );
};
