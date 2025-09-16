import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CallBOM from "./CallBOM";

function Earnings() {
    const navigate = useNavigate();
    const [basic, setBasic] = useState(0);
    const [over, setOver] = useState(0);



    const handleSubmit = (e) => {
        e.preventDefault();

        CallBOM({
            basic: Number(basic),
            over: Number(over),
            debit: 0,
            credit: 0,
        });


        setBasic(0);
        setOver(0);

        toast.success("Earnings Data saved successfully!", {
            position: "bottom-center",
            autoClose: 1500,
        });

        setTimeout(() => {
            navigate("/task");
        }, 2000);
    };

    return (
        <div className="flex center">
            <div className="flex center colum border round padding w90">
                <span className="title">**Earnings**</span>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="basic">
                        Basic<span className="n">*</span>
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
                        Over<span className="n">*</span>
                    </label>
                    <input
                        type="number"
                        className="input"
                        placeholder="Input a Value!"
                        min="0"
                        name="over"
                        required
                        value={over}
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
