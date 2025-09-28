import React from "react";

import "./index.less";

import { HomeTwoTone } from "@ant-design/icons";

const HomeNode = () => {
  return (
    <div className="node">
      <div className="node-header">
        <div className="icon">
          <HomeTwoTone />
        </div>
        START
      </div>
      <div className="node-field">đá</div>
    </div>
  );
};

export default HomeNode;
