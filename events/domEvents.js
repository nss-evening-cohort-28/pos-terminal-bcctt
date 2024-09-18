import { getOrders, deleteOrder } from '../api/orderData';
import viewOrders from '../pages/viewOrders';
import { getItems } from '../api/itemData';
import orderDetails from '../pages/orderDetails';

import createOrderForm from '../forms/createOrderform';

const domEvents = () => {
  document.querySelector('#app').addEventListener('click', (e) => {
    // Click for delete order
    if (e.target.id.includes('delete-order')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE ORDER', e.target.id);
        const [, firebaseKey] = (e.target.id.split('--'));

        deleteOrder(firebaseKey).then(() => {
          getOrders().then(viewOrders);
        });
      }
    }

    // Click for delete item
    if (e.target.id.includes('delete-item')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE ITEM', e.target.id);
        const [, firebaseKey] = (e.target.id.split('--'));

        deleteOrder(firebaseKey).then(() => {
          getItems().then(orderDetails);
        });
      }
    }

    // SERVE ADD ORDER FORM
    if (e.target.id.includes('createOrder' || 'createOrder')) {
      console.warn('CREATE BUTTON CLICKED');
      createOrderForm();
    }
  });
};

export default domEvents;
