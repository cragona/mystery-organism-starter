// Returns a random DNA base
const returnRandBase = () => 
{
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => 
{
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (number, dnaArray) =>
{
  return {
    specimenNum: number,
    dna: dnaArray,
    mutate () {
      let base = dnaArray[Math.random * dnaArray.length]
      let randomBase = returnRandBase()
      while(randomBase === base)
      {
        randomBase = returnRandBase()
      }
      return dna
    },
    compareDNA (pAequor) {
      let identicalInPlaceCount = 0;
      let index = 0
      for(const base of pAequor.dna)
      {
        if (this.dna[index] === base[index])
        {
          identicalInPlaceCount++
        }
      }
      console.log(`specimen #1 and specimen #2 have ${(identicalInPlaceCount/pAequor.dna) * 100}% DNA in common`)
    },
    willLikelySurvive () {
      let cgCount = 0
      for (const base of this.dna)
      {
        if (base === 'C' || base === 'G')
        {
          cgCount++
        }
      }
      return ((cgCount/this.dna.length) * 100) >= 60    
    }
  }
}

function createSurvivalDnas()
{
  const survivalArray = []
  let counter = 0

  while (survivalArray.length < 30)
  {
    const createdDna = pAequorFactory(counter, mockUpStrand())
    if (createdDna.willLikelySurvive())
    {
      survivalArray.push(createdDna)
    }
    counter++
  }
  return survivalArray
}

const survivors = createSurvivalDnas()

survivors.forEach(element => {
  console.log(element.specimenNum)
  console.log(element.dna)
});


