import React from "react";

function Title({ name, title }) {
  return (
    <div className="row">
      <div className="col10 mx-auto my-2 text-title text-center">
        <h1 className="font-weight-bold">
          {name} <strong className="blue">{title}</strong>
        </h1>
      </div>
    </div>
  );
}

export default Title;
