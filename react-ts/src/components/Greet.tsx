type GreetProps = {
  name: string;
}

// GOOD (destructuring props)
export const Greet = ({ name }: GreetProps) => {
  return(
    <div>
      <h2>Hola {name}, como estas?</h2>
    </div>
  );
}

// BAD
// export const Greet = (props: GreetProps) => {
//   return(
//     <div>
//       <h2>Hola {props.name}, como estas?</h2>
//     </div>
//   );
// }
