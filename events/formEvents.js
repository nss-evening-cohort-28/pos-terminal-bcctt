import { createOrder, getOrders, updateOrder } from '../api/orderData';
import viewOrders from '../pages/viewOrders';

const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // FORM CLICK EVENT FOR CREATING AN ORDER
    if (e.target.dispatchEvent.includes('submit-order')) {
      const payload = {
        email: document.querySelector('#orderEmail').value,
        orderName: document.querySelector('#orderName').value,
        pnoneNum: document.querySelector('#phoneNum').value,
        status: document.querySelector('#orderStatus').checked,
        type: document.querySelector('#orderType').checked,
        uid,
      };

      createOrder(payload.then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateOrder(patchPayload).then(() => {
          getOrders(uid).then(viewOrders);
        });
      }));
    }
  });
};

export default formEvents;
