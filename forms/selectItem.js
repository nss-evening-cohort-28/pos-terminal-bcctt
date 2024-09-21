import { getItems } from '../api/itemData';
import renderToDOM from '../utils/renderToDom';

const selectItem = (itemId) => {
  let domString = `<label for="category">Select An Order Item</label>
    <select class="form-control" id="selectItem" required>
    <option value="">Select An Order Item</option>`;

  getItems().then((items) => {
    items.forEach((item) => {
      domString += `
        <option value="${item.firebaseKey}"
        ${itemId === item.firebaseKey ? 'selected' : ''}>
        ${item.itemName}</option>`;
      console.warn();
    });

    domString += '<select>';
    renderToDOM('#form-container', domString);
  });
};

export default selectItem;
