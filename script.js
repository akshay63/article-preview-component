var socialMedia = document.querySelector(".article__socialmedia");
var shareBtn = document.querySelector(".article__userbox--sharebtn");

shareBtn.addEventListener("click", function (e) {
  e.preventDefault();
  socialMedia.classList.toggle("hide");
  shareBtn.classList.toggle("active");
});
