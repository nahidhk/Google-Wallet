// URL থেকে হ্যাশ প্যারামিটার পড়া
const hashString = window.location.hash.substring(1);
const urlParams = new URLSearchParams(hashString);
const parameters = Object.fromEntries(urlParams.entries());
const myfun = parameters.func;

if (myfun) {
    if (typeof window[myfun] === "function") {
        window[myfun]();
    }
   
}


function callapp(urldata) {
    const protocolUrl = window.location.protocol + '//' + window.location.host;
    window.location.href = protocolUrl + "#func=openapp&data=" + encodeURIComponent(urldata);
}

function openapp() {
    const hashString = window.location.hash.substring(1);
    const urlParams = new URLSearchParams(hashString);
    const thisdata = urlParams.get("data");

    if (thisdata) {
        const element = document.getElementById(thisdata);
        if (element) {
            element.style.display = 'block';
           
        } else {
            alert('Element not found: ' + thisdata);
        }
    }
}