import './App.css';
import RickAndMorty from './Components/RickAndMorty';
import { Card } from './Components/styles/Card';

function App() {
  return (
    <>
      <div className='center'>
        <div>
        <RickAndMorty/>
        </div>
        <div>
        <Card/>
        </div>
      </div>
      </>
  );
}

export default App;
