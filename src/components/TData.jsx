import React, { useEffect, useState } from "react";
import googleURL from "../data/googleURL.json";

function TData() {
  const [users, setUsers] = useState([]);   // data রাখার state
  const [loading, setLoading] = useState(true); // loading state

  useEffect(() => {
    fetch(googleURL[0].JsonViewAPi)  // json file থেকে link নিলাম
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []); // [] মানে শুধু প্রথমবার run করবে

  if (loading) {
    return <h3>⏳ Loading...</h3>;
  }

  return (
    <div>
      <table className="unstyledTable">
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Basic</th>
            <th>Bonus</th>
          </tr>
          <tr>
            <th></th>
            <th>Total</th>
            <th>Total Basic</th>
            <th>Total Bonus</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td> 
              <td>{user.date}</td>
              <td>{user.basic}</td>
              <td>{user.bonus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TData;
