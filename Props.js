import React from "react";
function Props(props){
 const isloggedin=props.isloggedin
 if(isloggedin=="true")return <h1>Hello{props.name}{props.lastname}!</h1>
 else
 return<h1>{props.name}{props.lastname} login to continue</h1>
}
export default Props