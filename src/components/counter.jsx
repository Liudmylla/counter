import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  //const [imageUrl, setImageUrl] = useState("https://picsum.photos/200");
  const tags = ["tag1", "tag2", "tag3"];

  const formCount = () => {
    return count === 0 ? "Null" : count;
  };

  const getBadgesClasses = () => {
    let classes = "badge m-2 bg-";
    classes += count === 0 ? "danger" : "primary";
    return classes;
  };

  const styles = {
    fontSize: "10px",
    fontWeight: "bold",
  };

  const renderTags = () => {
    if (tags.length === 0) return "Tags not found";
    return tags.map((tag) => <li key={tag}>{tag}</li>);
  };

  // const handleIncrement = (productId) => {
  const handleIncrement = () => {
    // console.log(productId);
    setCount(count + 1);
  };

  const handleDecrement = () => {
    count === 0 ? setCount(0) : setCount(count - 1);
  };

  return (
    // <React.Fragment>
    <>
      {/* <img src={imageUrl} alt="" /> */}
      {tags.length === 0 && "Tags not found"}
      {renderTags()}
      <span
        // style = {{ fontSize: "10px",fontWeight: "bold"}}
        style={styles}
        // className="badge bg-primary m-2"
        className={getBadgesClasses()}
      >
        {formCount()}
      </span>
      <button
        // onClick={() => handleIncrement({ id: 1 })}
        onClick={handleIncrement}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
      <button
        style={{ margin: "10px" }}
        onClick={handleDecrement}
        className="btn btn-secondary btn-sm"
      >
        Decrement
      </button>
    </>
    //</React.Fragment>
  );
};

export default Counter;
