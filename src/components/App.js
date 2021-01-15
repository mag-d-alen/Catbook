import React, { useState } from 'react';
import Header from './Header';
import Cardlist from './Cardlist';
import cats from './cats.js';
import Searchbox from './Searchbox';

const App = () => {
  const [searchedName, setSearchedName] = useState('');
  const [theCat, setTheCat] = useState(cats);

  const searchCat = (value) => {
    setSearchedName(value);
  };

  const foundCat = (e) => {
    searchedName
      ? setTheCat(
          cats.filter((cat) => {
            return cat.name.toLowerCase() === searchedName.toLowerCase();
          })
        )
      : setTheCat(cats);
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <Header />
      <Searchbox searchCat={searchCat} foundCat={foundCat} />
      <Cardlist cats={theCat} />
    </React.Fragment>
  );
};

export default App;
