import firebase from 'firebase';
import { createOrder, getOrders, updateOrder } from '../api/orderData';
import viewOrders from '../pages/viewOrders';
import viewItem from '../pages/viewItem';
import clearDom from '../utils/clearDom';
import { createItem, getItems, updateItem } from '../api/itemData';

const formEvents = (user) => {
  document.querySelector('#app').addEventListener('submit', (e) => {
    e.preventDefault();
    // FORM CLICK EVENT FOR CREATING AN ORDER
    if (e.target.id.includes('submit-order')) {
      const payload = {
        email: document.querySelector('#orderEmail').value,
        orderName: document.querySelector('#orderName').value,
        phoneNum: document.querySelector('#phoneNum').value,
        status: document.querySelector('#orderStatus').checked,
        type: document.querySelector('#orderType').checked,
        uid: `${firebase.auth().currentUser.uid}`
      };

      createOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateOrder(patchPayload).then(() => {
          getOrders(user.uid).then(viewOrders);
        });
      });
    }

    // FORM EVENT FOR UPDATING AN ITEM
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
        getOrders().then(viewOrders);
        clearDom();
      });
    }

    // FORM CLICK EVENT FOR CREATING AN ITEM
    if (e.target.id.includes('submit-item')) {
      const payload = {
        itemName: document.querySelector('#itemName').value,
        price: document.querySelector('#itemPrice').value,
        uid: `${firebase.auth().currentUser.uid}`
      };

      createItem(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateItem(patchPayload).then(() => {
          getItems(user.uid).then(viewItem);
        });
      });
    }

    // FORM EVENT FOR CREATIG AN ORDER ITEM
    // if (e.target.id.includes('submit-item-selection')) {
    //   const payload = {

    //   }
    // }
  });
};

export default formEvents;
