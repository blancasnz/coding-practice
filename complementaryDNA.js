/*
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells 
and carries the "instructions" for the development and functioning of living 
organisms.

In DNA strings, symbols "A" and "T" are complements of each other, 
as "C" and "G". You have function with one side of the DNA (string, except for Haskell); 
you need to get the other complementary side. DNA strand is never empty or there is no 
DNA at all (again, except for Haskell).

DNAStrand ("ATTGC") # return "TAACG"

DNAStrand ("GTAT") # return "CATA"
*/


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