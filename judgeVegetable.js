const judgeVegetable = function (vegetables, metric) {
  let best = vegetables[0];
  for (let i = 1; i < vegetables.length; i++) {
    let currentBest = vegetables[i];
    if (currentBest[metric] > best[metric]) {
      best = currentBest;
    } 
  }
  return best.submitter;
};

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const metric = 'redness';

console.log(judgeVegetable(vegetables, metric));