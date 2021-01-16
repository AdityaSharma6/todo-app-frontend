import React from 'react';
import './App.css';
import { BodyComponent } from './BodyComponent/BodyComponent';
import { NavComponent } from './NavComponent/NavComponent';
import { Body, DisplayStatus, Item, List } from './types';

var dummyItem: Item = {
    _id: 'lajksdf98',
    listId: '8904034',
    title: 'First Item',
    description: 'First Description. May the lord have mercy',
    creationDate: Date().toString(),
    dueDate: Date().toString(),
    completedStatus: true,
};

var dummyList: List = {
    title: 'First Title',
    creationDate: Date().toString(),
    items: [dummyItem],
};

var dummyLists: List[] = [dummyList];

var dummyBody: Body = {
    displayStatus: DisplayStatus.All,
    lists: dummyLists,
};

function App() {
    return (
        <div className={'todo-list-container'}>
            <NavComponent />
            <BodyComponent
                displayStatus={dummyBody.displayStatus}
                lists={dummyBody.lists}
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
