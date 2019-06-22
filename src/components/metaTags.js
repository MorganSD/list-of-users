import React, { Component } from "react";
import MetaTags from "react-meta-tags";

class Tags extends React.Component {
  render() {
    return (
      <MetaTags>
        <title>User List</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </MetaTags>
    );
  }
}
export default Tags;
