import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const createItemForm = (obj = {}) => {
  clearDom();
  const domString = `
<form id="${obj.firebaseKey ? `update-item--${obj.firebaseKey}` : 'submit-item'}" class="mb-4">
      <div class="form-group">
        <label for="title">Item Name</label>
        <input type="text" class="form-control" id="itemName" placeholder="Item Name" value="${obj.itemName || ''}" required>
      </div>
      <div class="form-check">
        <label for="title">Item Price</label>
        <input type="text" class="form-control" id="itemPrice" placeholder="Item Price" value="${obj.price || ''}" required>
      </div>
      <input type="submit" id="submit-item" class="btn btn-primary">
      </input>
    </form>`;
  renderToDOM('#form-container', domString);
};

export default createItemForm;
