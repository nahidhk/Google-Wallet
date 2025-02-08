
const queryString = window.location.search.substring(1);
if (queryString) {
  window[queryString]();
}
function historyopen() {
  openapp('history');
  loadapp('block');
}
function openapp(opentheapp) {
  document.getElementById(opentheapp).style.display = 'block';
}
function callapp(value) {
  window.location.href = `?${value}`
}
function loadapp(valudata) {
  document.getElementById('loadapp').style.display = valudata;
}
function debit() {
  document.getElementById('debit').style.display = 'flex';
}
function credit() {
  document.getElementById('credit').style.display = 'flex';
}
function apis() {
  document.getElementById('apis').style.display = 'flex';
}
function tabel() {
  document.getElementById('tabel').style.display = 'flex';
}
console.log("script")
