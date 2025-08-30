import react from "react";
import sheetsImg from "../assets/sheets.png";
import tableImg from "../assets/table.png";
import { useNavigate } from "react-router-dom";
import googleURL from "../data/googleURL.json"

function Menu() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex center wrap">


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



            </div>
        </div>
    );
}
export default Menu;