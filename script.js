// Floating kisses
function createHeart(){
const heart=document.createElement("div");
heart.className="heart";
heart.innerText="💋";
heart.style.left=Math.random()*100+"vw";
heart.style.animationDuration=(Math.random()*3+5)+"s";
document.body.appendChild(heart);
setTimeout(()=>heart.remove(),8000);
}
setInterval(createHeart,400);

// Typing Message
const message = `
Happy Valentine’s Day, my love.
I don’t think you realize how much you mean to me.
Even though we are going through a lot right now, I just want you to know that whether we are meant to be or not, I love you and I meant it when I said it.

I really wanted to celebrate Valentine’s this year.
I was hoping we could, because we barely get to celebrate any special days together.
But it seems like the universe had other plans, so I made this little something for you instead.

I hope you like it, because I’ve been planning this since before we took a break.
I’m grateful for every laugh, every conversation, and every quiet moment we share.
I care about you more than I can ever properly put into words. ❤️
`;

let i=0;
const speed=35;
const target=document.getElementById("typeText");

function typeWriter(){
if(i<message.length){
target.innerHTML+=message.charAt(i);
i++;
setTimeout(typeWriter,speed);
}
}
typeWriter();

