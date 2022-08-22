(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const o=[{name:"Vincent van Gogh",username:"vincey1853",location:"Zundert, Netherlands",avatar:"./images/avatar-vangogh.png",post:"images/post-vangogh.png",comment:"just took a few mushrooms lol",likes:21},{name:"Gustave Courbet",username:"gus1819",location:"Ornans, France",avatar:"images/avatar-courbet.png",post:"images/post-courbet.png",comment:"i'm feelin a bit stressed tbh",likes:4},{name:"Joseph Ducreux",username:"jd1735",location:"Paris, France",avatar:"images/avatar-ducreux.png",post:"images/post-ducreux.png",comment:"gm friends! which coin are YOU stacking up today?? post below and WAGMI!",likes:152}],l=document.getElementById("root");for(let t=0;t<o.length;t++)l.innerHTML+=`
  <div class="container">
  <header>
    <img class="main-logo" src="./images/oldagram-logo.png" alt="Oldagram Logo">
    <img class="img-logo" src="./images/profile.jpg" alt="Profile logo">
  </header>
    <div class="profile-container">
      <img class="img-logo" src="${o[t].avatar}" alt="Van gogh Avatar">
      <div class="profile-details">
        <h6>${o[t].name}</h6>
        <p>${o[t].location}</p>
      </div>
    </div>
    <img class="img-profile" src="${o[t].post}" alt="Van gogh picture">
    <div class="like-container">
      <img class="size-adjust like-icon" src="./images/like.png" alt="Like btn">
      <img class="size-adjust" src="./images/comment.png" alt="Comment btn">
      <img class="size-adjust"  src="./images/share.png" alt="Share btn">
    </div>
    <p class="likes-p">${o[t].likes} likes</p>
    <p class="notification-p">${o[t].username}<span> ${o[t].comment}</span></p>
    </div>
  `;
