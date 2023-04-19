let backTop = document.querySelector('.back-top');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backTop.style.display = "block";
  } else {
    backTop.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const gotoTop = ()=>{
    document.body.scrollIntoView({
        behavior: 'smooth',
    });
};
backTop.addEventListener('click', gotoTop);


const shopLink = document.querySelector('.shop-link');
const aboutLink = document.querySelector('.about-link');
const blogLink = document.querySelector('.blog-link');
const contactLink = document.querySelector('.contact-link');

shopLink.addEventListener('onclick', () =>{
  shopLink.style.color = 'rgb(140,118,94)';

});

aboutLink.addEventListener('click', () =>{
  shopLink.style.color = 'rgb(140,118,94)';

});

blogLink.addEventListener('onclick', () =>{
  shopLink.style.color = 'rgb(140,118,94)';

});

shopLink.addEventListener('click', () =>{
  contactLink.style.color = 'rgb(140,118,94)';

});


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnSubscribe = document.querySelector('.btn-subscribe');

const closeModal = function(){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal= function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
 };

for (let i = 0; i < btnsOpenModal.length; i++)
  btnSubscribe[i].addEventListener('click', openModal);

btnSubscribe[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});




// const userCardTemplate = document.querySelector("[data-user-template]")
// const userCardContainer = document.querySelector("[data-user-cards-container]")

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(res => res.json())
//   .then(data =>{
//     data.forEach(user =>{
//       const card = userCardTemplate.content.cloneNode(true).children[0]
//       const header = card.querySelector("[data-header]")
//       const body = card.querySelector("[data-body]")
//       header.textContent = user.name
//       body.textContent = user.email
//       userCardContainer.append(card)
//     })
   
//   })

// $('.carousel').carousel()

