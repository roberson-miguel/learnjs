var header = document.querySelector('header');
var section = document.querySelector('section');

var requestURL = 'reserva.json';
request.open('GET', requestURL);
request.responseType = 'text';
request.send();

request.onload = function() {
  var reservasText = request.response; // get the string from the response
  var reservas = JSON.parse(reservasText); // convert it to an object
  typeClient(reservas);
  dates(reservas);
}

function populateHeader(jsonObj) {
  var myH1 = document.createElement('h1');
  myH1.textContent = jsonObj['Reservas Hoteis TW'];
  header.appendChild(myH1);

  var myPara = document.createElement('p');
  myPara.textContent = 'Tipo de Reserva e Datas';
  header.appendChild(myPara);
}

function showReservas(jsonObj) {
  var type_client = jsonObj['type_client'];
      
  for (var i = 0; i < dates.length; i++) {
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myList = document.createElement('ul');

    myH2.textContent = heroes[i].name;
    myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
    myPara2.textContent = 'Age: ' + heroes[i].age;
    myPara3.textContent = 'Superpowers:';
        
    var superPowers = heroes[i].powers;
    for (var j = 0; j < superPowers.length; j++) {
      var listItem = document.createElement('li');
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}