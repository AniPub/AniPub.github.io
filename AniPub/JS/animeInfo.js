
export let ID = 0 || JSON.parse(localStorage.getItem("AnimeId"));

const Profile = document.querySelectorAll(".profile");
Profile.forEach(value=>{
    value.addEventListener('click',()=>{
         ID = value.dataset.anime;
        localStorage.setItem("AnimeId",JSON.stringify(ID));
        setTimeout(() => {
            window.location.href="VideoTemp.html"
        }, 1000);
    })
})





