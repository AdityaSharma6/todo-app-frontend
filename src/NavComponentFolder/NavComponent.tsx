import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent, useState } from 'react';
import { FilterComponent } from '../FilterComponentFolder/FilterComponent';
import { DisplayStatus, Nav } from '../types';
import { countItems } from '../Utils/countItems';
import { getDate } from '../Utils/getDate';
import './NavComponent.css';

export const NavComponent: FunctionComponent<Nav> = (props: Nav) => {
    const personalListTitles = props.lists.map(value => {
        return (
            <div
                className={'personal-list-title-container'}
                key={value.title}
                onClick={() => props.setPersonalListName(value.title)}>
                <FontAwesomeIcon
                    icon={'list-ul'}
                    className={'personal-list-title-icon'}
                />
                <div className={'personal-list-title-value'}>{value.title}</div>
                <div className={'personal-list-title-count'}>
                    {countItems(false, value.items)}
                </div>
            </div>
        );
    });

    let todayCount = 0;
    let scheduledCount = 0;
    let allCount = 0;
    for (let i = 0; i < props.lists.length; i++) {
        for (let j = 0; j < props.lists[i].items.length; j++) {
            let item = props.lists[i].items[j];
            if (item.dueDate && !item.completedStatus) scheduledCount++;

            if (item.dueDate === getDate() && !item.completedStatus)
                todayCount++;

            if (!item.completedStatus) allCount++;
        }
    }

    return (
        <div className={'todo-navbar-container'}>
            <div className={'searchbox-container'}>
                <input
                    type={'text'}
                    placeholder={'        Search'}
                    className={'searchbox'}
                    value={props.searchText}
                    onChange={event => props.setSearchText(event.target.value)}
                    onClick={() => props.setDisplayStatus(DisplayStatus.All)}
                />
            </div>
            <div
                className={'today-filter-container'}
                onClick={() => props.setDisplayStatus(DisplayStatus.Today)}>
                <FilterComponent
                    displayStatus={DisplayStatus.Today}
                    count={todayCount}
                />
            </div>
            <div
                className={'scheduled-filter-container'}
                onClick={event =>
                    props.setDisplayStatus(DisplayStatus.Scheduled)
                }>
                <FilterComponent
                    displayStatus={DisplayStatus.Scheduled}
                    count={scheduledCount}
                />
            </div>
            <div
                className={'all-filter-container'}
                onClick={event => props.setDisplayStatus(DisplayStatus.All)}>
                <FilterComponent
                    displayStatus={DisplayStatus.All}
                    count={allCount}
                />
            </div>
            <div
                className={'personal-list-container'}
                onClick={event =>
                    props.setDisplayStatus(DisplayStatus.PersonalLists)
                }>
                <span>My List</span>
                <div className={'personal-list-collection'}>
                    {personalListTitles}
                </div>
            </div>
            <div className={'add-list-button-container'}>
                <FontAwesomeIcon
                    icon={'plus-circle'}
                    className={'add-list-button-fontawesome-icon'}
                />
                <span className={'add-list-button-name'}>Add List</span>
            </div>
        </div>
    );
};
