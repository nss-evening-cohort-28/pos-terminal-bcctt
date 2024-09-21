import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const paymentTypeForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}" class="mb-4">
      <div class="form-group">
        <label for="paymentType">Payment Type</label>
        <select class="form-control" id="paymentType" value="${obj.paymentType || ''}" required>
          <option>cash</option>
          <option>check</option>
          <option>debit</option>
          <option>credit</option>
          <option>mobile-payment</option>
        </select>
      </div>
      <div class="form-group">
        <label for="Tip">Tip Amount</label>
        <input type="text" class="form-control" id="tip-amount" placeholder="$">
      </div> 
        <input type="submit" value="Close Order" id="close-order" class="btn btn-primary">
      </input>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default paymentTypeForm;
