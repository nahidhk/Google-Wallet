const apiurl = 'https://script.google.com/macros/s/AKfycbyR0IB-kAE6d3f8gReM3kn-bFUqqdwcVqZDcAO9xxlpx-SwiRk-O3k3wQfQieTwDGOs/exec'
// const today = new Date().toISOString().split('T')[0];
// document.getElementById('autodate').value = today; 
// document.getElementById('autodate1').value = today; 

async function displayData() {
  try {
    const response = await fetch(apiurl);
    const data = await response.json();
    const dataContainer = document.getElementById("app");
    const totalAmountContainer = document.getElementById("tcost");
    const totalAmountdepo = document.getElementById("tdepo");
    const totalnet = document.getElementById("netall");
    
    if (!dataContainer) {
      throw new Error("Element with id 'app' not found.");
    }

    let totalCAmount = 0; 
    let totalDAmount = 0;





    data.innerHTML = "";
    data.forEach((item) => {
      totalCAmount += parseFloat(item.camount) || 0; 
      totalDAmount += parseFloat(item.damount) || 0;

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
            <h1 >500,00.00</h1>
          </div>
        </div>
        </div>
      `;
      dataContainer.appendChild(itemElement);
    });

    totalAmountContainer.textContent = totalCAmount.toFixed(2); 
    totalAmountdepo.textContent= totalDAmount.toFixed(2);
    const netall = totalDAmount - totalCAmount;
    totalnet.textContent = netall;
    document.getElementById("netall1").innerHTML=netall;
    document.getElementById("netall2").innerHTML=totalCAmount.toFixed(2);
    document.getElementById("netall3").innerHTML=totalDAmount.toFixed(2);
  } catch (error) {
    console.error("data error", error);
  }
}
function searchData() {
  const searchInput = document.querySelector("#search").value;
  displayData(searchInput);
  window.location.href ="#" + searchInput ;
}

displayData();




