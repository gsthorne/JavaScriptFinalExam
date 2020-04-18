// JavaScript Document

// somehow i found six errors instead of five but it works so! it's all good!

// 6. there is only one main, so it should be querySelector instead of querySelectorAll
let main = document.querySelector('main');
let submitButton = document.querySelector('input[type="submit"]');
// 1. document spelled as 'documant'
let body = document.querySelector('body');
// 4. input not defined
let input = document.querySelector('input[type="text"]')

// 2. proper event listener is 'click', not 'clickityclick'
submitButton.addEventListener('click', function(e) {
  // 3. the page refreshes on submit
  e.preventDefault();
  let personName = input.value;
  let para = document.createElement('p');
  para.innerHTML = '<h3>Hey there ' + personName + '! Thanks for stopping by!</h3>';
  // 5. proper variable is 'para', not 'paragraph'
  main.appendChild(para);
  body.setAttribute('class', 'meow');
  console.log('=^..^=');
});
