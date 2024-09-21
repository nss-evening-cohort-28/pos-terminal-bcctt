import renderToDOM from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const viewOrdersDetail = (obj) => {
  clearDom();

  const domString = `
        <div class="card" style="width: 18rem;">
         <div class="card-body">
            <h5 class="card-title">${obj.orderName}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary order-status">${obj.status === true ? 'Open' : 'Closed'}</h6>
            <p class="card-text">${obj.phoneNum}</p>
            <p class="card-text">${obj.email}</p>
            <p class="card-text">${obj.type === true ? 'Call in Order' : 'Walk-in Order'}</p>
            <a id="orderDetails--${obj.firebaseKey}" href="#" class="card-link">Details</a>
            <a id="update-order-btn--${obj.firebaseKey}" href="#" class="card-link">Edit</a>
            <a id="delete-order-btn--${obj.firebaseKey}" href="#" class="card-link">Delete</a>
          </div>
        </div>
        `;
  renderToDOM('#card-container', domString);
};

export default viewOrdersDetail;
