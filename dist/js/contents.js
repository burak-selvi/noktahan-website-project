const content = document.querySelectorAll('.lezzet-contents ul li');
const contents = document.querySelectorAll('.lezzet-content');

content.forEach(function (temp, index) {
  temp.addEventListener('click', () => {
    change(temp, index);
  });

});

const change = (val, index) => {
  const current = document.querySelector('.lezzet-contents .select');
  const currentContent = document.querySelector('.lezzet-content.choosen');
  current.classList.remove('select');
  val.classList.add('select');
  currentContent.classList.remove('choosen');
  contents[index].classList.add('choosen');
};
