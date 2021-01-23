import { Body, DisplayStatus, Item, List } from "../types";
import Fuse from 'fuse.js';

const getDate = () => {
    const dateObj = new Date();
    return (dateObj.getUTCFullYear()) + "/" + (dateObj.getMonth() + 1)+ "/" + (dateObj.getUTCDate());
}

var dummyItem1: Item = {
    _id: 'item1.id',
    listId: 'list1.id',
    title: '1A03 Quiz on Feburary 2nd',
    description: 'This will be on a saturday.',
    creationDate: getDate(),
    dueDate: getDate(),
    completedStatus: true,
};

var dummyItem2: Item = {
    _id: 'item2.id',
    listId: 'list1.id',
    title: '3 Lectures to take notes from',
    creationDate: getDate(),
    dueDate: getDate(),
    completedStatus: true,
};

var dummyItem3: Item = {
    _id: 'item3.id',
    listId: 'list1.id',
    title: 'Linear Optimization exam coming up',
    description:
        'Description so long that it should go to another line and then this should wrap and continue underneath the original starting line. Just writing to accomplish that purpose. Woowza.',
        creationDate: getDate(),
        dueDate: getDate(),
    completedStatus: true,
};

var dummyItem4: Item = {
    _id: 'item4.id',
    listId: 'list4.id',
    title: '1A03 Lab to perform before wednesday this week',
        creationDate: getDate(),
        dueDate: getDate(),
    completedStatus: true,
};

var dummyItem5: Item = {
    _id: 'item5.id',
    listId: 'list1.id',
    title: '2GA4 Tutorial was useless',
        creationDate: getDate(),
        dueDate: getDate(),
    completedStatus: true,
};

var dummyList: List = {
    title: '1A03',
    creationDate: getDate(),
    items: [dummyItem1, dummyItem4],
    displayStatus: DisplayStatus.All,
};

var dummyList2: List = {
    title: '2GA4',
    creationDate: getDate(),
    items: [dummyItem2, dummyItem5],
    displayStatus: DisplayStatus.All,
};

var dummyList3: List = {
    title: '3OO3',
    creationDate: getDate(),
    items: [dummyItem3],
    displayStatus: DisplayStatus.All,
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