type GreetProps = {
  name: string;
  unreadMessages?: number;
}

// GOOD (destructuring props)
export const Greet = ({ name, unreadMessages }: GreetProps) => {
  return(
    <div>
      <h2>Hola {name}, como estas? You have {unreadMessages} unread meassages.</h2>
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
