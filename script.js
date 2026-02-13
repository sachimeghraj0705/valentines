const seal = document.getElementById("seal");
const envelopeWrapper = document.getElementById("envelopeWrapper");
const envelope = document.querySelector(".envelope");
const letter = document.getElementById("letter");
const titleEl = document.getElementById("title");
const msgEl = document.getElementById("message");
const photos = document.getElementById("photos");

const titleText = "Happy Valentine's Day Mayank ❤️";

const paragraphs = [
"Happy Valentine’s Day, my love.",
"I don’t think you realize how much you mean to me.",
"Even though we are going through a lot right now, I just want you to know that whether we are meant to be or not, I love you and I meant it when I said it.",
"I really wanted to celebrate Valentine’s this year.",
"I was hoping we could, because we barely get to celebrate any special days together.",
"But it seems like the universe had other plans, so I made this little something for you instead.",
"I hope you like it, because I’ve been planning this since before we took a break.",
"I’m grateful for every laugh, every conversation, and every quiet moment we share.",
"I care about you more than I can ever properly put into words. ❤️"
];

seal.onclick = () => {
  envelope.classList.add("open");

  setTimeout(()=>{
    envelopeWrapper.classList.add("hide-envelope");
  },800);

  setTimeout(()=>{
    letter.style.display="block";
    startTyping();
  },1600);
};

/* TYPEWRITER */

let t=0,p=0,c=0;

function startTyping(){
  if(t < titleText.length){
    titleEl.innerHTML += titleText[t++];
    setTimeout(startTyping,70);
  }
  else if(p < paragraphs.length){
    if(!msgEl.children[p]){
      const para=document.createElement("p");
      msgEl.appendChild(para);
    }

    if(c < paragraphs[p].length){
      msgEl.children[p].innerHTML += paragraphs[p][c++];
      setTimeout(startTyping,40);
    }else{
      p++; c=0;
      setTimeout(startTyping,400);
    }
  }
  else{
    photos.style.display="flex";
  }
}

/* KISSES */

const kissBox = document.getElementById("kisses");

setInterval(()=>{
  const k = document.createElement("div");
  k.className="kiss";
  k.innerHTML="💋";
  k.style.left=Math.random()*100+"vw";
  k.style.fontSize=14+Math.random()*12+"px";
  k.style.animationDuration=8+Math.random()*6+"s";
  kissBox.appendChild(k);

  setTimeout(()=>k.remove(),12000);
},500);
