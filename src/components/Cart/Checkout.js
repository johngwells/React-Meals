import { useRef, useState } from "react";

import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim() !== 5;

const Checkout = (props) => {
  const [formInputValid, setFormInputValid] = useState({
    name: true,
    street: true,
    city: true,
    postal: true
  });

  const nameInputref = useRef();
  const streetInputref = useRef();
  const cityInputref = useRef();
  const postalInputref = useRef();

  const confirmHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputref.current.value;
    const enteredStreet = streetInputref.current.value;
    const enteredCity = cityInputref.current.value;
    const enteredPostal = postalInputref.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalIsValid = isFiveChars(enteredPostal);

    setFormInputValid({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postal: enteredPostalIsValid
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalIsValid;

    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postal: enteredPostal
    });
  };

  const nameControlClass = `${classes.control} ${
    formInputValid.name ? "" : classes.invalid
  }`;

  const streetControlClass = `${classes.control} ${
    formInputValid.street ? "" : classes.invalid
  }`;

  const cityControlClass = `${classes.control} ${
    formInputValid.city ? "" : classes.invalid
  }`;

  const postalControlClass = `${classes.control} ${
    formInputValid.postal ? "" : classes.invalid
  }`;

  return (
    <form>
      <div className={nameControlClass}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputref} />
        {!formInputValid.name && <p>Please enter your name</p>}
      </div>
      <div className={streetControlClass}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputref} />
        {!formInputValid.street && <p>Please enter a valid street</p>}
      </div>
      <div className={cityControlClass}>
        <label htmlFor="postal">City</label>
        <input type="text" id="city" ref={cityInputref} />
        {!formInputValid.city && <p>Please enter a valid city</p>}
      </div>
      <div className={postalControlClass}>
        <label htmlFor="postal">Postal</label>
        <input type="text" id="postal" ref={postalInputref} />
        {!formInputValid.postal && (
          <p>Please enter your postal code (5 digits)</p>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel Order
        </button>
        <button onClick={confirmHandler}>Confirm Order</button>
      </div>
    </form>
  );
};

export default Checkout;
