import renderToDOM from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const viewItem = (array) => {
  clearDom();
  let domString = '';
  array.forEach((option) => {
    domString += `
        <div class="card" style="width: 18rem;">
         <div class="card-body">
            <h5 class="itemName">${option.itemName}</h5>
            <p class="card-text">${option.price}</p>
            <a id="update-order-btn--${option.firebaseKey}" href="#" class="card-link">Edit</a>
            <a id="delete-order-btn--${option.firebaseKey}" href="#" class="card-link">Delete</a>
          </div>
        </div>
        `;
  });
  renderToDOM('#card-container', domString);
};

export default viewItem;
