import { FunctionComponent, useState } from 'react';
import { ListComponent } from '../ListComponentFolder/ListComponent';
import { Body, DisplayStatus, Item } from '../types';
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
        if (props.displayStatus === DisplayStatus.Scheduled) {
            let arrayOfAllItems: Item[] = [];
            props.lists.map(value => arrayOfAllItems.push(...value.items));

            let hashtable: { [key: string]: Item[] } = {};
            for (let i = 0; i < arrayOfAllItems.length; i++) {
                let item = arrayOfAllItems[i];
                let key = item.dueDate;

                if (key && !hashtable[key]) {
                    hashtable[key] = [];
                    hashtable[key].push(item);
                } else if (key && hashtable[key]) {
                    hashtable[key].push(item);
                } else {
                    continue;
                }
            }
            let render = [];
            for (const [key, value] of Object.entries(hashtable)) {
                render.push(
                    <ListComponent
                        key={key}
                        title={key}
                        items={value}
                        displayStatus={props.displayStatus}
                        showCompletedItems={showCompletedItemsState}
                    />
                );
            }
            return render;
        } else {
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
        }
    };

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
