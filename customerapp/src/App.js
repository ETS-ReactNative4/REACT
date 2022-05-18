import './App.css';
import CustomerList from './components/CustomerList';
import Dummy from './components/Dummy';

function App() {
  return (
    <div className="App">
      <h1>Customer Application</h1>
      <Dummy />
      <CustomerList />
    </div>
  );
}

export default App;
