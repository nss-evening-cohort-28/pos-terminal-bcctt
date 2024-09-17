import { getOrders } from '../api/orderData';
import viewOrders from '../pages/viewOrders';

const navigationEvents = () => {
  document.querySelector('#app').addEventListener('click', (e) => {
    if (e.target.id.includes('viewOrder')) {
      console.warn('clicked View Orders!');
      getOrders().then((data) => viewOrders(data));
    }
  });
};

export default navigationEvents;
