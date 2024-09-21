import { getSingleOrder } from './orderData';
import { getSingleItem } from './orderItemsData';

// GET DATA TO VIEW ORDER
const getOrdersDetail = (firebaseKey) => new Promise((resolve, reject) => {
  // GET SINGLE ORDER
  getSingleOrder(firebaseKey).then((orderObject) => {
    console.warn(orderObject.itemId);
    getSingleItem(orderObject.itemId)
      .then((itemObject) => resolve({ ...orderObject, itemObject }));
  }).catch(reject);
});

export default getOrdersDetail;
