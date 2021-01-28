import { useState } from 'react';
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
                <input
                    type='checkbox'
                    checked={props.isComplete}
                    className='todoitem-completion-button'
                    onChange={() =>
                        props.updateTodoItemCompletionStatus(props._id, !props.isComplete)
                    }
                />
            </div>
            <div className={'todoitem-information-container'}>
                <input
                    type={'text'}
                    className={'todoitem-title'}
                    placeholder={'Add Todo Item'}
                    value={props.title}
                    onChange={e => {
                        props.updateTodoItemTitle(props._id, e.target.value);
                    }}
                />
            </div>
        </div>
    );
};
