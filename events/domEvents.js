import { getOrders, deleteOrder } from '../api/orderData';
import viewOrders from '../pages/viewOrders';
import { getItems } from '../api/itemData';
import orderDetails from '../pages/orderDetails';
import clearDom from '../utils/clearDom';

const domEvents = () => {
  document.querySelector('#app').addEventListener('click', (e) => {
    // Click event for deleting a tech
    if (e.target.id.includes('delete-order-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteOrder(firebaseKey).then(() => {
          clearDom();
          getOrders().then(viewOrders);
        });
      }
    }

    // Click event for deleting an item
    if (e.target.id.includes('delete-item-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteItem(firebaseKey).then(() => {
          orderDetails().then(getItems);
        });
      }
    }
  });
};

export default domEvents;
