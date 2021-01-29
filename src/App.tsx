import { useState } from 'react';
import './App.css';
import { TodoList } from './Components/TodoListComponentFolder/TodoList';
import { TodoItemType, TodoListType } from './types';

var dataItem1: TodoItemType = {
    _id: 'item1',
    listId: 'kladsfj',
    title: '1A03 Task 1',
    creationDate: '2020/05/23',
    isComplete: false,
};

var dataItem2: TodoItemType = {
    _id: 'item2',
    listId: 'kladsfj',
    title: '1A03 Task 2',
    creationDate: '2020/05/23',
    isComplete: false,
};

var dataItem3: TodoItemType = {
    _id: 'item3',
    listId: 'kladsfj',
    title: '1A03 Task 3',
    creationDate: '2020/05/23',
    isComplete: false,
};

var dataList1: TodoListType = {
    _id: 'list1',
    title: '1A03 List Title',
    creationDate: '2020/05/22',
    todoItemsCollection: [dataItem1, dataItem2, dataItem3],
};

function App() {
    // API Request to GET all todoItems of a particular list
    const [todoListTitle, setTodoListTitle] = useState(dataList1.title);

    const updateTodoListTitle = (updatedTodoListId: string, updatedTodoListTitle: string) => {
        // API Call to Update Todo List Title
        setTodoListTitle(updatedTodoListTitle);
    };

    return (
        <div className='root-container'>
            <TodoList
                title={todoListTitle}
                todoItemsCollection={dataList1.todoItemsCollection}
                _id={dataList1._id}
                updateTodoListTitle={updateTodoListTitle}
            />
        </div>
    );
}
export default App;
