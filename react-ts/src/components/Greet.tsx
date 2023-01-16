type GreetProps = {
  name: string;
  unreadMessages?: number;
  isLoggedIn: boolean;
}

// GOOD (destructuring props)
export const Greet = ({ name, unreadMessages, isLoggedIn }: GreetProps) => {
  return(
    <div>
      { 
        isLoggedIn 
          ? <h2>Hola {name}, como estas? You have {unreadMessages} unread meassages.</h2>
          : <h2>Welcome guest!</h2>
      }
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
