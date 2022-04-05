import React from 'react';
import Search from './components/Search';
import './App.css';

export default function App() {

  const [users, setUsers] = React.useState([
    'kieran',
    'alan',
    'ryan',
    'nigel',
    'geraint',
    'garin'
  ]);

  const [searchValue, setSearchValue] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);

  function handleChange(e) {
    e.preventDefault()
    setSearchValue(e.target.value)
  }

  React.useEffect(() => {
    const results = users.filter(user =>
      user.toLowerCase().includes(searchValue)
    );
    setSearchResults(results);
  }, [searchValue]);

  
  return (
    <div className="App">
      <h1>Users List</h1>
      <h2>Search for your favourite user!</h2>
      <Search searchValue={searchValue} handleChange={handleChange}/>
      {searchResults.map(user => (
        <p>{user}</p>
      ))}
    </div>
  );
}
