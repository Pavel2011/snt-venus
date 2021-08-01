let mobileMenu=document.querySelector('.toggle-button');
let mobileMenuModal=document.querySelector('.mobile-nav');
console.log(mobileMenu);
let mobCloseMenuBtn=document.getElementById('mob-menu__close')



function toggleMenu(){
  mobileMenuModal.style.display='block';
  console.log('Menu get clicked')
  }

  function closeMobMenu(){
    mobileMenuModal.style.display='none';
    console.log('Menu get clicked')
  }

mobileMenu.addEventListener('click',toggleMenu);
mobCloseMenuBtn.addEventListener('click',closeMobMenu)
