const devsMessage = document.querySelector("dialog");
document.querySelector(".am-b").addEventListener('click', ()=> {
devsMessage.showModal();

})
document.querySelector(".leave").addEventListener('click', ()=> {
    devsMessage.close();
    
    })