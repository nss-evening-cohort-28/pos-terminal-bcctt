// import { getItems } from '../api/itemData';
import getOrdersDetail from '../api/mergedData';
import { getOrders } from '../api/orderData';
import homeScreen from '../pages/homeSreen';
import viewOrdersDetail from '../pages/viewOrderDetail';
// import orderDetails from '../pages/orderDetails';
import viewOrders from '../pages/viewOrders';
import clearDom from '../utils/clearDom';
import greetLoggedInUser from '../utils/greeting';

const navigationEvents = (user) => {
  document.querySelector('#app').addEventListener('click', (e) => {
    if (e.target.id.includes('viewOrder' || 'viewOrdersNav')) {
      console.warn(user.uid);
      getOrders(user.uid).then((data) => viewOrders(data));
    }

    if (e.target.id.includes('orderDetails')) {
      console.warn('clicked order details!');
      const [, firebaseKey] = e.target.id.split('--');
      console.warn(firebaseKey);
      getOrdersDetail(firebaseKey).then(viewOrdersDetail);
      // getItems(user.uid).then((data) => orderDetails(data));
    }

    if (e.target.id.includes('homeLogo')) { // This allows the user to click the logo in the navbar to return to home screen
      console.warn('clicked home!');
      clearDom();
      greetLoggedInUser();
      homeScreen();
    }
  });
};

export default navigationEvents;
