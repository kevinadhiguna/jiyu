import { useRef } from 'react';

export function RefFocusElement() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleButtonClicked() {
    inputRef.current?.focus();
  }

  return(
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleButtonClicked}>Focus element</button>
    </>
  );
}
