import { FunctionComponent } from 'react';
import { Item } from '../types';
import './ItemComponent.css';

export const ItemComponent: FunctionComponent<Item> = (props: Item) => {
    const itemDescription = () => {
        if (props.description) {
            return (
                <input
                    type={'text'}
                    id={'item-component-description'}
                    value={props.description}
                />
            );
        }
        return;
    };

    return (
        <div className={'item-component-container'}>
            <input
                type={'checkbox'}
                className={`${props._id}-checkbox`}
                checked={props.completedStatus}
            />
            <div className={'item-component-information-container'}>
                <input
                    type={'text'}
                    id={'item-component-title'}
                    value={props.title}
                />
            </div>
        </div>
    );
};
