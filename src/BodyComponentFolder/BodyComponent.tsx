import { FunctionComponent, useState } from 'react';
import { ListComponent } from '../ListComponentFolder/ListComponent';
import { Body, DisplayStatus, List } from '../types';
import './BodyComponent.css';

export const BodyComponent: FunctionComponent<Body> = (props: Body) => {
    const [showCompletedItemsState, setShowCompletedItemsState] = useState(
        false
    );

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
        } else if (props.displayStatus === DisplayStatus.Today) {
            return (
                <div className={'default-display-status'}>
                    {DisplayStatus[DisplayStatus.Today]}
                </div>
            );
        } else {
            return (
                <div className={'default-display-status'}>
                    {props.personalListName}
                </div>
            );
        }
    };

    const countCompleted = () => {
        let count = props.lists.reduce((prevList, currList) => {
            let value = currList.items.reduce((prevItem, currItem) => {
                return currItem.completedStatus ? prevItem + 1 : 0;
            }, 0);
            return prevList + value;
        }, 0);

        if (count) {
            return (
                <div className={'todo-completed-status-container'}>
                    <div className={'todo-completed-status-value'}>
                        {count} Completed
                    </div>
                    <button
                        className={'show-completed-button'}
                        onClick={() =>
                            setShowCompletedItemsState(!showCompletedItemsState)
                        }>
                        {showCompletedItemsState ? 'Hide' : 'Show'}
                    </button>
                </div>
            );
        } else {
            return;
        }
    };

    const accumulateLists = () => {
        return props.lists.map((value, index) => {
            return (
                <ListComponent
                    key={props.lists[index].title}
                    title={props.lists[index].title}
                    items={props.lists[index].items}
                    creationDate={props.lists[index].creationDate}
                    displayStatus={props.displayStatus}
                    showCompletedItems={showCompletedItemsState}
                />
            );
        });
    };

    // if (props.displayStatus === DisplayStatus.All) {
    //     const allLists = props.lists.map((value, index) => {
    //         return (
    //             <ListComponent
    //                 title={props.lists[index].title}
    //                 items={props.lists[index].items}
    //                 creationDate={props.lists[index].creationDate}
    //                 displayStatus={props.displayStatus}
    //             />
    //         );
    //     });
    //     return allLists;
    // } else if (props.displayStatus === DisplayStatus.PersonalLists) {
    //     const list = props.lists.filter(value => {
    //         return value.title === props.personalListName;
    //     });
    //     return (
    //         <ListComponent
    //             title={list[0].title}
    //             items={list[0].items}
    //             creationDate={list[0].creationDate}
    //             displayStatus={props.displayStatus}
    //         />
    //     );
    // } else {
    //     return;
    // }

    const lists = accumulateLists();
    return (
        <div className={'todo-body-container'}>
            <div className={'todo-display-status-container'}>
                {displayStatus()}
            </div>
            {countCompleted()}
            <div className={'list-collection-container'}>{lists}</div>
        </div>
    );
};
