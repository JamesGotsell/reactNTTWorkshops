import './App.css';
import Dogs from './Components/Dogs';
import RickAndMorty from './Components/RickAndMorty';


function App() {
  return (
    <>
      <div className='center'>
        <div>
        <RickAndMorty/>
        <Dogs/>
        </div>
      </div>
      </>
  );
}

export default App;
