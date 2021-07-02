import React from "react";

export default function Hello() {
  var d = new Date(); // for now
  const hour = d.getHours(); // => 9
  d.getMinutes(); // =>  30
  d.getSeconds(); // => 51
  var greeting = "Hey!";
  if (hour < 2) {
    greeting = "Having a Good Night? Me too,";
  } else if (2 <= hour && hour < 5) {
    greeting = "Wow! You're up late.";
  } else if (5 <= hour && hour < 8) {
    greeting = "Good Morning Early Bird!";
  } else if (8 <= hour && hour < 10) {
    greeting = "Good Morning";
  } else if (10 <= hour < 14) {
    greeting = "Hey!";
  } else if (14 <= hour && hour < 16) {
    greeting = "Good Afternoon!";
  } else if (16 <= hour && hour < 17) {
    greeting = "Howdy!";
  } else if (17 <= hour && hour < 20) {
    greeting = "Good Evening";
  } else if (20 <= hour && hour < 24) {
    greeting = "You're a bit of a night owl, me too! ";
  } else {
    greeting = "Welcome to my site!";
  }

  return (
    <div>
      <h1>{greeting} </h1><h1>I'm Sarah.</h1>
    </div>
  );
}
