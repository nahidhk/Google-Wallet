import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Task() {
    const [taskData, setTaskData] = useState([]);

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem("taskData") || "[]");
        setTaskData(savedData);
    }, []);



    const handleDelete = (index) => {
        const updatedData = [...taskData];
        updatedData.splice(index, 1);
        setTaskData(updatedData);
        localStorage.setItem("taskData", JSON.stringify(updatedData));
    };

    // const today = new Date().toISOString().split('T')[0];
    const [filterDate, setFilterDate] = useState("all");

    const filteredData =
        filterDate && filterDate !== "all"
            ? taskData.filter(item => item.date.split(" ")[0] === filterDate)
            : taskData;

    //  console.log(filteredData);


    const totalBasicSum = filteredData.reduce((sum, item) => sum + (Number(item.basic) || 0), 0).toLocaleString("en-US");
    const totalOverSum = filteredData.reduce((sum, item) => sum + (Number(item.over) || 0), 0).toLocaleString("en-US");
    const totalDebitSum = filteredData.reduce((sum, item) => sum + (Number(item.debit) || 0), 0).toLocaleString("en-US");
    const totalCreditSum = filteredData.reduce((sum, item) => sum + (Number(item.credit) || 0), 0).toLocaleString("en-US");


    const backendCall = async (data) => {
        if (filterDate === "all") {
            toast.error("Do Not Select Date!", {
                position: "top-center",
                autoClose: 1500,
            });
        } else {

            // handleDeleteByDate(filterDate);

            try {
                const response = await fetch("https://script.google.com/macros/s/AKfycbx5UjTn09gbyrWGMZaNqJN2XlNEeamC2kp-n_DdgwbPsTXoZx9VjCIx7tIFMLvcTvlO/exec", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });

                const result = await response.json(); 
                console.log("Success:", result);
                alert("Data sent successfully!");
            } catch (error) {
                console.error("Error:", error);
                alert("Failed to send data!");
            }




        }
    }


    const handleDeleteByDate = (targetDate) => {

        const updatedData = taskData.filter(
            item => item.date.split(" ")[0] !== targetDate
        );

        setTaskData(updatedData);
        localStorage.setItem("taskData", JSON.stringify(updatedData));
    };





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
                                <select
                                    name="date"
                                    id="date"
                                    className="input"
                                    autoFocus
                                    value={filterDate}
                                    onChange={(e) => setFilterDate(e.target.value)}
                                >
                                    <option value="all">All</option>
                                    {[...new Set(taskData.map(item => item.date.split(" ")[0]))]
                                        .reverse()
                                        .map((date, index) => (
                                            <option key={index} value={date}>
                                                {date}
                                            </option>
                                        ))}
                                </select>


                            </th>
                            <th>
                                <input
                                    type="text"
                                    className="heddin"
                                    value={totalBasicSum}
                                    name="basic"
                                    id="basic"
                                />
                            </th>
                            <th>
                                <input
                                    type="text"
                                    className="heddin"
                                    value={totalOverSum}
                                    name="ovear"
                                    id="ovear"
                                />
                            </th>
                            <th>
                                <input
                                    type="text"
                                    className="heddin"
                                    value={totalDebitSum}
                                    name="ovear"
                                    id="ovear"
                                />
                            </th>
                            <th>
                                <input
                                    type="text"
                                    className="heddin"
                                    value={totalCreditSum}
                                    name="ovear"
                                    id="ovear"
                                />
                            </th>
                            <th>
                                <button
                                    onClick={() => backendCall({
                                        date:filterDate,
                                        credit: totalCreditSum,
                                        debit: totalDebitSum,
                                        bonus: totalOverSum,
                                        basic: totalBasicSum
                                    })}
                                    title="Click to Send Server" className="callbtn">
                                    Confrom
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.length > 0 ? (
                            [...filteredData].reverse().map((datax, index) => (
                                <tr key={index}>
                                    <td>{datax.date}</td>
                                    <td>{datax.basic.toLocaleString("en-US")}</td>
                                    <td>{datax.over.toLocaleString("en-US")}</td>
                                    <td>{datax.debit.toLocaleString("en-US")}</td>
                                    <td>{datax.credit.toLocaleString("en-US")}</td>
                                    <td
                                        className="textcenter pointer"
                                        title="Delete"
                                    >
                                        <i onClick={() => handleDelete(taskData.length - 1 - index)} className="fa-solid fa-trash red"></i>
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
            <ToastContainer />
        </div>
    );
}

export default Task;
