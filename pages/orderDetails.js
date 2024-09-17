import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const orderDetails = (array) => {
  clearDom();
  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="itemCard moreSpecific">
        <div class="card-body">
            <h5 class="card-title">${item.itemName}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">${item.price}</h6>
            <a href="#" class="card-link">Edit Item</a>
            <a href="#" class="card-link">Delete Item</a>
        </div>
    </div>
    `;
  });
  renderToDOM('#itemCard-container', domString);
};

export default orderDetails;
