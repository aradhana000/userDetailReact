import React, { useState, Fragment } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUSersList] = useState([]);

  const addUserHandler = (uName, uAge, uCollege) => {
    setUSersList((prevUsersList) => {
       return [...prevUsersList, { name: uName, age: uAge, college: uCollege, id: Math.random().toString() },
      ];
    });
  };
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </Fragment>
  );
}

export default App;
