
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
console.log("script");
 
 function clickbtn(){
   loadapp('block');
 }
 
 function windowBack(){
   window.location.history();
 }
 
 
 async function displayData(searchInput = "") {
 
  try {
    const response = await fetch(apiurl);
    const data = await response.json();
    const dataContainer = document.getElementById("app");
    if (!dataContainer) {
      throw new Error("Element with id 'app' not found.");
    }

    dataContainer.innerHTML = "";

    let previousData = JSON.parse(localStorage.getItem("previousData")) || [];

    const newEntries = data.filter(
      (item) =>
        !previousData.some((prevItem) => prevItem.username === item.username)
    );

   // localStorage.setItem("previousData", JSON.stringify(data));

    const filteredData = data.filter(
      (item) =>
        item.username.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    newEntries.forEach((item) => {
      showNotification(item.username);
    });
    var myusrdata = localStorage.getItem("user");
    var thsiidData = JSON.parse(myusrdata);
  
    filteredData.forEach((item) => {
      
      const itemElement = document.createElement("div");
      itemElement.innerHTML = `
                <div class="photo" id="${item.username}">
                    <div onclick="window.location.href='/account?id=${item.userid}'" class="user">
                        <img src="/databases/photos/${item.userimg}" alt="${item.username}" class="userimg">
                        <p class="username">&nbsp;&nbsp;&nbsp;<b><span>${item.username}</span></b>  ${item.verifay}</p>
                    </div>
                    <blockquote>
                        <span title="This is a Post Time" class="dateshow">${item.mydate}</span>
                    </blockquote>
                    <blockquote>
                        ${item.title}
                    </blockquote>
                    
                    <img onload="loadmyphoto(this)" onerror="loadError(this)" src="/databases/photos/${item.photo}" alt="${item.username}" class="imgdata">
                    <img src="/img/load.gif" class="loadimg"  />
                    <div class="sherarsystem">              
                        <div class="aptmain">
                            <a href="/comment/?id=${item.id}&userid=${thsiidData.id}#${item.photoid}" class="shearicon"><i class="fa-regular fa-heart"></i></a>
                            <a href="/comment/?id=${item.id}&userid=${thsiidData.id}#${item.photoid}" class="shearicon"><i class="fa-solid fa-comments"></i></a>
                            <a href="/share/?id=${item.id}&uss=${thsiidData.username}#${item.photoid}" class="shearicon"><i class="fa-regular fa-share-from-square"></i></a>
                        </div>
                        </div>
                </div>
            `;

      dataContainer.appendChild(itemElement);
    });
  } catch (error) {
    console.error("data error", error);
  }
}

function loadmyphoto(imgElement) {
  const loadingImage = imgElement.nextElementSibling;
  if (loadingImage && loadingImage.classList.contains("loadimg")) {
    loadingImage.style.display = "none";
  }
}

function loadError(imgElement) {
  const loadingImage = imgElement.nextElementSibling;
  if (loadingImage && loadingImage.classList.contains("loadimg")) {
    loadingImage.style.display = "none";
    imgElement.style.display = "none";
  }
}

function searchData() {
  const searchInput1 = document.querySelector("#search1").value;
  const searchInput2 = document.querySelector("#search2").value;
  displayData(searchInput1 + searchInput2);
  window.location.href ="#" + searchInput1 + searchInput2;
}