import {OP} from "./data/data.js"
let html = '';

let profile = document.querySelector(".main-body-div");

OP.forEach((value,i) => {
 html +=  `
<div class="profile-div">
    <div class="profile" data-anime="${i}">
    <div class="image-div">
        <img class="poster" src="${value[0].ImagePath}" alt="">
    </div>
    <div class="title-div">
        <p class="title">${value[0].Name}</p>
    </div>
    <div class="ratings-div">
        <p></p>
    </div>
    
</div>
</div>

    `


});
profile.innerHTML = html;
