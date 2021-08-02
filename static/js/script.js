let imgs = document.querySelectorAll('.img-thumnail');
const modal = document.getElementById('imgModal');
imgs.forEach(img => {
    img.onclick = () =>{
        modal.querySelector('div>img').src = img.src
        modal.classList.add('modal-open')
    }
});
window.onclick = function(event) {
    if ((event.target == modal) || (event.target == modal.querySelector('.modal-content'))) {
        modal.classList.remove('modal-open')
    }
  }