import './App.css';
import Dogs from './Components/Dogs';
import RickAndMorty from './Components/RickAndMorty';
import { RickNMorty }  from './Components/FuncComponent/RickNMortyFunctional'

function App() {
  return (
    <>
      <div className='center'>
        <div>
          <RickNMorty />
        <RickAndMorty/>
        <Dogs/>
        </div>
      </div>
      </>
  );
}

export default App;
