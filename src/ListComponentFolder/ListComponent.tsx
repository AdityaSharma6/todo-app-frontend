import { FunctionComponent } from 'react';
import { ItemComponent } from '../ItemComponentFolder/ItemComponent';
import { DisplayStatus, List } from '../types';
import './ListComponent.css';

export const ListComponent: FunctionComponent<List> = (props: List) => {
    const items = props.items.map(item => (
        <ItemComponent
            key={item._id}
            _id={item._id}
            listId={item.listId}
            title={item.title}
            description={item.description}
            creationDate={item.creationDate}
            dueDate={item.dueDate}
            completedStatus={item.completedStatus}
        />
    ));

    if (props.displayStatus === DisplayStatus.All) {
        return (
            <div className={'list-container'}>
                <span className={'list-title-all'}>{props.title}</span>
                {items}
            </div>
        );
    } else {
        return <div className={'list-container'}>{items}</div>;
    }
};
