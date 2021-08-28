
function takeOrder(order, arr) {
  if(arr.length < 3){
  arr.push(order);}
}


function refundOrder(orderToRefund, arr) {
  var index = arr.findIndex(i => i.orderNumber === orderToRefund)
 arr.splice(index, 1);
}


function listItems(arr) {
  var names = [];
  for(var i = 0; i < arr.length; i++){
    names.push(arr[i].item);
  }
  return names.join(", ");
  }


function searchOrder(arr, name) {
  for(var i = 0; i < arr.length; i++ ) {
    if(arr[i].item === name){
      return true;
    }
  }
  return false;
}






module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
