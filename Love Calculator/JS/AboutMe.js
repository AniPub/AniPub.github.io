let Name = document.querySelector(".name").innerHTML;
let Age = document.querySelector(".age").innerHTML;
let Mail = document.querySelector(".mail").innerHTML;
let Number = document.querySelector(".number").innerHTML;
let Hobby = document.querySelector(".hobby").innerHTML;
let Address = document.querySelector(".address").innerHTML;
let RelationshipStatus = document.querySelector(".relationship-status").innerHTML;
function Edit (info) {
    if (Name === info) {
        Name = prompt ("Enter Full Name!");
        document.querySelector(".name").innerHTML = `${Name}`
    }
    else if (Age === info ) {
        Age = prompt ("Enter Age!");
        document.querySelector(".age").innerHTML = `${Age}`
    }
    else if (Mail === info ) {
        Mail = prompt ("Enter Mail Address!");
        document.querySelector(".mail").innerHTML = `${Mail}`
    }
    else if (Number === info ) {
        Number = prompt ("Enter WhatsApp Number!");
        document.querySelector(".number").innerHTML = `${Number}`
    }
    else if (Hobby === info ) {
        Hobby = prompt ("Enter Hobby Details!");
        document.querySelector(".hobby").innerHTML = `${Hobby}`
    }
    else if (Address === info ) {
        Address = prompt ("Enter Full Address!");
        document.querySelector(".address").innerHTML = `${Address}`
    }
    else if (RelationshipStatus === info ) {
        RelationshipStatus = prompt ("Enter Relationship Status!");
        document.querySelector(".relationship-status").innerHTML = `${RelationshipStatus}`
    };
    
};