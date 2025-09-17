import React, { useState, useEffect } from "react";

function Task() {
    const [taskData, setTaskData] = useState([]);
    const [filterDate, setFilterDate] = useState("");

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem("taskData") || "[]");
        setTaskData(savedData);
    }, []);

    // Filter data by date
    const filteredData = filterDate
        ? taskData.filter(item => item.date === filterDate)
        : taskData;

    const totalBasicSum = filteredData.reduce((sum, item) => sum + (Number(item.basic) || 0), 0).toLocaleString("en-US");
    const totalOverSum = filteredData.reduce((sum, item) => sum + (Number(item.over) || 0), 0).toLocaleString("en-US");
    const totalDebitSum = filteredData.reduce((sum, item) => sum + (Number(item.debit) || 0), 0).toLocaleString("en-US");
    const totalCreditSum = filteredData.reduce((sum, item) => sum + (Number(item.credit) || 0), 0).toLocaleString("en-US");

    const handleDelete = (index) => {
        const updatedData = [...taskData];
        updatedData.splice(index, 1);
        setTaskData(updatedData);
        localStorage.setItem("taskData", JSON.stringify(updatedData));
    };

    const today = new Date().toISOString().split('T')[0];

    return (
        <div className="flex center ">
            <div className="scroll">
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
                            <th>
                                <input
                                    type="date"
                                    className="input"
                                    value={filterDate || today}
                                    onChange={(e) => setFilterDate(e.target.value)}
                                />
                            </th>
                            <th>
                                <input
                                    type="text"
                                    className="heddin"
                                    value={totalBasicSum}
                                    readOnly
                                />
                            </th>
                            <th>
                                <input
                                    type="text"
                                    className="heddin"
                                    value={totalOverSum}
                                    readOnly
                                />
                            </th>
                            <th>
                                <input
                                    type="text"
                                    className="heddin"
                                    value={totalDebitSum}
                                    readOnly
                                />
                            </th>
                            <th>
                                <input
                                    type="text"
                                    className="heddin"
                                    value={totalCreditSum}
                                    readOnly
                                />
                            </th>
                            <th>
                                <button title="Click to Send Server" className="callbtn">
                                    Confirm
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.length > 0 ? (
                            [...filteredData].reverse().map((datax, index) => (
                                <tr key={index}>
                                    <td>{datax.date}</td>
                                    <td>{Number(datax.basic).toLocaleString("en-US")}</td>
                                    <td>{Number(datax.over).toLocaleString("en-US")}</td>
                                    <td>{Number(datax.debit).toLocaleString("en-US")}</td>
                                    <td>{Number(datax.credit).toLocaleString("en-US")}</td>
                                    <td
                                        className="textcenter pointer"
                                        title="Delete"
                                        onClick={() => handleDelete(taskData.findIndex(d => d === datax))}
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
