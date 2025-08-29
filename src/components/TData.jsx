import React, { useEffect, useState } from "react";
import googleURL from "../data/googleURL.json";
import Loading from "./Loading"

function TData() {
    const [users, setUsers] = useState([]);   
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        fetch(googleURL[0].JsonViewAPi) 
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Loading />;
    }


    return (
        <div className="center flex">
            <table className="unstyledTable">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Basic</th>
                        <th>Over</th>
                        <th>Total </th>
                    </tr>
                    <tr>
                        <th>Total</th>
                        <th>
                            {
                                users.reduce((sum, item) => sum + (Number(item.basic) || 0), 0).toLocaleString('en-US')
                            }
                        </th>
                        <th>
                            {
                                users.reduce((sum, item) => sum + (Number(item.bonus) || 0), 0).toLocaleString('en-Us')
                            }
                        </th>
                        <th><a href="#">View</a></th>
                    </tr>
                </thead>
                <tbody>
                    {[...users].reverse().map((user, index) => (
                        <tr key={index}>
                            <td className="textcenter">
                                {new Date(user.date).toLocaleDateString("en-US", { weekday: "short" })},{" "}
                                {new Date(user.date).getDate()},{" "}
                                {new Date(user.date).toLocaleDateString("en-US", { month: "short" })},{" "}
                                {new Date(user.date).toLocaleDateString("en-US", { year: "2-digit" })}
                            </td>

                            <td className="right">{user.basic.toLocaleString("en-US")}</td>
                            <td className="right">{user.bonus.toLocaleString("en-US")}</td>
                            <td className="right">{(user.basic + user.bonus).toLocaleString("en-US")}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
}

export default TData;
