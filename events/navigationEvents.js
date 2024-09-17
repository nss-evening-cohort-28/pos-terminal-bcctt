import { getOrders } from '../api/orderData';
import homeScreen from '../pages/homeSreen';
import viewOrders from '../pages/viewOrders';
import clearDom from '../utils/clearDom';
import greetLoggedInUser from '../utils/greeting';

const navigationEvents = () => {
  document.querySelector('#app').addEventListener('click', (e) => {
    if (e.target.id.includes('viewOrder')) {
      console.warn('clicked View Orders!');
      getOrders().then((data) => viewOrders(data));
    }

    if (e.target.id.includes('homeLogo')) {
      console.warn('clicked home!');
      clearDom();
      greetLoggedInUser();
      homeScreen();
    }
  });
};

export default navigationEvents;
