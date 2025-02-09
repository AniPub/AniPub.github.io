let YourName = '';
let HerName = '';
let Number = '';
function Calculate () {
 YourName = prompt("What's your name ?");
 HerName = prompt("What's her name ?");
 Number = Math.random();
 Number = Number*100;
 Number = Math.floor(Number);
 if (YourName === null || HerName === null || YourName === "" || HerName === "") {
    YourName = prompt("Please write your name !(I won't save your personal info so don't worry)");
    HerName = prompt("Please write her name ?");
      if (YourName === null || HerName === null || YourName === "" || HerName === "") {
        YourName = prompt("Okay! Using a default name instead of your name!", "Mister-X" ) ;       
        HerName = prompt("Using a default name instead of her name!" , "Ms-Y");
        document.querySelector(".Result").innerHTML = `Your Name : <span class="Your-name"> ${YourName} </span> & Her Name <span class="Her-name"> ${HerName} </span>... Your Love Score is ${Number}% `
        if (YourName === null || HerName === null || YourName === "" || HerName === "") {
            Number = 0 ;
            document.querySelector(".nom-p").innerHTML = `Okeh ! It seems you can't trust the website . You can check .. There is no XSS (Cross site scripting) or other malicious code !
            It's just a simple site which i made to pass my time ! {jul 21/24} and the predictions are not Real ! Just have fun ! Well if you are new or want to learn web developing or need any kind of help feel 
            free to contact me <a href="AboutMe.html" target="_blank"><button class="button-a"> About Me !</button></a>`
        }
        else {
    document.querySelector(".Result").innerHTML = `Your Name : <span class="Your-name"> ${YourName} </span> & Her Name <span class="Her-name"> ${HerName} </span>... Your Love Score is ${Number}% `
  }
    }
  else {
    document.querySelector(".Result").innerHTML = `Your Name : <span class="Your-name"> ${YourName} </span> & Her Name <span class="Her-name"> ${HerName} </span>... Your Love Score is ${Number}% `
  }
  
   
}
else {
    document.querySelector(".Result").innerHTML = `Your Name : <span class="Your-name"> ${YourName} </span> & Her Name <span class="Her-name"> ${HerName} </span>... Your Love Score is ${Number}% `
}
}
