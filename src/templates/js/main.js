const articleDropdowon = document.getElementById("articleDropdown").options;
// console.log(articleDropdowon);

function cardSelect(i) {
  const cardTitle = document.getElementById(`cardTitle${i}`).innerText;
  const cardHeader = document.getElementById(`cardHeader${i}`).innerText;

  //   console.log(`${cardTitle} ${cardHeader}`);

  for (let i = 0; i < articleDropdowon.length; i++) {
    if (articleDropdowon[i].text == `${cardTitle} ${cardHeader}`) {
      articleDropdowon[i].selected = true;
    }
  }
}
