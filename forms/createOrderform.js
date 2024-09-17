import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const createOrderForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}" class"mb-4">
    <div class="mb-3">
      <input type="email" class="form-control" id="orderEmail" placeholder="email@email.com" value="${obj.email || ''}" required></div>
    <div class="mb-3">
      <input type="text" class="form-control" id="orderName" rows="3" placeholder="Order Name" value="${obj.orderName || ''}"></input>
    </div>
    <div class="mb-3">
      <input type="tel" class="form-control" id="phoneNum" rows="3" placeholder="888-888-8888" value="${obj.phoneNum || ''}"></input>
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="orderStatus" ${obj.status ? 'checked' : ''}>
      <label class="form-check-label" for="orderStatus">Open Order?</label>
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="orderType" ${obj.type ? 'checked' : ''}>
      <label class="form-check-label" for="orderType">In Person Order?</label>
    </div>
    <button type="submit" class="btn btn-primary mb=3">Submit Order</button>    
  </form>
  `;
  renderToDOM('#form-container', domString);
};

export default createOrderForm;
