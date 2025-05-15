const jsonData =
{
  "sheet": "https://docs.google.com/spreadsheets/d/1fiZzJ1IVEg6ebzMXyp8ZQZe9IiEizJVZXFNvY3xslA0/edit?usp=drivesdk",
  "jsonApi": "https://script.google.com/macros/s/AKfycbzSqwwhAZdgZWJvj8dag1MRy9I5Ykbwzy01fyPz2nhrCVFbzpn3r5J_6dF8WFpePDSX/exec",
  "submitFormUrl": "Past The HTML Form",
  "number": "01877357091",
  "password": "NAHID12345",
  "name": "MD. Nahid",
  "imgPath": "/nahid.jpg"
}
  ;

//https://script.google.com/macros/s/AKfycbyR0IB-kAE6d3f8gReM3kn-bFUqqdwcVqZDcAO9xxlpx-SwiRk-O3k3wQfQieTwDGOs/exec






const apiurl = jsonData.jsonApi;
const today = new Date().toISOString().split('T')[0];
document.getElementById('autodate').value = today;


function sheets() {
  window.location.href = jsonData.sheet;
}
document.getElementById('sheets').value = jsonData.sheet;
document.getElementById('apijsonlink').value = jsonData.jsonApi;

function login() {
  document.getElementById('login').style.display = 'block';
}


const username = document.getElementById('number').value = jsonData.number;
document.getElementById('showName').innerHTML = jsonData.name;
document.getElementById('showImg').src = jsonData.imgPath;
function loginnow() {
  const username = document.getElementById('number');
  const password = document.getElementById('password');
  if (password.value === jsonData.password) {
    sessionStorage.setItem("logindata", true);
    window.location.reload();
  } else {
    alert('Error Password!');
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
      totalDebit += parseFloat(item.basic) || 0;
      totalCredit += parseFloat(item.bonus) || 0;

      const itemElement = document.createElement("tr");
      itemElement.innerHTML = `
  <td>${new Date(item.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      })}</td>
  <td class="right">${item.basic.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
  <td class="right">${item.bonus.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
`
        ;
      dataContainer.prepend(itemElement);
    });

    loadapp('none');

    const netTotal = totalCredit + totalDebit;
    document.getElementById("totalBasic").innerHTML = totalDebit.toLocaleString('en-US', { minimumFractionDigits: 2 });
    document.getElementById("totalBonus").innerHTML = totalCredit.toLocaleString('en-US', { minimumFractionDigits: 2 });

    document.getElementById('taka').innerHTML = netTotal.toLocaleString('en-US', { minimumFractionDigits: 2 });


  } catch (error) {
    console.error("data error", error);
  }
}

displayData();




//  the monthly summary


async function loadData() {
  const response = await fetch(jsonData.jsonApi)
  const data = await response.json();

  const monthlyData = {};

  data.forEach(entry => {
    if (!entry.date) return;

    const date = new Date(entry.date);
    const monthKey = date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0');

    const basic = parseFloat(entry.basic) || 0;
    const bonus = parseFloat(entry.bonus) || 0;

    if (!monthlyData[monthKey]) {
      monthlyData[monthKey] = { bonus: 0, basic: 0 };
    }

    monthlyData[monthKey].bonus += bonus;
    monthlyData[monthKey].basic += basic;
  });

  const tbody = document.querySelector('#summary-table');
  Object.entries(monthlyData).forEach(([month, values]) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
          <td>${new Date(month).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long"
    })}</td>
          <td class="right">${values.bonus.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
          <td class="right">${values.basic.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
          <td class="right">${(values.bonus + values.basic).toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
        `;
    tbody.prepend(tr);
    document.getElementById('loading-row').style.display = 'none';
  });
}

loadData();


//  the form submit
 