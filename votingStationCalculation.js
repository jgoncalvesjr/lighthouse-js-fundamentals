const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre'],
  ['Moose Mountain Community Centre', 45, 'hospital'],
  ['Kid Beaver Middle School', 115, 'school'],
  ['Chong Fruit Market', 21, 'grocery store'],
  ['Codeville YMCA', 19, 'community centre'],
  ['Allena Montessori Preschool', 18, 'school']
];

const chooseStations = function (stations) {
  const goodStations = []; // Array to store stations that obeys requirements
  for (const station of stations) {
    const capacity = station[1]; // Requirement 1: Capacity 20 or over - index 1 of stations
    const type = station[2]; // Requirement 2: school or community centre - index 2 of stations
    if ((capacity >= 20) && (type === 'school' || type === 'community centre')) {
      // conditional to verify both requirements through stations
      goodStations.push(station[0]); // Pushes name from each station to goodStations list
    } 
  }
  return goodStations; // Stores results
};

console.log(chooseStations(stations)); // Prints required analysis
