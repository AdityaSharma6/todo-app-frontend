import { Body, DisplayStatus, Item, List } from "../types";
import {getDate} from './getDate';

var dummyItem1: Item = {
    _id: 'item1.id',
    listId: 'list1.id',
    title: '1A03 Quiz on Feburary 2nd',
    description: 'This will be on a saturday.',
    creationDate: getDate(),
    dueDate: '2021/1/24',
    completedStatus: false,
    showCompletedItems: true
};

var dummyItem2: Item = {
    _id: 'item2.id',
    listId: 'list2.id',
    title: '3 Lectures to take notes from',
    creationDate: getDate(),
    dueDate: getDate(),
    completedStatus: false,
    showCompletedItems: true
};

var dummyItem3: Item = {
    _id: 'item3.id',
    listId: 'list3.id',
    title: 'Linear Optimization exam coming up',
    description:
        'Description so long that it should go to another line and then this should wrap and continue underneath the original starting line. Just writing to accomplish that purpose. Woowza.',
        creationDate: getDate(),
        dueDate: getDate(),
    completedStatus: true,
    showCompletedItems: true
};

var dummyItem4: Item = {
    _id: 'item4.id',
    listId: 'list1.id',
    title: '1A03 Lab to perform before wednesday this week',
        creationDate: getDate(),
        dueDate: getDate(),
    completedStatus: true,
    showCompletedItems: true
};

var dummyItem5: Item = {
    _id: 'item5.id',
    listId: 'list2.id',
    title: '2GA4 Tutorial was useless',
        creationDate: getDate(),
        dueDate: '2021/1/27',
    completedStatus: true,
    showCompletedItems: true
};

var dummyList: List = {
    title: '1A03',
    creationDate: getDate(),
    items: [dummyItem1, dummyItem4],
    displayStatus: DisplayStatus.All,
    showCompletedItems: true
};

var dummyList2: List = {
    title: '2GA4',
    creationDate: getDate(),
    items: [dummyItem2, dummyItem5],
    displayStatus: DisplayStatus.All,
    showCompletedItems: true
};

var dummyList3: List = {
    title: '3OO3',
    creationDate: getDate(),
    items: [dummyItem3],
    displayStatus: DisplayStatus.All,
    showCompletedItems: true
};

var dummyLists: List[] = [
    dummyList, dummyList2, dummyList3
];

var dummyBody: Body = {
    displayStatus: DisplayStatus.All,
    personalListName: 'Second Title',
    lists: dummyLists
};

export default dummyBody;