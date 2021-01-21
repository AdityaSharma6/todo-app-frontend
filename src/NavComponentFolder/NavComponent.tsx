import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent } from 'react';
import { FilterComponent } from '../FilterComponentFolder/FilterComponent';
import { Body, DisplayStatus } from '../types';
import { countItems } from '../Utils/countItems';
import './NavComponent.css';

export const NavComponent: FunctionComponent<Body> = (props: Body) => {
    const getPersonalListTitles = () => {
        const titles = props.lists.map(value => {
            return (
                <div>
                    <FontAwesomeIcon icon={'list-ul'} />
                    <span>{value.title}</span>
                    {countItems(true, value.items)}
                </div>
            );
        });
        return titles;
    };

    return (
        <div className={'todo-navbar-container'}>
            <div className={'searchbox-container'}>
                <input
                    type={'text'}
                    placeholder={'        Search'}
                    className={'searchbox'}
                />
            </div>
            <div className={'today-filter-container'}>
                <FilterComponent
                    displayStatus={DisplayStatus.Today}
                    count={0}
                />
            </div>
            <div className={'scheduled-filter-container'}>
                <FilterComponent
                    displayStatus={DisplayStatus.Scheduled}
                    count={1}
                />
            </div>
            <div className={'all-filter-container'}>
                <FilterComponent displayStatus={DisplayStatus.All} count={2} />
            </div>
            <div className={'reminders-container'}>
                <span>My List</span>
                <div>{getPersonalListTitles()}</div>
            </div>
            <div className={'add-list-button-container'}></div>
        </div>
    );
};
