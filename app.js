//and event listerner for pur input buttons 
//on click the submit button should show the secondary container
//if one of the input buttons are clicked then the rating should show on the thank you container


const reviewRating = document.querySelectorAll('#rating');
const submit = document.querySelector('.submit-btn');
const primaryContainer = document.querySelector('.rating-container');
const secondaryContainer = document.querySelector('.thanks');
const thanksRating = document.querySelector('.rating-value');

submit.addEventListener('click', submitBtn)
function submitBtn(){
  primaryContainer.classList.add('hidden');
  secondaryContainer.classList.remove('hidden');
};


reviewRating.forEach(input => {
  input.addEventListener('click', function(){
    reviewRating.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
      if(this.classList.contains('active')){
        thanksRating.innerHTML = this.value;
      }
  });

});