import react from "react";

function CallBOM(bomcall) {
    const formatted = new Date().toLocaleString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    }).replace(",", "");

    const taskDatax = {
        date: formatted,
        basic: bomcall.basic,
        over: bomcall.over,
        debit: bomcall.debit,
        credit: bomcall.credit,
    };

    let savedData = JSON.parse(localStorage.getItem("taskData"));
    if (!Array.isArray(savedData)) savedData = [];
    savedData.push(taskDatax);
    localStorage.setItem("taskData", JSON.stringify(savedData));
}



export default CallBOM;