const importBtn = document.getElementById("importBtn");
const exportBtn = document.getElementById("exportBtn");
const tokenTextarea = document.getElementById("tokenTxt");

(async function initPopupWindow() {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    if (tab?.url) {
      try {
        let url = new URL(tab.url);
        input.value = url.hostname;
      } catch {}
    }

    tokenTextarea.focus();

  })();

exportBtn.addEventListener("click", exportCookies)

async function clearCookies(domain){
    const url = new URL(domain);
    let cookieCounts = 0;
    try {
        const cookies = await chrome.cookies.getAll({ domain: url.hostname })
        
    } catch (error) {

    }
}

async function exportCookies(){
    const url = new URL("https://netflix.com")
    let r = confirm("Export cookie?")
    if(r){
        const cookies = await chrome.cookies.getAll({ domain: url.hostname })
        const description = prompt("Cookie description");
        prompt(`${cookies.length} cookies has been sent!`, JSON.stringify({ description, cookies }));
    }
}

async function initExt(){
    
//    const response = await fetch("https://cyberpanel.vault.net.eu.org")

//    const html = await response.text()

//    console.log(html)

}


initExt();