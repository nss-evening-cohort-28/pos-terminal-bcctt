import firebase from 'firebase';
import client from '../utils/client';

const endpoint = client.databaseURL;

// GET ORDER ITEMS
const getOrderItems = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orderItemsJoin.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// CREATE ORDER ITEMS
const createOrderItems = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orderItemsJoin.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// UPDATE ORDER ITEMS
const updateOrderItems = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orderItemsJoin/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// GET SINGLE ITEM
const getSingleItem = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/items/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data)) // will get a single object
    .catch(reject);
});

export {
  getOrderItems, createOrderItems, updateOrderItems, getSingleItem
};
