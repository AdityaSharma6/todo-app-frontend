import { FunctionComponent } from 'react';
import { DisplayStatus, Filter } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FilterComponent.css';

export const FilterComponent: FunctionComponent<Filter> = (props: Filter) => {
    const selectFontAwesomeIcon = () => {
        if (props.displayStatus === DisplayStatus.Today) {
            return (
                <FontAwesomeIcon
                    icon={'calendar-alt'}
                    className={'today-styles'}
                />
            );
        } else if (props.displayStatus === DisplayStatus.Scheduled) {
            return (
                <FontAwesomeIcon
                    icon={'clock'}
                    className={'scheduled-styles'}
                />
            );
        } else {
            return (
                <FontAwesomeIcon
                    icon={'globe-americas'}
                    className={'all-styles'}
                />
            );
        }
    };

    return (
        <div className={'filter-information-container'}>
            <div className={'fontawesome-container'}>
                {selectFontAwesomeIcon()}
            </div>
            <div className={'count-container'}>{props.count}</div>
            <div className={'display-status-container'}>
                {DisplayStatus[props.displayStatus]}
            </div>
        </div>
    );
};
