import { GreetProps } from './types/Greet.type';

// GOOD (destructuring props)
// "... unreadMessages = 117 ..." is a way to initialize an optional variable
export const Greet = ({ name, unreadMessages = 117, isLoggedIn }: GreetProps) => {
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
