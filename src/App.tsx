import Autocomplete from './components/Autocomplete';

import './App.css'

const options = ['apple', 'banana', 'cherry', 'watermelon', 'peach'];

const handleSelect = (selectedOption: string) => {
  console.log(`Selected option: ${selectedOption}`);
};

const App = () => {
  return (
      <div className="App">
        <Autocomplete options={options} onSelect={handleSelect} />
      </div>
  );
};

export default App;