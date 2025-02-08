const jsonData = 
{
  "sheet": "https://docs.google.com/spreadsheets/d/1fiZzJ1IVEg6ebzMXyp8ZQZe9IiEizJVZXFNvY3xslA0/edit?usp=drivesdk",
  "jsonApi": "https://script.google.com/macros/s/AKfycbxs5eklxHQ-aRzwxaJzFcP9XE36Cr7NVt_6CCy8fU-8517xTjV7Qo9SsUO9_WT0Rp1v/exec",
  "submitFormUrl":"https://script.google.com/macros/s/AKfycbxs5eklxHQ-aRzwxaJzFcP9XE36Cr7NVt_6CCy8fU-8517xTjV7Qo9SsUO9_WT0Rp1v/exec"
}
;

//https://script.google.com/macros/s/AKfycbyR0IB-kAE6d3f8gReM3kn-bFUqqdwcVqZDcAO9xxlpx-SwiRk-O3k3wQfQieTwDGOs/exec





const apiurl = jsonData.jsonApi;
const today = new Date().toISOString().split('T')[0];
document.getElementById('autodate').value = today; 
document.getElementById('autodate1').value = today; 

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

      const itemElement = document.createElement("div");
      itemElement.innerHTML = `
 <div class="databox">
        <div class="flex beet">
          <div>
            <h2>${item.type}</h2>
            <p class="p"> ${item.details} </p>
            <p class="p">${item.date}</p>
          </div>
          <div class="px">
            <br />
            <h1 >${item.credit.toLocaleString('en-US', { minimumFractionDigits: 2 })}${item.debit.toLocaleString('en-US', { minimumFractionDigits: 2 })}</h1>
          </div>
        </div>
        </div>
      `;
      dataContainer.appendChild(itemElement);
    });

    loadapp('none');
    
    const netTotal = totalCredit - totalDebit;
    
   document.getElementById('taka').innerHTML=netTotal.toLocaleString('en-US', { minimumFractionDigits: 2 });
    
    
  } catch (error) {
    console.error("data error", error);
  }
}

displayData();

function sheets(){
  window.location.href=jsonData.sheet;
}
document.getElementById('sheets').value=jsonData.sheet;
document.getElementById('apijsonlink').value=jsonData.jsonApi;

