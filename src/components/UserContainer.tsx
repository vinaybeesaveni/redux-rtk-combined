import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect } from "react";
import { fetchUsers } from "../redux/user/userActions";

function UserContainer() {
  const users = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  // console.log(users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return <div>{users && <div>{JSON.stringify(users)}</div>}</div>;
}

export default UserContainer;
