const loginData = sessionStorage.getItem('logindata');
if (loginData === 'true') {
  
} else {
 document.getElementById('login').style.display='block';
}