import { FunctionComponent, useState } from 'react';
import { Item } from '../types';
import './ItemComponent.css';

export const ItemComponent: FunctionComponent<Item> = (props: Item) => {
    const [itemTitleState, setItemTitle] = useState(props.title);
    const [itemDescriptionState, setItemDescriptionState] = useState(
        props.description
    );
    const [itemCompletedStatusState, setCompletedStatus] = useState(
        props.completedStatus
    );

    const updatingItemHandler = (event: any) => {
        if (event.key === 'Enter') {
            console.log('API Call');
        }
    };

    const displayItemDescription = () => {
        if (props.description) {
            return (
                <input
                    type={'text'}
                    id={'item-component-description'}
                    placeholder={'Description'}
                    value={itemDescriptionState}
                    onChange={e => setItemDescriptionState(e.target.value)}
                />
            );
        }
        return;
    };

    return (
        <div
            className={
                props.completedStatus
                    ? 'item-component-container-completed'
                    : 'item-component-container'
            }>
            <input
                type={'checkbox'}
                className={`${props._id}-checkbox`}
                checked={itemCompletedStatusState}
                onChange={() => setCompletedStatus(!itemCompletedStatusState)}
            />
            <div className={'item-component-information-container'}>
                <input
                    type={'text'}
                    id={'item-component-title'}
                    value={itemTitleState}
                    onChange={e => setItemTitle(e.target.value)}
                    onKeyPress={updatingItemHandler}
                />
                {displayItemDescription()}
            </div>
        </div>
    );
};
