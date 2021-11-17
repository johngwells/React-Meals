import mealsImage from "../../assets/meals.jpeg";
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['header-image']}>
        <img alt="A table full of food" src={mealsImage} />
      </div>
    </>
  );
};

export default Header;
