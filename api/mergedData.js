// import orderDetails from "../pages/orderDetails";

// const getOrderDetails = (firebaseKey) => new Promise((resolve, reject) => {
//   // GET Single Order
//     orderDetails(firebaseKey).then((orderObject) => { // Returns single order
//       getSingleItem(orderObject.item_id) // We nest this promise so that we can use the order object
//         .then((itemObject) => resolve({ ...orderObject, itemObject }));
//     }).catch(reject);
//   // GET Item
//   // Create an object that has book data and an object named authorObject
//   });

// const deleteItemOrderRelationship = (firebaseKey) => new Promise((resolve, reject) => {
//   getOrderItem(firebaseKey).then((orderItemArray) => {
//     const deleteOrderPromises = orderItemsArray.map((item) => deleteBookPromises(book.firebaseKey));

//     Promise.all(deleteBookPromises).then(() => {
//       deleteSingleAuthor(firebaseKey).then(resolve);
//     });
//   }).catch(reject);
// });

// export default { deleteItem };
