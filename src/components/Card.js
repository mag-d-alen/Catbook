import React from 'react';

const Card = (props) => {
  const { id, name, user, email, key } = props;

  return (
    <div className="card">
      <img
        className="card_img"
        src={`https://cataas.com/cat?filter=${id}`}
        alt="profile"
      ></img>
      <h2>{name}</h2>
      <p>
        user name: <b>{user}</b>
      </p>
      <p>
        email: <b>{email}</b>
      </p>
    </div>
  );
};
export default Card;
