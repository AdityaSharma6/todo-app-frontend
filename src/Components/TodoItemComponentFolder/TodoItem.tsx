import { useState } from 'react';
import React, { FunctionComponent } from 'react';
import { ITodoItemProps } from '../../props';
import './TodoItem.css';

export const TodoItem: FunctionComponent<ITodoItemProps> = (props: ITodoItemProps) => {
    const [todoItemTitleState, setTodoItemTitleState] = useState(props.title);

    const updateTodoItemTitleHandler = (keyPressed: React.KeyboardEvent<HTMLInputElement>) => {
        if (keyPressed.key === 'Enter') {
            props.updateTodoItemTitle(props._id, todoItemTitleState);
        }
    };

    return (
        <div className='todoitem-container'>
            <div className='todoitem-completion-button-container'>
                <input
                    type='checkbox'
                    checked={props.isComplete}
                    className='todoitem-completion-button'
                    onChange={() => props.updateTodoItemCompletionStatus(props._id)}
                />
            </div>
            <div className={'todoitem-information-container'}>
                <input
                    type={'text'}
                    className={'todoitem-title'}
                    placeholder={'Add Todo Item'}
                    value={todoItemTitleState}
                    onChange={e => {
                        setTodoItemTitleState(e.target.value);
                    }}
                    onKeyPress={e => updateTodoItemTitleHandler(e)}
                />
            </div>
        </div>
    );
};
