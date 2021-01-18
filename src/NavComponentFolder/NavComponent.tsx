import { FunctionComponent } from 'react';
import './NavComponent.css';

export const NavComponent: FunctionComponent = () => {
    return (
        <div className={'todo-navbar-container'}>
            <div className={'searchbox-container'}>
                <input type={'text'} placeholder={'search'} />
            </div>
            <div className={'today-filter-container'}></div>
            <div className={'scheduled-filter-container'}></div>
            <div className={'all-filter-container'}></div>
            <div className={'reminders-container'}></div>
            <div className={'add-list-button-container'}></div>
        </div>
    );
};
