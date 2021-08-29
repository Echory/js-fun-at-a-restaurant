
function createRestaurant(restaurantName) {
  var restaurant = {
    name: restaurantName,
    menus: {
      breakfast:[],
      lunch:[],
      dinner:[]
    }
  }
  return restaurant
}



function addMenuItem(restaurant, item) {
  if(!restaurant.menus[item.type].includes(item)){
    restaurant.menus[item.type].push(item);
  }

}


function removeMenuItem(restaurant, itemToRemove, menu) {
  var indexToRemove = restaurant.menus[menu].findIndex(i => i.name === itemToRemove)
  if(indexToRemove === -1){
    return `Sorry, we don't sell ${itemToRemove}, try adding a new recipe!`
  } else {
  restaurant.menus[menu].splice(indexToRemove, 1);
  return `No one is eating our ${itemToRemove} - it has been removed from the ${menu} menu!`
}
}



module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
