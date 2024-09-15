import logoutButton from '../components/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navigationBar';

const startApp = () => {
  domBuilder(); // LOAD HTML SKELETON
  navBar(); // Adds the Navigation Bar
  logoutButton(); // ADD LOGOUT BUTTON COMPONENT
};

export default startApp;
