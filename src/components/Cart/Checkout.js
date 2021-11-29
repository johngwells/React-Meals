import classes from './Checkout.module.css';

const Checkout = props => {
  const confirmHandler = e => {
    e.preventDefault();
  }

  return (
    <form>
      <div className={classes.control}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' />
      </div>
      <div className={classes.control}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' />
      </div>
      <div className={classes.control}>
        <label htmlFor='postal'>City</label>
        <input type='text' id='city' />
      </div>
      <div className={classes.control}>
        <label htmlFor='postal'>Postal</label>
        <input type='text' id='postal' />
      </div>
      <button type="button" onClick={props.onCancel}>Cancel Order</button>
      <button>Confirm Order</button>
    </form>
  )
}

export default Checkout;
