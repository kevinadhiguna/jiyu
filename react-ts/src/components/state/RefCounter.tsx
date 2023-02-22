import { useRef } from 'react';

export function RefCounter() {
  let ref = useRef<number>(0);

  function handleButtonClick() {
    ref.current = ref.current + 1;
    alert(`You clicked me ${ref.current} times!`);
  }

  return(
    <>
      <button onClick={handleButtonClick}>Click me anyway xD</button>
    </>
  );
}
