
/* Die Satzbau-Maschine | Arrays */

/**
 *   THEORIE
 * 
 */



/**
 *   PRAXIS
 * 
 */


// /*** 01. Funktionalität mit Einzelparametern */
// // --> "Ich bin Max Mütze."
// // output(getSentence("Ich","bin","Max","Mütze"));
// output(getSentence("Ich","bin","die","coole","Maxine","Mützerich"));
// function getSentence(word1,word2,word3,word4,word5,word6) {
//     const GAP = " ";
//     const PUNCT = ".";
//     let str =   word1 + GAP +
//                 word2 + GAP +
//                 word3 + GAP +
//                 word4 + GAP +
//                 word5 + GAP +
//                 word6 + 
//                 PUNCT;

//     return str;
// }




// // Modul: Ausgabe in Konsole : Test
// // output("hi"); 
// function output(outputStr) {
//     console.log(outputStr);
// }
/*** 01a. Funktionalität mit Array 1 */
// Kritik | Überlegung
// word1,word2, .... wordN :: Semantische Struktur
// arr[0],arr[1] ... arr[n-1] :: Numerische Struktur (0,1,2,3 ... n)
// --> Transformation semantisches Problem --> numerisches Problem
// output(getSentenceArr(["Ich","bin","die","coole","Maxine","Mützerich"]));
// function getSentenceArr(arr) {
//     const GAP = " ";
//     const PUNCT = ".";
//     let str =   arr[0] + GAP +
//                 arr[1] + GAP +
//                 arr[2] + GAP +
//                 arr[3] + GAP +
//                 arr[4] + GAP +
//                 arr[5] + 
//                 PUNCT;
 
//     return str;
// }
// V2
output(getSentence("Ich", "bin", "die", "coole", "Maxine","Mützerich" ));

function getSentence(...words) {
    const GAP = " ";
    const PUNCT = ".";
    return words.join(GAP) + PUNCT;
}

// Modul: Ausgabe in Konsole : Test
// output("hi");
function output(outputStr) {
    console.log(outputStr);
}

