import React, { useState, useEffect } from "react";

function Task() {
    const [taskData, setTaskData] = useState([]);

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem("taskData") || "[]");
        setTaskData(savedData);
    }, []);

    const totalBasicSum = taskData.reduce((sum, item) => sum + (Number(item.basic) || 0), 0).toLocaleString("en-US");
    const totalOverSum = taskData.reduce((sum, item) => sum + (Number(item.over) || 0), 0).toLocaleString("en-US");
    const totalDebitSum = taskData.reduce((sum, item) => sum + (Number(item.debit) || 0), 0).toLocaleString("en-US");
    const totalCreditSum = taskData.reduce((sum, item) => sum + (Number(item.credit) || 0), 0).toLocaleString("en-US");

    const handleDelete = (index) => {
        const updatedData = [...taskData];
        updatedData.splice(index, 1);
        setTaskData(updatedData);
        localStorage.setItem("taskData", JSON.stringify(updatedData));
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
                            <th>
                                <input
                                    readOnly
                                    type="text"
                                    className="heddin"
                                    value={totalBasicSum}
                                    name="basic"
                                    id="basic"
                                />
                            </th>
                            <th>
                                <input
                                    readOnly
                                    type="text"
                                    className="heddin"
                                    value={totalOverSum}
                                    name="ovear"
                                    id="ovear"
                                />
                            </th>
                            <th>
                                <input
                                    readOnly
                                    type="text"
                                    className="heddin"
                                    value={totalDebitSum}
                                    name="ovear"
                                    id="ovear"
                                />
                            </th>
                            <th>
                                <input
                                    readOnly
                                    type="text"
                                    className="heddin"
                                    value={totalCreditSum}
                                    name="ovear"
                                    id="ovear"
                                />
                            </th>
                            <th>
                                <button title="Click to Send Server" className="callbtn">
                                    Confrom
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {taskData.length > 0 ? (
                            [...taskData].reverse().map((datax, index) => (
                                <tr key={index}>
                                    <td>{datax.date}</td>
                                    <td>{datax.basic.toLocaleString("en-US")}</td>
                                    <td>{datax.over.toLocaleString("en-US")}</td>
                                    <td>{datax.debit.toLocaleString("en-US")}</td>
                                    <td>{datax.credit.toLocaleString("en-US")}</td>
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
                                <td colSpan="6"><center>No Data Found !</center></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Task;
