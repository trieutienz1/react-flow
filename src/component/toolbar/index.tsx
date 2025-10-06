import { NodeToolbar, Position } from "@xyflow/react";
import React, { useCallback, useEffect, useRef, useState } from "react";

interface IToolbarAddNew {
  isOpen: boolean;
  onClose: () => void;
  data: any;
}

const ToolbarAddnew = ({ isOpen, onClose, data }: IToolbarAddNew) => {
  const toolbarOptions = [
    {
      label: "Home Node",
      color: "#84cc16",
      action: () => console.log("Chọn Home Node:", data),
    },
    {
      label: "Condition Node",
      color: "#06b6d4",
      action: () => console.log("Chọn Condition Node"),
    },
    {
      label: "Schedules Node",
      color: "#f97316",
      action: () => console.log("Chọn Schedules Node"),
    },
    {
      label: "Loop Node",
      color: "#f97316",
      action: () => console.log("Chọn Loop Node"),
    },
    {
      label: "Action Node",
      color: "#ec4899",
      action: () => console.log("Chọn action node"),
    },
  ];

  return (
    <div>
      <NodeToolbar isVisible={isOpen} position={Position.Right}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            padding: "4px",
            background: "white",
            border: "1px solid #ccc",
            borderRadius: "4px",
            minWidth: "150px",
          }}
        >
          {toolbarOptions.map((option, index) => (
            <button
              key={index}
              onClick={option.action}
              style={{
                color: "#333",
                border: "none",
                padding: "4px 8px",
                borderRadius: "2px",
                cursor: "pointer",
                fontSize: "12px",
                textAlign: "left",
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      </NodeToolbar>
    </div>
  );
};

export default ToolbarAddnew;
