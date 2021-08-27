
function takeOrder(order, arr) {
  if(arr.length < 3){
  arr.push(order);}
}


function refundOrder(orderToRefund, arr) {
  var index = arr.findIndex(i => i.orderNumber === orderToRefund)
 arr.splice(index, 1);
}


function listItems() {

}




module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  // searchOrder
}
