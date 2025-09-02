import React from "react";
import TotalBlance from "./TotalBlance";

function Nav() {
    return (
        <div className="nav">
            <blockquote className="flex around">
                <h3  className="fff" onClick={()=> window.location.href="/" }>
                    Google Wallet
                </h3>

                
                    <div className="blanceBox">
                        <i className="fa-solid fa-bangladeshi-taka-sign"></i>
                        <span>
                            <TotalBlance />
                        </span>
                        TK
                    </div>
            </blockquote>
        </div>
    );
}


export default Nav;