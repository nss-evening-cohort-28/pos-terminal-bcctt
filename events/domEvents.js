// import createOrderForm from '../forms/createOrderform';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // SERVE ADD ORDER FORM
    if (e.target.id.includes('#createOrder')) {
      console.warn('CREATE BUTTON CLICKED');
      // createOrderForm();
    }
  });
};

export default domEvents;
