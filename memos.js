const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const messages = JSON.parse(urlParams.get("messages"));
const container=document.querySelector(".memo-container");
container.innerHTML="";
for(const message of messages){
    container.innerHTML+=/*html*/
    `
    <div class='memo'>
        <div class='memo-inner-wrap'>
            <div>${message}</div>
        </div>
    </div>
    `;
}