import { createOrder, getOrders, updateOrder } from '../api/orderData';
import viewOrders from '../pages/viewOrders';

const formEvents = (uid) => {
  document.querySelector('#app').addEventListener('submit', (e) => {
    e.preventDefault();
    // FORM CLICK EVENT FOR CREATING AN ORDER
    if (e.target.id.includes('submit-order')) {
      console.warn('SUBMIT ORDER BUTTON CLICKED');
      const payload = {
        email: document.querySelector('#orderEmail').value,
        orderName: document.querySelector('#orderName').value,
        phoneNum: document.querySelector('#phoneNum').value,
        status: document.querySelector('#orderStatus').checked,
        type: document.querySelector('#orderType').checked,
        uid
      };
      console.warn(payload);
      createOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateOrder(patchPayload).then(() => {
          getOrders(uid).then(viewOrders);
        });
      });
    }

    if (e.target.id.includes('update-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        email: document.querySelector('#orderEmail').value,
        orderName: document.querySelector('#orderName').value,
        phoneNum: document.querySelector('#phoneNum').value,
        status: document.querySelector('#orderStatus').checked,
        type: document.querySelector('#orderType').checked,
        firebaseKey,
      };
      updateOrder(payload).then(() => {
        getOrders(uid).then(viewOrders);
      });
    }
  });
};

export default formEvents;
