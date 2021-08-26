import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

const Counter = (props) => {

  const formValue = () => {
    return props.value ? props.value : 'Zero';
  };

  const getBadgeClasses = () => {
    let classes = 'badge ms-2 me-2 bg-';
    classes += props.value ? 'primary' : 'danger';
    return classes;
  };



  return (
    
    <div className="mb-2">
      <h4>{props.name}</h4>
      <span className={getBadgeClasses()}>{formValue()}</span>
      <button
        className="btn btn-secondary btn-sm me-2"
        onClick={() => props.onIncrement(props.id)}
      >
        Increment
      </button>
      <button
        className="btn btn-secondary btn-sm"
        onClick={() => props.onDecrement(props.id)}
        
      >
        Decrement
      </button>
      <button
      className='btn btn-danger btn-sm m-2'
      onClick ={()=>props.onDelete(props.id)}
      >
        Delete</button>
    </div>
  );
};

export default Counter;