import classes from './Card.module.css';

const Card = (props) => {
  console.log(props.value);
  return (
    <div className={`${classes.container} ${props.value}`}>
      {props.children}
    </div>
  );
};

export default Card;
