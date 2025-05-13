const jsonData = 
{
  "sheet": "https://docs.google.com/spreadsheets/d/1fiZzJ1IVEg6ebzMXyp8ZQZe9IiEizJVZXFNvY3xslA0/edit?usp=drivesdk",
  "jsonApi": "https://script.google.com/macros/s/AKfycbzSqwwhAZdgZWJvj8dag1MRy9I5Ykbwzy01fyPz2nhrCVFbzpn3r5J_6dF8WFpePDSX/exec",
  "submitFormUrl":"Past The HTML Form",
  "number":"01877357091",
  "password":"NAHID12345",
  "name":"MD. Nahid",
  "imgPath":"/nahid.jpg"
}
;

//https://script.google.com/macros/s/AKfycbyR0IB-kAE6d3f8gReM3kn-bFUqqdwcVqZDcAO9xxlpx-SwiRk-O3k3wQfQieTwDGOs/exec






const apiurl = jsonData.jsonApi;
const today = new Date().toISOString().split('T')[0];
document.getElementById('autodate').value = today; 
document.getElementById('autodate1').value = today; 

function sheets(){
  window.location.href=jsonData.sheet;
}
document.getElementById('sheets').value=jsonData.sheet;
document.getElementById('apijsonlink').value=jsonData.jsonApi;

function login(){
  document.getElementById('login').style.display='block';
}


 const username = document.getElementById('number').value=jsonData.number;
document.getElementById('showName').innerHTML=jsonData.name;
document.getElementById('showImg').src=jsonData.imgPath;
function loginnow(){
  const username = document.getElementById('number');
  const password = document.getElementById('password');
  if (password.value === jsonData.password) {
    sessionStorage.setItem("logindata",true);
    window.location.reload();
  } else {
   alert('Error Password!') ;
  }
}


function reloadapp() {
  window.location.reload();
}





//  dtaa




async function displayData() {
  try {
    const response = await fetch(apiurl);
    const data = await response.json();
    const dataContainer = document.getElementById("app");

    if (!dataContainer) {
      throw new Error("Element with id 'app' not found.");
    }

    let totalCredit = 0;
    let totalDebit = 0;

    data.innerHTML = "";
    data.forEach((item) => {
      totalDebit += parseFloat(item.debit) || 0;
      totalCredit += parseFloat(item.credit) || 0;

      const itemElement = document.createElement("tr");
      itemElement.innerHTML = `
  <td>${new Date(item.Date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })}</td>
  <td class="right">${item.Basic.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
  <td class="right">${item.Bonus.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
`
;
      dataContainer.prepend(itemElement);
    });

    loadapp('none');
    
    const netTotal = totalCredit - totalDebit;
    
   document.getElementById('taka').innerHTML=netTotal.toLocaleString('en-US', { minimumFractionDigits: 2 });
    
    
  } catch (error) {
    console.error("data error", error);
  }
}

displayData();
