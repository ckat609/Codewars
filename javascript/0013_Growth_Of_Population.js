function growthOfPopulation(
  startPopulation,
  percentIncrease,
  immigrantsPerYear,
  finalPopulation
) {
  let population = startPopulation;
  let yearsToReachFinalPopulation = 0;
  percentIncrease = percentIncrease / 100;

  while (population < finalPopulation) {
    population += population * percentIncrease + immigrantsPerYear;
    yearsToReachFinalPopulation++;
  }

  return yearsToReachFinalPopulation;
}

console.log(growthOfPopulation(1500, 5, 100, 5000));
console.log(growthOfPopulation(1500000, 2.5, 10000, 2000000));
