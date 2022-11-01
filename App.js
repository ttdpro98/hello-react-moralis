import React from "react";
import ReactDOM from "react-dom";
import { MoralisProvider } from "react-moralis";
import { useMoralis } from "react-moralis";

ReactDOM.render(
 <MoralisProvider appId="xxxxxxxx" serverUrl="xxxxxxxx">
  <App />
 </MoralisProvider>,
 document.getElementById("root"),
);

function App() {
 const { authenticate, isAuthenticated, user } = useMoralis();

 if (!isAuthenticated) {
  return (
   <div>
    <button onClick={() => authenticate()}>Authenticate</button>
   </div>
  );
 }

 return (
  <div>
   <h1>Welcome {user.get("username")}</h1>
  </div>
 );
}