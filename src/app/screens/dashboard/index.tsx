"use client";
import { useState } from "react";
import AddBook from "../addBook";
export const Dashboard = () => {
  const [addBook, setAddBook] = useState(false);
  return (
    <div>
      <h1>Libary Manahement</h1>
      <div>
        <button onClick={() => setAddBook(!addBook)}>add book</button>
        <button>Edit book list</button>
        <button>Register User</button>
      </div>
      <div>{addBook && <AddBook />}</div>
    </div>
  );
};
export default Dashboard;
