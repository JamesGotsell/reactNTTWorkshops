
import './App.css';
import HeaderNoJSX  from './Components/HeaderNoJSx'
import PersonNoJSX from './Components/PersonNoJSX';
import ComponentWithJSX  from './Components/ComponentWithJSX'
import Demo from './Hooks/CustomHooks/Demo'


function App() {
  return (
      <>
        <HeaderNoJSX />
        <PersonNoJSX />
        <ComponentWithJSX />
        <Demo/>
      </>
  );
}

export default App;
