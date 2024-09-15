import logoutButton from '../components/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navigationBar';

const startApp = () => {
  navBar(); // Adds the Navigation Bar
  logoutButton(); // ADD LOGOUT BUTTON COMPONENT
  domBuilder();
};

export default startApp;
