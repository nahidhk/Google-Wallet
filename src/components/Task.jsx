import React, { useState, useEffect } from "react";

function Task() {
    const [taskData, setTaskData] = useState([]);

    // LocalStorage থেকে ডেটা লোড
    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem("taskData") || "[]");
        setTaskData(savedData);
    }, []);

    // Total হিসাব
    const totalBasicSum = taskData
        .reduce((sum, item) => sum + (Number(item.basic) || 0), 0)
        .toLocaleString("en-US");

    // Delete function
    const handleDelete = (index) => {
        const updatedData = [...taskData];
        updatedData.splice(index, 1); // index অনুযায়ী ডিলিট
        setTaskData(updatedData);
        localStorage.setItem("taskData", JSON.stringify(updatedData)); // LocalStorage আপডেট
    };

    return (
        <div>
            <div className="flex center scroll">
                <table className="unstyledTable">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Basic</th>
                            <th>Over</th>
                            <th>Debit</th>
                            <th>Credit</th>
                            <th>Status</th>
                        </tr>
                        <tr>
                            <th>Total</th>
                            <th>{totalBasicSum}</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>#</th>
                        </tr>
                    </thead>
                    <tbody>
                        {taskData.length > 0 ? (
                            [...taskData].reverse().map((datax, index) => (
                                <tr key={index}>
                                    <td>{datax.date}</td>
                                    <td>{datax.basic}</td>
                                    <td>{datax.over}</td>
                                    <td>{datax.debit}</td>
                                    <td>{datax.credit}</td>
                                    <td
                                        className="textcenter pointer"
                                        title="Delete"
                                        onClick={() => handleDelete(taskData.length - 1 - index)} // reverse fix
                                    >
                                        <i className="fa-solid fa-trash red"></i>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6">No data found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Task;
