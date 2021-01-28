import './App.css';
import { TodoList } from './Components/TodoListComponentFolder/TodoList';
import { TodoItemType, TodoListType } from './types';

var dataItem1: TodoItemType = {
    _id: 'item1',
    listId: 'kladsfj',
    title: '1A03 Task 1',
    creationDate: '2020/05/23',
};

var dataItem2: TodoItemType = {
    _id: 'item2',
    listId: 'kladsfj',
    title: '1A03 Task 2',
    creationDate: '2020/05/23',
};

var dataItem3: TodoItemType = {
    _id: 'item3',
    listId: 'kladsfj',
    title: '1A03 Task 3',
    creationDate: '2020/05/23',
};

var dataList1: TodoListType = {
    _id: 'list1',
    title: '1A03 List Title',
    creationDate: '2020/05/22',
    todoItemsCollection: [dataItem1, dataItem2, dataItem3],
};

function App() {
    return (
        <div className='root-container'>
            <TodoList
                title={dataList1.title}
                todoItemsCollection={dataList1.todoItemsCollection}
                _id={dataList1._id}
            />
        </div>
    );
}
export default App;
