import { getOrders, deleteOrder, getSingleOrder } from '../api/orderData';
import viewOrders from '../pages/viewOrders';
import { getItems, deleteItem } from '../api/itemData';
import orderDetails from '../pages/orderDetails';
import clearDom from '../utils/clearDom';
import createOrderForm from '../forms/createOrderform';
import selectItemForm from '../forms/selectItemForm';
import createItemForm from '../forms/createItemForm';

const domEvents = (user) => {
  document.querySelector('#app').addEventListener('click', (e) => {
    // Click for delete order
    if (e.target.id.includes('delete-order')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE ORDER', e.target.id);
        const [, firebaseKey] = (e.target.id.split('--'));

        deleteOrder(firebaseKey).then(() => {
          clearDom();
          getOrders(user.uid).then(viewOrders);
        });
      }
    }

    // Click for delete item
    if (e.target.id.includes('delete-item')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE ITEM', e.target.id);
        const [, firebaseKey] = (e.target.id.split('--'));

        deleteItem(firebaseKey).then(() => {
          orderDetails().then(getItems);
        });
      }
    }

    // SERVE ADD ORDER FORM
    if (e.target.id.includes('createOrder' || 'createOrder')) {
      createOrderForm();
    }

    // SERVE ADD ITEM FORM
    if (e.target.id.includes('addItemBtn')) {
      selectItemForm();
    }

    // CLICK EVENT EDITING/UPDATING AN ORDER
    if (e.target.id.includes('update-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn('EDIT BOOK', e.target.id);

      getSingleOrder(firebaseKey).then((orderObj) => createOrderForm(orderObj));
    }

    if (e.target.id.includes('createItemNav')) {
      createItemForm();
    }
  });
};

export default domEvents;
