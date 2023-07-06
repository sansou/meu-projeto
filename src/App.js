
import './App.css';
import HelloWorld from './components/HelloWords'
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List'

function App() {


  return (
    <div className="App">
      <HelloWorld />
      <SayMyName nome="Thales"></SayMyName>
      <SayMyName nome="Vluzrmos"></SayMyName>
      <Pessoa nome="Thales" idade="30" profissao="Programador" foto="http://via.placeholder.com/150"></Pessoa>

      <List></List>
    </div>
  );
}

export default App;
