let idNumbers = [291, 414, 503, 599, 796, 890];

// Code your selectRandomEntry function here:
function randomEntry() {
  return idNumbers[Math.floor(Math.random() * idNumbers.length)];
}


// Code your buildCrewArray function here:
function buildCrewArray() {
  let crewArray = [];
  while (crewArray.length < 3) {
    let newSelection = randomEntry();
    while (crewArray.includes(newSelection)) {
      newSelection = randomEntry();
    };
    crewArray.push(newSelection);
  }
  return crewArray;
}

// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

const crewIDs = buildCrewArray();
// Code your template literal and console.log statements:
function getCrewList(idList, astronautList) {
  let crew = [];
  for (let id of idList) {
    for (let animal of astronautList) {
      if (id === animal.astronautID) {
        console.log(`Pushing id ${id} which matches ${animal.name}.`)
        crew.push(animal);
      }
    }
  }
  return crew;
}

console.log(getCrewList(crewIDs, animals));