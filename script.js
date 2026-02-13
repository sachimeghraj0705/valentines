const envelope = document.getElementById("envelope");
const letterSection = document.getElementById("letterSection");
const typed = document.getElementById("typedText");
const polaroids = document.getElementById("polaroids");
const closing = document.querySelector(".closing");

/* FLOATING KISSES */
function createKiss(){
  const kiss=document.createElement("div");
  kiss.className="kiss";
  kiss.innerHTML="💋";
  kiss.style.left=Math.random()*100+"vw";
  kiss.style.animationDuration=(6+Math.random()*6)+"s";
  document.body.appendChild(kiss);
  setTimeout(()=>kiss.remove(),12000);
}
setInterval(createKiss,400);

/* LETTER TEXT */
const letterText=`Mayank,

Happy Valentine’s Day, Baby.

I don’t think you realize how much you mean to me.

Even though we are going through a lot right now,
I just want you to know that whether we are meant to be or not,
I love you and I meant it when I said it.

I really wanted to celebrate Valentine’s this year.
I was hoping we could, because we barely get to celebrate
any special days together.

But it seems like the universe had other plans,
so I made this little something for you instead.

I hope you like it, because I’ve been planning this
since before we took a break.

I’m grateful for every laugh, every conversation,
and every quiet moment we share.

I care about you more than I can ever properly put into words. ❤️`;

let i=0;

/* TYPEWRITER */
function typeWriter(){
  if(i<letterText.length){
    typed.innerHTML+=letterText.charAt(i);
    i++;
    setTimeout(typeWriter,30);
  }else{
    setTimeout(()=>polaroids.classList.add("show-photos"),600);
    setTimeout(()=>{
      closing.classList.remove("hidden");
      closing.classList.add("show-closing");
    },1400);
  }
}

/* OPEN ENVELOPE */
envelope.addEventListener("click",()=>{
  envelope.classList.add("open");
  setTimeout(()=>{
    document.querySelector(".envelope-wrapper").style.display="none";
    letterSection.style.display="block";
    typed.innerHTML="";
    i=0;
    typeWriter();
  },1000);
});
