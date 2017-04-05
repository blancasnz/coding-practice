function DNAStrand(dna){
var dna1 = dna.toUpperCase();
var match = "";
  for(var i = 0; i < dna.length; i++){
    switch (dna1[i]) {
    case 'A':
     match += 'T'
    break;
    case 'T' :
     match += 'A'
    break;
    case 'G':
     match += 'C'
    break;
    case 'C':
     match += 'G'
    break;
    }
  }
  return match;
}