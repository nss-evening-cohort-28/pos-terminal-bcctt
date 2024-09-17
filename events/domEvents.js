import { getOrders, deleteOrder } from '../api/orderData';
import viewOrders from '../pages/viewOrders';
import { getItems } from '../api/itemData';
import orderDetails from '../pages/orderDetails';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // Click for delete order
    if (e.target.id.includes('delete-order')) {
      if (window.customConfirm('Want to delete?')) {
        console.warn('CLICKED DELETE ORDER', e.target.id);
        const [, firebaseKey] = (e.target.id.split('--'));

        deleteOrder(firebaseKey).then(() => {
          getOrders().then(viewOrders);
        });
      }
    }

    // Click for delete item
    if (e.target.id.includes('delete-item')) {
      if (window.customConfirm('Want to delete?')) {
        console.warn('CLICKED DELETE ITEM', e.target.id);
        const [, firebaseKey] = (e.target.id.split('--'));

        deleteOrder(firebaseKey).then(() => {
          getItems().then(orderDetails);
        });
      }
    }
  });
};

export default domEvents;
