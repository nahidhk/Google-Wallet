import react, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CallBOM from "./CallBOM";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Savings() {
    const navigate = useNavigate();
    const [savings, setsavefun] = useState(0);

    const formatted = new Date().toLocaleDateString();
    const handleSubmit = (e) => {
        e.preventDefault();
        CallBOM({
            date: formatted,
            basic: 0,
            over: 0,
            debit: 0,
            credit: Number(savings),
        });
        toast.success(" Withdrawal Data saved successfully!", {
            position: "bottom-center",
            autoClose: 1500,
        });
        setTimeout(() => {
            navigate("/");
        }, 2000);
        setsavefun(0);

    };
    require(
        <div className="flex center">
            <div className="flex center colum border padding w90">
                <span className="titlt">
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
                        value={savings}
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