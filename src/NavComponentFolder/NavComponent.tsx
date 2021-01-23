import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent, useState } from 'react';
import { FilterComponent } from '../FilterComponentFolder/FilterComponent';
import { Body, DisplayStatus, Nav } from '../types';
import { countItems } from '../Utils/countItems';
import './NavComponent.css';

export const NavComponent: FunctionComponent<Nav> = (props: Nav) => {
    const personalListTitles = props.lists.map(value => {
        return (
            <div
                className={'personal-list-title-container'}
                key={value.title}
                onClick={event => props.setPersonalListName(value.title)}>
                <FontAwesomeIcon
                    icon={'list-ul'}
                    className={'personal-list-title-icon'}
                />
                <div className={'personal-list-title-value'}>{value.title}</div>
                <div className={'personal-list-title-count'}>
                    {countItems(true, value.items)}
                </div>
            </div>
        );
    });

    return (
        <div className={'todo-navbar-container'}>
            <div className={'searchbox-container'}>
                <input
                    type={'text'}
                    placeholder={'        Search'}
                    className={'searchbox'}
                    value={props.searchText}
                    onChange={event => props.setSearchText(event.target.value)}
                    onClick={event => props.setDisplayStatus(DisplayStatus.All)}
                />
            </div>
            <div
                className={'today-filter-container'}
                onClick={event => props.setDisplayStatus(DisplayStatus.Today)}>
                <FilterComponent
                    displayStatus={DisplayStatus.Today}
                    count={0}
                />
            </div>
            <div
                className={'scheduled-filter-container'}
                onClick={event =>
                    props.setDisplayStatus(DisplayStatus.Scheduled)
                }>
                <FilterComponent
                    displayStatus={DisplayStatus.Scheduled}
                    count={1}
                />
            </div>
            <div
                className={'all-filter-container'}
                onClick={event => props.setDisplayStatus(DisplayStatus.All)}>
                <FilterComponent displayStatus={DisplayStatus.All} count={2} />
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
