import React from "react";

import "./index.less";

import { ClockCircleTwoTone, PlusOutlined } from "@ant-design/icons";
import { Handle, Position } from "@xyflow/react";

const SchedulesNode = () => {
  return (
    <div className="node">
      <div className="node-header">
        <div className="icon">
          <ClockCircleTwoTone />
        </div>
        SCHEDULES
      </div>
      <div className="node-field">
        <div className="node-field-content">SCHEDULES</div>

        <Handle
          type="source"
          position={Position.Right}
          style={{
            width: 19,
            height: 19,
            backgroundColor: "#3b81dd",
            top: "calc(100% - 14px)",
            right: -10,
            cursor: "pointer",
          }}
          id={"source"}
        >
          <PlusOutlined
            style={{
              width: 15,
              height: 15,
              color: "#ffffff",
              fontSize: 15,
              position: "absolute",
              top: 1,
              left: 1,
            }}
          />
        </Handle>
      </div>

      <Handle
        type="target"
        style={{ width: 19, height: 19, backgroundColor: "#3b81dd", top: 24 }}
        position={Position.Left}
      >
        <PlusOutlined
          style={{
            width: 15,
            height: 15,
            color: "#ffffff",
            fontSize: 15,
            position: "absolute",
            top: 1,
            left: 1,
          }}
        />
      </Handle>
    </div>
  );
};

export default SchedulesNode;
