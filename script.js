const notification= document.getElementById('notification');
const toastmessage= document.getElementById('toastmessage');

notification.addEventListener('click',() =>{
  toast();
})
function toast(){
  const newnotification = document.createElement ("div");
  newnotification.classList.add("toast");
  newnotification.innerHTML="Your text goes here.";
  toastmessage.appendChild(newnotification);

 setInterval(() => {
   newnotification.remove();
 }, 3000);

}