const openBtn=document.getElementById("openBtn");
const flap=document.getElementById("flap");
const envelopeWrapper=document.getElementById("envelopeWrapper");
const scrollSection=document.getElementById("scrollSection");
const photoSection=document.getElementById("photoSection");
const title=document.getElementById("title");
const message=document.getElementById("message");

const textTitle="Happy Valentine's Day Mayank ❤️";

const paragraphs=[
"Happy Valentine’s Day, my love.",
"I don’t think you realize how much you mean to me.",
"Even though we are going through a lot right now, I just want you to know that whether we are meant to be or not, I love you and I meant it when I said it.",
"I really wanted to celebrate Valentine’s this year. I was hoping we could, because we barely get to celebrate any special days together.",
"But it seems like the universe had other plans, so I made this little something for you instead.",
"I hope you like it, because I’ve been planning this since before we took a break.",
"I’m grateful for every laugh, every conversation, and every quiet moment we share.",
"I care about you more than I can ever properly put into words. ❤️"
];

openBtn.onclick=()=>{
  flap.style.transform="rotateX(180deg)";
  setTimeout(()=>{
    envelopeWrapper.style.display="none";
    scrollSection.style.display="block";
    typeTitle();
  },900);
};

let i=0;
function typeTitle(){
 if(i<textTitle.length){
   title.innerHTML+=textTitle.charAt(i);
   i++;
   setTimeout(typeTitle,60);
 }else{
   typeParagraphs(0);
 }
}

function typeParagraphs(index){
 if(index>=paragraphs.length){
   photoSection.style.display="flex";
   return;
 }
 const p=document.createElement("p");
 message.appendChild(p);
 let j=0;
 function typeLine(){
   if(j<paragraphs[index].length){
     p.innerHTML+=paragraphs[index].charAt(j);
     j++;
     setTimeout(typeLine,30);
   }else{
     setTimeout(()=>typeParagraphs(index+1),300);
   }
 }
 typeLine();
}

/* FLOATING KISSES */

function createKiss(){
 const kiss=document.createElement("div");
 kiss.className="kiss";
 kiss.innerHTML="💋";
 kiss.style.left=Math.random()*100+"vw";
 kiss.style.animationDuration=6+Math.random()*4+"s";
 document.body.appendChild(kiss);
 setTimeout(()=>kiss.remove(),10000);
}
setInterval(createKiss,400);
