import React, { useEffect, useState } from 'react';

const Review = () => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <button onClick={() => setModal(!modal)}>AtivarModel</button>
      {modal && <Modal />}
    </div>
  );
};

function Modal() {
  useEffect(() => {
    function handleScroll(event) {
      console.log(event);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <h2 style={{ height: '150vh' }}>Modal</h2>
    </div>
  );
}

export default Review;
