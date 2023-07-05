import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Thales'
  const newName = name.toUpperCase()

  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá, {newName}</p>
      <p>Soma: {2 + 3}</p>
    </div>
  );
}

export default App;
