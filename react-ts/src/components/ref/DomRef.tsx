import { useEffect, useRef } from 'react';

export const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    // inputRef.current.focus(); // <- Possible if 'const inputRef = useRef<HTMLInputElement>(null!);'
  }, []);

  return(
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
}
