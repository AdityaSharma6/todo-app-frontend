import { FunctionComponent } from 'react';
import { ItemComponent } from '../ItemComponentFolder/ItemComponent';
import { List, ListCollection } from '../types';

export const ListComponent: FunctionComponent<ListCollection> = (
    props: ListCollection
) => {
    const items = props.lists[0].items.map(item => (
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
    return <div>{items}</div>;
};
