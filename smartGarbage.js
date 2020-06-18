const smartGarbage = function (trash, bins) {
  if (trash === 'waste' || trash === 'recycling' || trash === 'compost'){
    bins[`${trash}`] ++;
  }
  return bins;
};

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));