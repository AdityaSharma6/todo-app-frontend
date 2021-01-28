import { FunctionComponent } from 'react';
import './TodoItem.css';

export const TodoItem: FunctionComponent = () => {
    return (
        <div className='todoitem-container'>
            <div className='todoitem-completion-button-container'>
                <input type='checkbox' className='todoitem-completion-button' />
            </div>
            <div className='todoitem-information-container'>
                <input
                    type='text'
                    className='todoitem-title'
                    placeholder={'Add Item'}
                    value={'Item Number 1'}
                />
            </div>
        </div>
    );
};
