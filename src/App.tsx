import './App.css';
import { Body } from './Components/BodyComponentFolder/Body';
import { Navigation } from './Components/NavigationComponent/Navigation';

function App() {
    return (
        <div className='root-container'>
            <Navigation />
            <Body />
        </div>
    );
}
export default App;
