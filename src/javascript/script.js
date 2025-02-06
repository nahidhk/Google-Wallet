
const queryString = window.location.search.substring(1); 
window[queryString]();

function historyopen(){
openapp('history');
}
function openapp(opentheapp){
    document.getElementById(opentheapp).style.display='block';
}


function callapp(value){
    window.location.href=`?${value}`
}