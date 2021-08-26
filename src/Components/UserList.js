import React, { useState, useEffect } from "react";

const UserList = ({ list }) => {
  const [userInfo, setUserInfo] = useState([...list]);
  useEffect(() => {
    setTimeout(() => {
      let arrLen = userInfo.length - 1;
      let newList = userInfo.splice(arrLen, 1).concat(userInfo);
      return setUserInfo(newList);
    }, 2500);
  }, [userInfo]);

  return (
    <ul className="users">
      {userInfo.map((user, index) => (
        <li key={index}>
          <img src={user.picture.large} alt={user.name.first} />
          <h1>
            {user.name.title} {user.name.first} {user.name.last}
          </h1>
        </li>
      ))}
    </ul>
  );
};
export default UserList;
