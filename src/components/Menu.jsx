import react from "react";
import { useNavigate } from "react-router-dom";
import googleURL from "../data/googleURL.json"
import sheetsImg from "../assets/sheets.png";
import tableImg from "../assets/table.png";
import logoutImg from "../assets/logout.png";
import walletImg from "../assets/wallet.png";
import atmImg from "../assets/atm.png";
import jarImg from "../assets/jar.png";
import taskImg from '../assets/task.png';



function Menu() {
    const navigate = useNavigate();
    function logout() {
        sessionStorage.clear();
        window.location.reload();
    }
    return (
        <div>
            <div className="flex center wrap">



                <div className="menubtn" onClick={() => navigate("/earning")}>
                    <img className="icon" src={walletImg} alt="img" />
                    <span>
                        Earnings
                    </span>
                </div>


                <div className="menubtn" onClick={() => navigate("/Withdrawal")}>
                    <img className="icon" src={atmImg} alt="img" />
                    <span>
                        Withdrawal
                    </span>
                </div>



                <div className="menubtn" onClick={() => navigate("/savings")}>
                    <img className="icon" src={jarImg} alt="img" />
                    <span>
                        Savings
                    </span>
                </div>


                <div className="menubtn" onClick={() => navigate("/TData")}>
                    <img className="icon" src={tableImg} alt="img" />
                    <span>
                        Total Data
                    </span>
                </div>


                <div className="menubtn" onClick={() => window.location.href = googleURL[2].googleSheetsUrl}>
                    <img className="icon" src={sheetsImg} alt="img" />
                    <span>
                        G-Sheets
                    </span>
                </div>


                <div className="menubtn" onClick={() => navigate("/task")}>
                    <img className="icon" src={taskImg} alt="img" />
                    <span>
                        Task
                    </span>
                </div>

                <div className="menubtn" onClick={() => logout()}>
                    <img className="icon" src={logoutImg} alt="img" />
                    <span>
                        Logout
                    </span>
                </div>






            </div>
        </div>
    );
}
export default Menu;