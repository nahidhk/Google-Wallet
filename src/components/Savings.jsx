import react, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CallBOM from "./CallBOM";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Savings() {
    const navigate = useNavigate();
    const [savingt, setsavefun] = useState(0);


    const handleSubmit = (e) => {
        e.preventDefault();
        CallBOM({
            basic: 0,
            over: 0,
            debit: 0,
            credit: Number(savingt),
        });
        toast.success(" Withdrawal Data saved successfully!", {
            position: "bottom-center",
            autoClose: 1000,
        });
        setTimeout(() => {
            navigate("/task");
        }, 1500);
        setsavefun(0);

    };


    return (
        <div className="flex center">
            <div className="flex center colum border padding w90">
                <span className="title">
                    **Savings**
                </span>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="savings">
                        Savings
                        <span className="n">*</span>
                    </label>
                    <input
                        type="number"
                        className="input"
                        placeholder="Input a Value!"
                        min="0"
                        name="savings"
                        required
                        value={savingt}
                        onChange={(e) => setsavefun(e.target.value)}
                        autoFocus
                    />
                    <input type="submit" value={"index"} className="btn" />
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Savings;






