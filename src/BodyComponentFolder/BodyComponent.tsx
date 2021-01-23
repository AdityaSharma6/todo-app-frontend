import { FunctionComponent } from 'react';
import { ListComponent } from '../ListComponentFolder/ListComponent';
import { Body, DisplayStatus, List } from '../types';
import './BodyComponent.css';

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

    const countCompleted = (lists: List[]) => {
        let count = 0;
        for (let i: number = 0; i < lists.length; i++) {
            const list: List = lists[i];
            for (let j: number = 0; j < list.items.length; j++) {
                const item = list.items[j];
                if (item.completedStatus) {
                    count++;
                }
            }
        }

        if (count) {
            return (
                <div className={'todo-completed-status-container'}>
                    <div className={'todo-completed-status-value'}>
                        {count} Completed
                    </div>
                    <button className={'show-completed-button'}>Show</button>
                </div>
            );
        } else {
            return;
        }
    };

    const getListsToDisplay = () => {
        if (props.displayStatus === DisplayStatus.All) {
            return props.lists;
        } else if (props.displayStatus === DisplayStatus.PersonalLists) {
            const selectedList = props.lists.filter(value => {
                return value.title === props.personalListName;
            });
            return selectedList;
        } else if (props.displayStatus === DisplayStatus.Scheduled) {
            let scheduledList: List[] = [];
            // for (let i = 0; i < props.lists.length; i++) {
            //     const list = props.lists[i];
            //     for (let j = 0; j < list.items.length; j++) {
            //         const item = list.items[j];
            //         if (item.dueDate) {
            //             const index = scheduledList.findIndex(
            //                 value => value.title === item.dueDate
            //             );
            //             if (index > 0) {
            //                 scheduledList[index].items.push(item);
            //             } else {
            //                 let newListOfCurrentDueDate: List = {
            //                     title: item.dueDate,
            //                     creationDate: list.creationDate,
            //                     items: [],
            //                     displayStatus: list.displayStatus,
            //                 };
            //                 newListOfCurrentDueDate.items.push(item);
            //                 scheduledList.push(newListOfCurrentDueDate);
            //             }
            //         }
            //     }
            // }
            return scheduledList;
        } else {
            // let todayList: List[];
            // let today: List;
            // for (let i = 0; i < props.lists.length; i++){
            //     const list = props.lists[i];
            //     for (let j = 0; j < list.items.length; j++){
            //         const item = list.items[j];
            //         if (item.dueDate === Date().toString()){
            //             todayList.push(
            //                 {
            //                     creationDate: Date().toString();
            //                     title: ''
            //                 }
            //             )
            //         }
            //     }
            // }
            return [];
        }
    };

    const accumulateLists = (lists: List[]) => {
        return lists.map((value, index) => {
            return (
                <ListComponent
                    title={lists[index].title}
                    items={lists[index].items}
                    creationDate={lists[index].creationDate}
                    displayStatus={props.displayStatus}
                />
            );
        });

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
    };

    const lists = accumulateLists(getListsToDisplay());
    return (
        <div className={'todo-body-container'}>
            <div className={'todo-display-status-container'}>
                {displayStatus()}
            </div>
            {countCompleted(getListsToDisplay())}
            <div className={'list-collection-container'}>{lists}</div>
        </div>
    );
};
