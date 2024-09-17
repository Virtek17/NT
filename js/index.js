const tripItem = document.querySelectorAll('.trip__nav_item');
const accordeonQuestion = document.querySelectorAll('.accordeon__question');

tripItem.forEach(element => {
   element.addEventListener('click', () => {
      tripItem.forEach(el => el.classList.remove('item-active'));

      element.classList.add('item-active')
   })
})

accordeonQuestion.forEach(element => {
   element.addEventListener('click', function() {
      const clickAnswer = element.parentElement.querySelector('.accordeon__answer');
      element.classList.toggle('accordeon__question--active');
      clickAnswer.classList.toggle('accordeon__answer--visible');
   })
})
   
