import Fuse from 'fuse.js';
import React, { useState } from 'react';
import './App.css';
import { BodyComponent } from './BodyComponentFolder/BodyComponent';
import { NavComponent } from './NavComponentFolder/NavComponent';
import { DisplayStatus, List } from './types';
import dummyBody from './Utils/dummyData';

function App() {
    const [searchTextState, setSearchText] = useState('');
    const [displayStatusState, setDisplayStatus] = useState<DisplayStatus>(
        DisplayStatus.All
    );
    const [personalListNameState, setPersonalListName] = useState('');

    // console.log(searchTextState, DisplayStatus[displayStatusState], personalListNameState);

    const fuseOptions = {
        findAllMatches: true,
        threshold: 0.4,
        keys: ['items.title', 'items.description'],
    };

    const fuse = new Fuse(dummyBody.lists, fuseOptions);

    let lists = searchTextState
        ? ((fuse.search(searchTextState) as unknown) as List[])
        : dummyBody.lists;

    return (
        <div className={'todo-list-container'}>
            <NavComponent
                displayStatus={displayStatusState}
                lists={lists}
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
