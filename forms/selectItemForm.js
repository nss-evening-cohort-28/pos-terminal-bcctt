import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
import selectItem from './selectItem';

const selectItemForm = (obj = {}) => {
  clearDom();
  const domString = `
<form id="${obj.firebaseKey ? `update-item-selection--${obj.firebaseKey}` : 'submit-item-selection'}" class="mb-4">
      <div class="form-check">
        <label for="title">Item Price</label>
        <input type="text" class="form-control" id="itemPrice" placeholder="Item Price" value="${obj.price || ''}" required>
      </div>
      <input type="submit" id="submit-item-selection" class="btn btn-primary">
      </input>
    </form>`;
  renderToDOM('#form-container', domString);
  selectItem(`${obj.itemName || ''}`);
};

export default selectItemForm;
