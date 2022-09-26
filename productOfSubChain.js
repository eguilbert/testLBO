// v1
// Nous avons une chaîne de nombres, par exemple : "12345654355".
// Calcule le plus grand produit de toutes les sous-chaînes adjacentes possibles de longueur "n".

// Exemples
// Pour la chaîne "1127839561" avec "n=5", le plus grand produit sera "7560" (7 * 8 * 3 * 9 * 5).
// Pour la même chaîne avec "n=3", le plus grand produit sera "270" (9 * 5 * 6).

function maxProduct(str, n) {
  let maxProduct = 0;

  // Looping through string to get all combinations

  for (let i = 0; i < str.length; i++) {
    //Conversion of string to subtring then array (to use reduce)
    const arrNum = str.slice(i, n + i).split("");
    const result = arrNum.reduce((prev, next) => {
      return prev * next;
    });

    // Getting the best product
    maxProduct = result > maxProduct ? result : maxProduct;
  }
  console.log(`Max product obtained: ${maxProduct}`);
  return maxProduct;
}
maxProduct("12345654355", 3);
maxProduct("12345654355", 5);
maxProduct("1127839561", 5);
maxProduct("1127839561", 3);
maxProduct("1127839561", 5);
maxProduct("987112", 1);
maxProduct("987112", 3);
maxProduct("987987112", 3);
