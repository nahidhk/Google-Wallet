
const queryString = window.location.search.substring(1); 
window[queryString]();

function historyopen(){
openapp('history');
loadapp('block');
}
function openapp(opentheapp){
    document.getElementById(opentheapp).style.display='block';
}


function callapp(value){
    window.location.href=`?${value}`
}
function loadapp(valudata){
  document.getElementById('loadapp').style.display=valudata;
}