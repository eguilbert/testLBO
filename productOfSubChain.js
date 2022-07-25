// var runningSum = function (nums) {
//   let acc = 0;
//   const result = nums.reduce((arr, curr, index) => {
//     console.log(curr, index, nums[index - 1]);
//     arr[index] = curr + acc;
//     acc += curr;
//     return arr;
//   }, []);
//   return result;
// };
// console.log(runningSum([1, 2, 3, 4]));

// Nous avons une chaîne de nombres, par exemple : "12345654355".
// Calcule le plus grand produit de toutes les sous-chaînes adjacentes possibles de longueur "n".

// Exemples
// Pour la chaîne "1127839561" avec "n=5", le plus grand produit sera "7560" (7 * 8 * 3 * 9 * 5).
// Pour la même chaîne avec "n=3", le plus grand produit sera "270" (9 * 5 * 6).

const str = "12345654355";

const arrNum = str.split("");

function maxProduct(str, n) {
  let product = 1;
  let maxProduct = 0;

  for (let i = 0; i < str.length; i++) {
    // Init
    // product *= str[i];
    // console.log(product, str[i]);
    const arrNum = str.slice(i, n + i).split("");
    const result = arrNum.reduce((prev, next) => {
      return prev * next;
    });
    maxProduct = result > maxProduct ? result : maxProduct;
    console.log(arrNum, result);
    console.log("Products", maxProduct);
  }
  console.log("product", product);
  return maxProduct;
}
maxProduct("12345654355", 3);
maxProduct("12345654355", 3);
// 1.sur un nombre n de longueur de chaine, trouver la plus grande suite de nombre adjacents

// 2. calculer le produit
// reduce
// arrNum.reduce((prev) => {});
// 3. Faire des tests
