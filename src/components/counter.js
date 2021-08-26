import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

const Counter = ({id,value,name,onIncrement,onDecrement,onDelete}) => {

  const formValue = () => {
    return   value ?   value : 'Zero';
  };

  const getBadgeClasses = () => {
    let classes = 'badge ms-2 me-2 bg-';
    classes +=   value ? 'primary' : 'danger';
    return classes;
  };



  return (
    
    <div className="mb-2">
      <h4>{name}</h4>
      <span className={getBadgeClasses()}>{formValue()}</span>
      <button
        className="btn btn-secondary btn-sm me-2"
        onClick={() => onIncrement(id)}
      >
        Increment
      </button>
      <button
        className="btn btn-secondary btn-sm"
        onClick={() => onDecrement(id)}
        disabled={!value}
      >
        Decrement
      </button>
      <button
      className='btn btn-danger btn-sm m-2'
      onClick ={()=> onDelete(id)}
      >
        Delete</button>
    </div>
  );
};

export default Counter;