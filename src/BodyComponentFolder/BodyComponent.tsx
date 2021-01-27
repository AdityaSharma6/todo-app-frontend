import { FunctionComponent, useState } from 'react';
import { ListComponent } from '../ListComponentFolder/ListComponent';
import { Body, DisplayStatus, Item } from '../types';
import './BodyComponent.css';

export const BodyComponent: FunctionComponent<Body> = (props: Body) => {
    const [showCompletedItemsState, setShowCompletedItemsState] = useState(
        false
    );
    const [arrayOfListComponentState, setArrayOfListComponentState] = useState(
        props.lists
    );
    // console.log(props.lists, 'vs', arrayOfListComponentState);

    const setUpdatedItemState = (updatedItem: Item) => {
        console.log('updatingItemsArray');
        // let updatedArray = arrayOfListComponentState;
        // for (let i = 0; i < updatedArray.length; i++) {
        //     for (let j = 0; j < updatedArray[i].items.length; j++) {
        //         let item = updatedArray[i].items[j];
        //         if (item._id === updatedItem._id) {
        //             console.log('here');
        //             console.log(updatedArray[i].items[j]);
        //             updatedArray[i].items[j] = updatedItem;
        //             console.log(updatedArray[i].items[j]);
        //             break;
        //         }
        //     }
        // }
        // setArrayOfListComponentState(updatedArray);
    };

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
        let count = 0;
        for (let i = 0; i < arrayOfListComponentState.length; i++){
            for (let j = 0; j < arrayOfListComponentState[i].items.length; j++){
                if (arrayOfListComponentState[i].items[j].completedStatus) count++;
            }
        }

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
            arrayOfListComponentState.map(value =>
                arrayOfAllItems.push(...value.items)
            );

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
                        onItemUpdate={setUpdatedItemState}
                    />
                );
            }
            return render;
        } else {
            return arrayOfListComponentState.map((value, index) => {
                return (
                    <ListComponent
                        key={arrayOfListComponentState[index].title}
                        title={arrayOfListComponentState[index].title}
                        items={arrayOfListComponentState[index].items}
                        creationDate={
                            arrayOfListComponentState[index].creationDate
                        }
                        displayStatus={props.displayStatus}
                        showCompletedItems={showCompletedItemsState}
                        onItemUpdate={setUpdatedItemState}
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
