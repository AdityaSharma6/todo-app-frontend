import Fuse from 'fuse.js';
import React, { useState } from 'react';
import './App.css';
import { BodyComponent } from './BodyComponentFolder/BodyComponent';
import { NavComponent } from './NavComponentFolder/NavComponent';
import { DisplayStatus, Item, List } from './types';
import dummyBody from './Utils/dummyData';

function App() {
    const [searchTextState, setSearchText] = useState('');
    const [displayStatusState, setDisplayStatus] = useState<DisplayStatus>(
        DisplayStatus.All
    );
    const [personalListNameState, setPersonalListName] = useState('');

    let fuseOptions;
    let fuse;
    let results: Fuse.FuseResult<List>[] | undefined;
    if (displayStatusState === DisplayStatus.Scheduled) {
        fuseOptions = {
            findAllMatches: true,
            threshold: 1,
            keys: ['items.dueDate'],
            includeMatches: true,
        };
        fuse = new Fuse(dummyBody.lists, fuseOptions);
        results = fuse.search('/ / /');
        console.log('schedule', results);
    } else if (displayStatusState === DisplayStatus.Today) {
        fuseOptions = {
            findAllMatches: true,
            threshold: 0,
            keys: ['items.dueDate'],
            includeMatches: true,
        };
        fuse = new Fuse(dummyBody.lists, fuseOptions);
        const todayDate = new Date();
        const today =
            todayDate.getUTCFullYear() +
            '/' +
            (todayDate.getUTCMonth() + 1) +
            '/' +
            todayDate.getUTCDate();
        results = fuse.search(today);
        console.log('today', results);
    } else if (displayStatusState === DisplayStatus.All && searchTextState) {
        fuseOptions = {
            findAllMatches: true,
            threshold: 0.5,
            keys: ['items.title', 'items.description'],
            includeMatches: true,
        };
        fuse = new Fuse(dummyBody.lists, fuseOptions);
        results = fuse.search(searchTextState);
        console.log('all', results);
    } else if (displayStatusState === DisplayStatus.All) {
        results = undefined;
    } else {
        fuseOptions = {
            threshold: 0,
            keys: ['title'],
            includeMatches: true,
        };
        fuse = new Fuse(dummyBody.lists, fuseOptions);
        results = fuse.search(personalListNameState);
        console.log('personal', personalListNameState, results);
    }

    let lists: List[] = [];
    if (!results) {
        lists = dummyBody.lists;
    } else {
        for (let i = 0; i < results.length; i++) {
            const list = {
                title: results[i].item.title,
                creationDate: results[i].item.creationDate,
                displayStatus: results[i].item.displayStatus,
                items: results[i].item.items,
                showCompletedItems: true,
            };
            lists.push(list);
        }
    }

    return (
        <div className={'todo-list-container'}>
            <NavComponent
                displayStatus={displayStatusState}
                lists={dummyBody.lists}
                personalListName={personalListNameState}
                searchText={searchTextState}
                setSearchText={newSearchText => setSearchText(newSearchText)}
                setDisplayStatus={selectedDisplayStatus =>
                    setDisplayStatus(selectedDisplayStatus)
                }
                setPersonalListName={selectedPersonalListName =>
                    setPersonalListName(selectedPersonalListName)
                }
            />
            <BodyComponent
                displayStatus={displayStatusState}
                lists={lists}
                personalListName={personalListNameState}
            />
        </div>
    );
}
export default App;
