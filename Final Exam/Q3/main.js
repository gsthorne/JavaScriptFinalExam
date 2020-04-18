let requestURL = "https://jessicagilfillan.github.io/Final_Exam_Prep/Q3/cats.json";


let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = async function() {
  let jsoncats = await request.response;
  getCats(jsoncats);
}

async function getCats(jsonObj) {
  let section = await document.querySelector('section');
  let allCats = await jsonObj.cats;
  for (let i = 0; i < allCats.length; i++) {
    let cat = await allCats[i];
    console.log(cat);
    let div = await document.createElement('div');
    let h2 = await document.createElement('h2');
    h2.textContent = await cat.name + ' the ' + cat.species + ' is ' + cat.age + ' years old!';
    div.appendChild(h2);
    let ul = await document.createElement('ul');
    for (let n = 0; n < cat.favFoods.length; n++) {
      console.log(cat.favFoods[n])
      let li = await document.createElement('li');
      li.innerHTML = cat.favFoods[n];
      ul.appendChild(li);
    }
    div.appendChild(ul)
    section.appendChild(div);
  }
}
