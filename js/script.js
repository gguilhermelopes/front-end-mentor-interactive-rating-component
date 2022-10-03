const votes = document.querySelectorAll(".votes a");
let resultVote = document.querySelector(".thank-you p span");
let resultVoteText = resultVote.innerText;
const button = document.querySelector(".info button");
const thankYouPage = document.querySelector(".thank-you");
const initialPage = document.querySelector(".initial");
const error = document.querySelector(".error");

function activeVote(event) {
  event.preventDefault();
  votes.forEach((item) => {
    item.classList.remove("active");
  });
  this.classList.add("active");
  resultVoteText = this.innerText;
}

votes.forEach((item) => {
  item.addEventListener("click", activeVote);
});

function sendVote(event) {
  if (resultVoteText) {
    initialPage.classList.add("hidden");
    thankYouPage.classList.remove("hidden");
    resultVote.innerText = " " + resultVoteText + " ";
  } else {
    error.classList.remove("hidden");
  }
}

button.addEventListener("click", sendVote);
