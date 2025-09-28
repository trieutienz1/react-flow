import React from "react";

import "./index.less";

import { RetweetOutlined } from "@ant-design/icons";

const LoopNode = () => {
  return (
    <div className="node">
      <div className="node-header">
        <div className="icon">
          <RetweetOutlined />
        </div>
        LOOP
      </div>
      <div className="node-field">đá</div>
    </div>
  );
};

export default LoopNode;
