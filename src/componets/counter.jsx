import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  // const tags = ['tag1', 'tag2', 'tag3'];
  const tags = [];

  const renderTags = () => {
    if (!tags.length) return 'Tags not found';
    return tags.map((tag) => <li key={tag}>{tag}</li>);
  };

  const formCount = () => {
    return count ? count : 'Zero';
  };

  const getBadgeClasses = () => {
    let classes = 'badge ms-2 me-2 bg-';
    classes += count ? 'primary' : 'danger';
    return classes;
  };

  const handleIncrement = (productId) => {
    console.log(productId);
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container p-5">
      <span className={getBadgeClasses()}>{formCount()}</span>
      <button
        className="btn btn-secondary btn-sm me-2"
        onClick={() => handleIncrement({ id: 1 })}
      >
        Increment
      </button>
      <button
        className="btn btn-secondary btn-sm"
        onClick={handleDecrement}
        disabled={!count}
      >
        Decrement
      </button>
      <div className="m-5">
        {!tags.length && 'Tags not found'}
        <ul>{renderTags()}</ul>
      </div>
    </div>
  );
};

export default Counter;
