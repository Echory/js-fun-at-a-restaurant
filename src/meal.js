function nameMenuItem(name) {
  return `Delicious ${name}`;
}


function createMenuItem(name, price, type){
  return {name, price, type}
}


function addIngredients(ingredient, arr){
  if(!arr.includes(ingredient)){
    arr.push(ingredient);
  }

}


function formatPrice(price) {
return `$${price}`;
}


function decreasePrice(price) {
var tenPercent = 10 / 100 * price
return price - tenPercent
}

function createRecipe(title, ingredients, type) {
return {title, ingredients, type}
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
