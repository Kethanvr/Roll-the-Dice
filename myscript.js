var randomNumber1=Math.floor((Math.random()*6)+1);
console.log(randomNumber1);

var randomdiceimage= "dice"+ randomNumber1 +".png";

var randomsource="images/"+randomdiceimage;

var image=document.querySelectorAll("img")[0];
image.setAttribute("src", randomsource);

var randomnumber2=Math.floor((Math.random()*6)+1);
var randomimage2="dice"+randomnumber2+".png";
var image2="images/"+randomimage2;
var img2=document.querySelectorAll("img")[1].setAttribute("src",image2);

if(randomNumber1===randomnumber2)
    {document.querySelector('h1').textContent=("match tied plese refresh 🤕");}

    else if(randomNumber1>randomnumber2)
    {
        document.querySelector('h1').textContent=("💯player one won the match ");
    }
    else
    {
        document.querySelector('h1').textContent=("💯player two won won the match ");

    }
// document.querySelector("hi").result();
 