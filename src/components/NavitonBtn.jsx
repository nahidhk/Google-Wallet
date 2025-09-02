import react from "react";

function NavitonBtn() {
    return (
        <div>
            <div className="naviton">
                <div className="pointer" onClick={()=> window.location.history()}>
                    1
                </div>
                <div className="pointer" onClick={()=> window.location.href="/"}>
                    2
                </div>
                <div className="pointer" onClick={()=> alert("working")}>
                    3
                </div>
            </div>
        </div>
    )
}
export default NavitonBtn;