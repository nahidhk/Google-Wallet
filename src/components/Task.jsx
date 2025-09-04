import React from "react";

function Task() {

    const jsonsaveData = JSON.parse(localStorage.getItem("taskData") || "[]");

    const totalBasicSum = jsonsaveData.reduce((sum, item) => sum + (Number(item.basic) || 0) , 0).toLocaleString("en-Us");

    

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
                        {jsonsaveData.length > 0 ? (
                            jsonsaveData.reverse().map((datax, index) => (
                                <tr key={index}>
                                    <td>{datax.date}</td>
                                    <td>{datax.basic}</td>
                                    <td>{datax.over}</td>
                                    <td>{datax.debit}</td>
                                    <td>{datax.credit}</td>
                                    <td>
                                        <input checked type="checkbox" />
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
