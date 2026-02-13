// ==============================
// FLOATING KISSES
// ==============================

function createKiss() {
  const kiss = document.createElement("div");
  kiss.className = "kiss";
  kiss.innerHTML = "💋";

  kiss.style.left = Math.random() * 100 + "vw";
  kiss.style.animationDuration = 8 + Math.random() * 6 + "s";

  document.body.appendChild(kiss);

  setTimeout(() => {
    kiss.remove();
  }, 14000);
}

setInterval(createKiss, 500);


// ==============================
// ENVELOPE + LETTER FLOW
// ==============================

const envelope = document.getElementById("envelope");
const letterSection = document.getElementById("letterSection");
const typed = document.getElementById("typedText");
const polaroids = document.querySelector(".polaroids");
const closing = document.querySelector(".closing");

const letterText = `Mayank,

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

let i = 0;

function typeWriter() {
  if (i < letterText.length) {
    typed.innerHTML += letterText.charAt(i);
    i++;
    setTimeout(typeWriter, 28);
  } else {
    // After typing finishes → show polaroids
    polaroids.style.opacity = "1";

    // Then show closing text after photos appear
    setTimeout(() => {
      closing.style.opacity = "1";
    }, 1200);
  }
}

envelope.addEventListener("click", () => {

  // Open flap animation
  envelope.classList.add("open");

  setTimeout(() => {
    document.querySelector(".envelope-wrapper").style.display = "none";
    letterSection.style.display = "block";

    // Reset typing if reloaded
    typed.innerHTML = "";
    i = 0;

    typeWriter();
  }, 1000);

});
