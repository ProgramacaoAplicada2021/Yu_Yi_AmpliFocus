import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Header extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <div>
        <header className="header">
          <h1>AmpliFocus</h1>
        </header>
      </div>
    );
  }
}
