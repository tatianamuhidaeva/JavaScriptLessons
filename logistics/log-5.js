// G -> C, C -> G, T -> A, A -> U.
//func("ACGTGGTCTTAA");
//результат =>>> "UGCACCAGAAUU"

function dnaToRna (dna) {
  let rna = "";
  dna.toUpperCase();
  for (let i = 0; i < dna.length; i++){
    switch (dna[i]){
      case "G": {rna += "C"; break;};
      case "C": {rna += "G"; break;};
      case "T": {rna += "A"; break;};
      case "A": {rna += "U"; break;};
      default: {rna += str[i]; break;}
    }
  }
  return rna;
}

console.log(dnaToRna("ACGTGGTCTTAA"));