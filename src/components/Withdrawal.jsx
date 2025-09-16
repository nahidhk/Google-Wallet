import react, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CallBOM from "./CallBOM";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Withdrawal() {
    const navigate = useNavigate();
    const [wddara, setwd] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        CallBOM({
            basic: 0,
            over: 0,
            debit: Number(wddara),
            credit: 0,
        });
        toast.success(" Withdrawal Data saved successfully!", {
            position: "bottom-center",
            autoClose: 1500,
        });
        setTimeout(() => {
            navigate("/task");
        }, 2000);
        setwd(0);

    };


    return (
        <div className="flex center">
            <div className="flex center colum border round padding w90">
                <span className="title">**Withdrawal**</span>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="wthdrawal">
                        Withdrawal
                        <span className="n">*</span>
                    </label>
                    <input
                        type="number"
                        className="input"
                        placeholder="Input a Value!"
                        min="0"
                        name="wthdrawal"
                        required
                        value={wddara}
                        onChange={(e) => setwd(e.target.value)}
                        autoFocus
                    />
                    <input type="submit" value={"index"} className="btn" />
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}
export default Withdrawal;