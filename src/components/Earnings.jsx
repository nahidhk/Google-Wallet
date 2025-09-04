import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Noti
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Earnings() {










    const callappo = useNavigate();
    const [basic, setBasic] = useState(0);
    const [over, setOver] = useState(0);
    const [taskData, setTaskData] = useState([]);

    // Load saved data from localStorage when component mounts
    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem("taskData"));
        if (Array.isArray(savedData)) {
            setTaskData(savedData);
        }
    }, []);

    const indexData = (e) => {
        e.preventDefault();

        // Show Notification
        if (Notification.permission === "granted") {
            new Notification("Google Wallet Task", {
                body: `New Data Arry => Basic: ${basic} and Over: ${over}`,
                icon: "https://cdn-icons-png.flaticon.com/512/727/727399.png",
            });
        }

        // Date formatting
        const now = new Date();
        const options = {
            year: "2-digit",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        };
        const formatted = now.toLocaleString("en-GB", options).replace(",", "");

        // Create new task object
        const newTask = {
            date: formatted,
            basic: Number(basic),
            over: Number(over),
            debit: 0,
            credit: 0,
        };

        
        const updatedData = [...taskData, newTask];
        setTaskData(updatedData);
        localStorage.setItem("taskData", JSON.stringify(updatedData));

      
        setBasic(0);
        setOver(0);



        setTimeout(() => {
            callappo("/")
        }, 2000);


        toast.success(`Earnings Data save success in localstroge`, {
            position: "bottom-center",
            autoClose: 1500, 
        });

    };












    return (

        <div className="flex center">
            <div className="flex center colum border round padding w90">
                <span className="title">**Earnings**</span>

                <form onSubmit={indexData}>
                    <label htmlFor="basic">
                        Basic<n>*</n>
                    </label>
                    <input
                        type="number"
                        className="input"
                        placeholder="Input a Value!"
                        min="0"
                        name="basic"
                        required
                        value={basic}
                        onChange={(e) => setBasic(e.target.value)}
                    />
                    <br />
                    <br />

                    <label htmlFor="over">
                        Over<n>*</n>
                    </label>
                    <input
                        type="number"
                        className="input"
                        placeholder="Input a Value!"
                        min="0"
                        name="over"
                        required
                        autoFocus
                        onChange={(e) => setOver(e.target.value)}
                    />

                    <input type="submit" className="btn" value="Index" />
                </form>
            </div>
            <ToastContainer />
        </div>   
    );
}

export default Earnings;
