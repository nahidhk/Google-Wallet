import react from "react";
import sheetsImg from "../assets/sheets.png";
import tableImg from "../assets/table.png";

function Menu() {
    return (
        <div>
            <div className="flex center wrap">


                <div className="menubtn">
                    <img className="icon" src={tableImg} alt="img" />
                    <span>
                       Total Data 
                    </span>
                </div>


                <div className="menubtn">
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