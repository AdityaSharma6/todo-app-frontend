import { Body, DisplayStatus, Item, List } from "../types";

var dummyItem1: Item = {
    _id: 'item1.id',
    listId: 'list1.id',
    title: 'First Item',
    description: 'May the lord have mercy',
    creationDate: Date().toString(),
    dueDate: Date().toString(),
    completedStatus: true,
};

var dummyItem2: Item = {
    _id: 'item2.id',
    listId: 'list1.id',
    title: 'Second Item',
    creationDate: Date().toString(),
    dueDate: Date().toString(),
    completedStatus: true,
};

var dummyItem3: Item = {
    _id: 'item3.id',
    listId: 'list1.id',
    title: 'Third',
    description:
        'Third Description. Description so long that it should go to another line and then this should wrap and continue underneath the original starting line. Just writing to accomplish that purpose. Woowza.',
    creationDate: Date().toString(),
    dueDate: Date().toString(),
    completedStatus: true,
};

var dummyList: List = {
    title: '1A03',
    creationDate: Date().toString(),
    items: [dummyItem1, dummyItem2],
    displayStatus: DisplayStatus.All,
};

var dummyList2: List = {
    title: '2GA4',
    creationDate: Date().toString(),
    items: [dummyItem2, dummyItem3],
    displayStatus: DisplayStatus.All,
};

var dummyList3: List = {
    title: '3OO3',
    creationDate: Date().toString(),
    items: [dummyItem3],
    displayStatus: DisplayStatus.All,
};

var dummyLists: List[] = [dummyList, dummyList2, dummyList3];

var dummyBody: Body = {
    displayStatus: DisplayStatus.All,
    personalListName: 'Second Title',
    lists: dummyLists,
};

export default dummyBody;