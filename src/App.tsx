import React from 'react';
import './App.css';
import { BodyComponent } from './BodyComponentFolder/BodyComponent';
import { NavComponent } from './NavComponentFolder/NavComponent';
import { Body, DisplayStatus, Item, List } from './types';

var dummyItem1: Item = {
    _id: 'lajksdf98',
    listId: '8904034',
    title: 'First Item',
    description: 'First Description. May the lord have mercy',
    creationDate: Date().toString(),
    dueDate: Date().toString(),
    completedStatus: true,
};

var dummyItem2: Item = {
    _id: 'lajksdf98',
    listId: '8904034',
    title: 'Second Item',
    creationDate: Date().toString(),
    dueDate: Date().toString(),
    completedStatus: true,
};

var dummyItem3: Item = {
    _id: 'lajksdf98',
    listId: '8904034',
    title: 'Third Item',
    description:
        'Third Description. Description so long that it should go to another line and then this should wrap and continue underneath the original starting line. Just writing to accomplish that purpose. Woowza.',
    creationDate: Date().toString(),
    dueDate: Date().toString(),
    completedStatus: true,
};

var dummyList: List = {
    title: 'First Title',
    creationDate: Date().toString(),
    items: [dummyItem1, dummyItem2, dummyItem3, dummyItem3],
    displayStatus: DisplayStatus.All,
};

var dummyList2: List = {
    title: 'Second Title',
    creationDate: Date().toString(),
    items: [dummyItem1, dummyItem2, dummyItem3],
    displayStatus: DisplayStatus.All,
};

var dummyLists: List[] = [dummyList, dummyList2];

var dummyBody: Body = {
    displayStatus: DisplayStatus.All,
    personalListName: 'Second Title',
    lists: dummyLists,
};

function App() {
    return (
        <div className={'todo-list-container'}>
            <NavComponent
                displayStatus={dummyBody.displayStatus}
                lists={dummyBody.lists}
                personalListName={dummyBody.personalListName}
            />
            <BodyComponent
                displayStatus={dummyBody.displayStatus}
                lists={dummyBody.lists}
                personalListName={dummyBody.personalListName}
            />
        </div>
    );
}

{
    /* 
  var dd: ItemProps = {
    _id: 'lkj0du8f8u4oj5j314',
    listId: 'lkjsdfp89',
    title: 'Lecture 3',
    description: 'Computers and Processors',
    creationDate: Date().toString(),
    dueDate: Date().toString(),
    completedStatus: false,
};

  <div className={'todo-navbar-container'}>
This is the navbar container
</div>

<div className={'todo-body-container'}>
  <ItemComponent
      _id={dd._id}
      listId={dd.listId}
      title={dd.title}
      description={dd.description}
      creationDate={dd.creationDate}
      dueDate={dd.dueDate}
      completedStatus={dd.completedStatus}
  />
</div>
</div> */
}
export default App;
