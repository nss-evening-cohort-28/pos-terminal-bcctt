import logoutButton from '../components/logoutButton';
import domBuilder from '../components/domBuilder';

const startApp = () => {
  navBar(); //Adds the Navigation Bar
  logoutButton(); // ADD LOGOUT BUTTON COMPONENT
  domBuilder();
};

export default startApp;
