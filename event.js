class Reason {
  constructor(whichReason, howChance) {
    this.reason = whichReason;
    this.chanse = howChance;
  }
}

let heartDisease = new Reason("Heart disease", 21.9);
let HIV_AIDS = new Reason("HIV AIDS", 3.5);
let diarrheal_diseases = new Reason("Diarrheal diseases", 3.7);
let traffic_accidents = new Reason("Traffic accidents", 2.2);

let causesOfDeath = [
  heartDisease,
  HIV_AIDS,
  diarrheal_diseases,
  traffic_accidents,
];

let bigListOfDeth = "";
let newSortNumb = "";
let newSortABC = "";
for (let i = 0; i < causesOfDeath.length; i++) {
  bigListOfDeth += `<div><span>${causesOfDeath[i].reason}</span><span>${causesOfDeath[i].chanse}%</span>
      </div>`;
}

document.getElementById("listDeth").innerHTML = bigListOfDeth;

function sortNumb() {
  document.getElementById("died").style.background = "yellow";
  newSortNumb = "";
  causesOfDeath.sort((a, b) => {
    return b.chanse - a.chanse;
  });

  for (let i = 0; i < causesOfDeath.length; i++) {
    newSortNumb += `<div><span>${causesOfDeath[i].reason}</span><span>${causesOfDeath[i].chanse}%</span>
        </div>`;
  }
  document.getElementById("listDeth").innerHTML = newSortNumb;
}

function sortName() {
  document.getElementById("cause").style.background = "greenyellow";
  newSortABC = "";

  causesOfDeath.sort(function (a, b) {
    var nameA = a.reason.toLowerCase(),
      nameB = b.reason.toLowerCase();
    if (nameA < nameB)
      //сортируем строки по возрастанию
      return -1;
    if (nameA > nameB) return 1;
    return 0; // Никакой сортировки
  });
  for (let i = 0; i < causesOfDeath.length; i++) {
    newSortABC += `<div><span>${causesOfDeath[i].reason}</span><span>${causesOfDeath[i].chanse}%</span>
        </div>`;
  }
  document.getElementById("listDeth").innerHTML = newSortABC;
}

// Создать HTML-страницу с блоком текста в рамочке.
//  Реализовать возможность изменять размер блока, если зажать мышку в правом нижнем углу и тянуть ее дальше.
