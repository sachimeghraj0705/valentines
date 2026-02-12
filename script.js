const seal = document.getElementById("seal");
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const film = document.getElementById("film");
const text = document.getElementById("text");

const message = `Happy Valentine’s Day, my love.

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

seal.onclick = () => {
envelope.classList.add("open");

setTimeout(()=>{
document.querySelector(".envelope-wrapper").style.display="none";
letter.classList.remove("hidden");
typeWriter(0);
},1000);
};

function typeWriter(i){
if(i < message.length){
text.innerHTML += message.charAt(i);
setTimeout(()=>typeWriter(i+1),40);
}
else{
film.classList.remove("hidden");
}
}
