

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : 
*/
// Addition
function addition(a, b) {
	return a + b;
  }
  
  // Subtraktion
  function subtraktion(a, b) {
	return a - b;
  }
  
  // Multiplikation
  function multiplikation(a, b) {
	return a * b;
  }
  
  // Division
  output(division(4,2));
output(division(3,2));
output(division(3,-2));
output(division(0,2));
output(division(3,0))
  function division(a, b) {
	if (b !== 0) {
	  return a / b;
	} else {
	  return "Division durch Null ist nicht definiert";
	}
  }
  
 //v2
//  function division(a, b) {
// 	return b !== 0 ? a / b : "Division durch Null ist nicht definiert";
//   }
function rechner(a, b, operation) {
	switch (operation) {
	  case 'addition':
		return addition(a, b);
	  case 'subtraktion':
		return subtraktion(a, b);
	  case 'multiplikation':
		return multiplikation(a, b);
	  case 'division':
		return division(a, b);
	  default:
		return 'Ungültige Operation';
	}
  }
  
 
  






// module: output | test:
// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);
}
  