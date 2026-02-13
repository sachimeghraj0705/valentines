// ELEMENTS
const envelope = document.getElementById("envelope");
const flap = document.querySelector(".flap");
const letterContainer = document.getElementById("letter-container");
const photos = document.getElementById("photos");
const ending = document.getElementById("ending");
const typedText = document.getElementById("typed-text");

// LETTER CONTENT
const letter = `Mayank,

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

let index = 0;

// TYPEWRITER
function typeWriter(){
  if(index < letter.length){
    typedText.innerHTML += letter.charAt(index);
    index++;
    setTimeout(typeWriter, 35);
  } else {
    // AFTER TYPING DONE
    setTimeout(() => {
      photos.style.opacity = "1";
    }, 400);

    setTimeout(() => {
      ending.classList.add("show-closing");
    }, 1400);
  }
}

// OPEN ENVELOPE
envelope.addEventListener("click", () => {
  flap.style.transform = "rotateX(180deg)";

  setTimeout(() => {
    document.getElementById("envelope-container").style.display = "none";
    letterContainer.classList.remove("hidden");
    typeWriter();
  }, 1000);
});

// FLOATING KISSES
function createKiss(){
  const kiss = document.createElement("div");
  kiss.className = "kiss";
  kiss.innerHTML = "💋";
  kiss.style.left = Math.random()*window.innerWidth + "px";
  kiss.style.animationDuration = (4 + Math.random()*6) + "s";
  document.body.appendChild(kiss);

  setTimeout(() => {
    kiss.remove();
  }, 8000);
}

setInterval(createKiss, 300);
