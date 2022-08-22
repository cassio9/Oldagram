import posts from "./data";

const root = document.getElementById("root");

for (let i = 0; i < posts.length; i++) {
  root.innerHTML += `
  <div class="container">
  <header>
    <img class="main-logo" src="./images/oldagram-logo.png" alt="Oldagram Logo">
    <img class="img-logo" src="./images/profile.jpg" alt="Profile logo">
  </header>
    <div class="profile-container">
      <img class="img-logo" src="${posts[i].avatar}" alt="Van gogh Avatar">
      <div class="profile-details">
        <h6>${posts[i].name}</h6>
        <p>${posts[i].location}</p>
      </div>
    </div>
    <img class="img-profile" src="${posts[i].post}" alt="Van gogh picture">
    <div class="like-container">
      <img class="size-adjust like-icon" src="./images/like.png" alt="Like btn">
      <img class="size-adjust" src="./images/comment.png" alt="Comment btn">
      <img class="size-adjust"  src="./images/share.png" alt="Share btn">
    </div>
    <p class="likes-p">${posts[i].likes} likes</p>
    <p class="notification-p">${posts[i].username}<span> ${posts[i].comment}</span></p>
    </div>
  `;
}