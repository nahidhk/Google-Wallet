import react from "react";


function CallBOM(bomcall){
           const newTask = bomcall;
           let savedData = JSON.parse(localStorage.getItem("taskData"));
           if (!Array.isArray(savedData)) savedData = [];
           savedData.push(newTask);
           localStorage.setItem("taskData", JSON.stringify(savedData));
}


export default CallBOM;