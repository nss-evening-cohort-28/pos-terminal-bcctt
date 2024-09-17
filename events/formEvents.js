import { createOrder, getOrders, updateOrder } from '../api/orderData';
import viewOrders from '../pages/viewOrders';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // FORM CLICK EVENT FOR CREATING AN ORDER
    if (e.target.id.includes('submit-order')) {
      console.warn('SUBMIT ORDER BUTTON CLICKED');
      const payload = {
        email: document.querySelector('#orderEmail').value,
        orderName: document.querySelector('#orderName').value,
        pnoneNum: document.querySelector('#phoneNum').value,
        status: document.querySelector('#orderStatus').checked,
        type: document.querySelector('#orderType').checked,
        uid: user.uid
      };

      createOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateOrder(patchPayload).then(() => {
          getOrders(user.uid).then(viewOrders);
        });
      });
    }
  });
};

export default formEvents;
