import { FunctionComponent } from 'react';
import { ItemComponent } from '../ItemComponentFolder/ItemComponent';
import { DisplayStatus, List } from '../types';
import './ListComponent.css';

export const ListComponent: FunctionComponent<List> = (props: List) => {
    const generateItemsArray = () => {
        let itemArray = [];
        for (let i = 0; i < props.items.length; i++) {
            if (!props.showCompletedItems && props.items[i].completedStatus) {
                continue;
            } else {
                itemArray.push(
                    <ItemComponent
                        key={props.items[i]._id}
                        _id={props.items[i]._id}
                        listId={props.items[i].listId}
                        title={props.items[i].title}
                        description={props.items[i].description}
                        creationDate={props.items[i].creationDate}
                        dueDate={props.items[i].dueDate}
                        completedStatus={props.items[i].completedStatus}
                        showCompletedItems={props.showCompletedItems}
                    />
                );
            }
        }
        itemArray.push(
            <ItemComponent
                key={`${itemArray.length} key`}
                _id={`${itemArray.length} item id`}
                listId={`${itemArray.length} list id`}
                title={'Add New Item'}
                completedStatus={false}
                showCompletedItems={props.showCompletedItems}
            />
        );
        return itemArray;
    };

    const items = generateItemsArray();

    if (props.displayStatus === DisplayStatus.All) {
        return (
            <div className={'list-container'}>
                <span className={'list-title-all'}>{props.title}</span>
                {items}
            </div>
        );
    } else if (props.displayStatus === DisplayStatus.Scheduled) {
        return (
            <div className={'list-container'}>
                <span className={'list-title-scheduled'}>Due {props.title}</span>
                {items}
            </div>
        );
    } else {
        return <div className={'list-container'}>{items}</div>;
    }
};
