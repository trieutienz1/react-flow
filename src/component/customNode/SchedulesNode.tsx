import React from "react";

import "./index.less";

import { ClockCircleTwoTone } from "@ant-design/icons";

const SchedulesNode = () => {
  return (
    <div className="node">
      <div className="node-header">
        <div className="icon">
          <ClockCircleTwoTone />
        </div>
        SCHEDULES
      </div>
      <div className="node-field">đá</div>
    </div>
  );
};

export default SchedulesNode;
