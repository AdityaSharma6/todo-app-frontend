import { FunctionComponent } from 'react';
import { Body, DisplayStatus, List } from '../types';

export const BodyComponent: FunctionComponent<Body> = (props: Body) => {
    const displayStatus = () => {
        if (props.displayStatus === DisplayStatus.Scheduled) {
            return (
                <div className={'scheduled-display-status'}>
                    {DisplayStatus[DisplayStatus.Scheduled]}
                </div>
            );
        } else if (props.displayStatus === DisplayStatus.All) {
            return (
                <div className={'all-display-status'}>
                    {DisplayStatus[DisplayStatus.All]}
                </div>
            );
        } else {
            return (
                <div className={'default-display-status'}>
                    {DisplayStatus[DisplayStatus.PersonalLists]}
                </div>
            );
        }
    };

    const countCompleted = () => {
        let count = 0;
        for (let i: number = 0; i < props.lists.length; i++) {
            const list: List = props.lists[i];
            for (let j: number = 0; j < list.items.length; j++) {
                const item = list.items[j];
                if (item.completedStatus) {
                    count++;
                }
            }
        }
        return count;
    };

    return (
        <div className={'todo-body-container'}>
            <div className={'todo-display-status-container'}>
                All
            </div>
            <div className={'todo-completed-status-container'}>

            </div>
        </div>
    );
};
