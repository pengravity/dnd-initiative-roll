import './App.css';
import DiceRoll from './components/DiceRoll';
import InitList from './components/InitList';
import Header from './header/Header';

function App() {
  return (
    <div>
      <Header />
      <InitList />
      <DiceRoll />
    </div>
  );
}

export default App;
