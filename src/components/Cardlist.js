import React from 'react';
import Card from './Card';

const Cardlist = (props) => {
  const cats = props.cats;
  return (
    <div className="cardlist">
      {cats.map((cat) => (
        <Card
          key={cat.id}
          id={cat.id}
          name={cat.name}
          user={cat.username}
          email={cat.email}
        />
      ))}
    </div>
  );
};

export default Cardlist;
