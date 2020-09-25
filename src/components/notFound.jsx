import React, { Component } from "react";

class Notfound extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center pt-5">
            <h1 className="display-3 text-title text-uppercase">404</h1>
            <h4 className="mt-5 text-center text-title">
              Oops, I believe you are lost.
            </h4>
            <h6>
              The requested URL{" "}
              <span className="text-danger">
                {this.props.location.pathname}
              </span>{" "}
              was not found
            </h6>
          </div>
        </div>
      </div>
    );
  }
}

export default Notfound;
