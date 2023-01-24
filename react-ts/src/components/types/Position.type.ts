type HorizontalPosition = 'left' | 'center' | 'right';
type VerticalPosition = 'top' | 'center' | 'bottom';

export type ToastProps = {
  // 'Exclude' keyword is to exclude a particluar option from available options (in this case, 'center-center' position)
  position: 
    | Exclude<
        `${HorizontalPosition}-${VerticalPosition}`,
        'center-center'
      >
    | 'center'; // <- just 'center' is allowed
};

// If one hovers 'position' above, this is what TypeScript exposes you:
// (property) position: "left-center" | "left-top" | "left-bottom" | "center-top" | "center-bottom" | "right-center" | "right-top" | "right-bottom"

// Without hard-coding, you can obtain them
