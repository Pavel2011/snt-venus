function changeViewPort(key, val) {
    var reg = new RegExp(key, "i"), oldval = document.querySelector('meta[name="viewport"]').content;
    var newval = reg.test(oldval) ? oldval.split(/,\s*/).map(function(v){ return reg.test(v) ? key+"="+val : v; }).join(", ") : oldval+= ", "+key+"="+val ;
    document.querySelector('meta[name="viewport"]').content = newval;
}

let mobileMenu=document.querySelector('.toggle-button');
let mobileMenuModal=document.querySelector('.mobile-nav');
console.log(mobileMenu);
let mobCloseMenuBtn=document.getElementById('mob-menu__close');
let backdrop=document.querySelector('.backdrop');
console.log(backdrop);


function toggleMenu(){
  mobileMenuModal.style.display='block';
  backdrop.style.display='block';
  console.log('Menu get clicked')
  }

  function closeMobMenu(){
    mobileMenuModal.style.display='none';
    backdrop.style.display='none';
    console.log('Menu get clicked')
  }
  function backdropClose(){
    mobileMenuModal.style.display='none';
    backdrop.style.display='none';
    console.log('backdrop get clicked')
  }

mobileMenu.addEventListener('click',toggleMenu);
mobCloseMenuBtn.addEventListener('click',closeMobMenu);
backdrop.addEventListener('click',backdropClose);
