const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

// yesBtn.addEventListener("click", () => {
//   setTimeout(()=>{
//   question.innerHTML = "Yay, see you very soon!";
//   gif.src =
//     "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
//   },1000);
//   setTimeout(()=>{
//     window.location.href = 'https://dev.pranavrajveer.com'; 
//     },3000);
// });

yesBtn.addEventListener('click',() =>{
  setTimeout(()=>{
    question.innerHTML = "Yay, please see my profile :)"
    gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif"
  },1000)
  setTimeout(()=>{
    window.location.href = "https://dev.pranavrajveer.com"
  },2000)
})

let hoverCounter = 0;
noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  hoverCounter++;
  if (hoverCounter >= 7) {
    alert("Why do You dislike me, Please select Yes 🥺");
    hoverCounter = 0;
  }
});
