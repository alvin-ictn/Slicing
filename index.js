let hamburger = document.getElementById('hamburger');
let aside = document.querySelector('aside');
let menu = document.querySelectorAll('li');
let title = document.querySelector('.top-title');
let tagline = document.querySelector('.tagline');


hamburger.addEventListener('click',()=> {
  if(aside.style.transform == 'translateX(-105%)'){
    aside.style.transform = 'translateX(0%)';
    window.setTimeout(()=>{
      aside.style.position = 'static'
    },300)
  }else{
    aside.style.transform = 'translateX(-105%)';
    window.setTimeout(()=>{
      aside.style.position = 'fixed'
    },300)
  }
  console.log(aside.style.transform)
})

for (item of menu) {
  item.addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
    if(current[0].lastElementChild.innerHTML){
      title.innerHTML = current[0].lastElementChild.innerHTML;
      tagline.innerHTML = `This is ${current[0].lastElementChild.innerHTML}`;
    }
  });
}
