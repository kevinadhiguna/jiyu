import { useRef } from 'react';

export function RefFocusElement() {
  const inputRef = useRef<HTMLInputElement>(null);

  return(
    <>
      <input type="text" ref={inputRef} />
      <button>Focus element</button>
    </>
  );
}
