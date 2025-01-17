
const devsMessage = document.querySelector("dialog");
document.querySelector(".d-m-button").addEventListener('click', ()=> {
devsMessage.showModal();

})
document.querySelector(".leave").addEventListener('click', ()=> {
    devsMessage.close();
    
    })
