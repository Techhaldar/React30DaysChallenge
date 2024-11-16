import React from "react";

function CreateElement() {

  const myName = "Ratin Haldar";
  const element = <h1>Hi! /n {myName} this side</h1>
  const Embed = ReactDOM.render(element, document.getElement('root'));
  return (
    <>
      <div id="root">
        <Embed />
      </div>

    </>
  )
}

export default CreateElement;
