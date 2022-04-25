import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

function UserProfile() {
  const { isOnline, setIsOnline } = useContext(UserContext)

  function handleIsOnline() {
    setIsOnline(!isOnline);
  }

  return (
    <>
      <div>User is {isOnline ? 'connected' : 'disconected'}</div>
      <button type='button' onClick={() => handleIsOnline()}> Swap </button>
    </>
  );
}

export default UserProfile;
