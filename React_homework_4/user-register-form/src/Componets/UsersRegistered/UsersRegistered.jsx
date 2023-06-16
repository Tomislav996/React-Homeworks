import React from 'react';

const UsersRegistered = (props) => {
    

  return (
    <div>
      <h2>Registered Users</h2>
      {props.registeredUsers.length > 0 ? (
        <ul>
          {props.registeredUsers.map((user, index) => (
            <li key={index}>
              <b>Name:</b> {user.fullName}
              <br />
               <b>Email:</b> {user.email}
               <hr />
            </li>
            
          ))}
        </ul>
      ) : (
        <p>No users registered.</p>
      )}
      <button onClick={props.clearUsers}>Remove Users</button>
    </div>
  );
};

export default UsersRegistered;