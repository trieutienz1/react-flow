import { MarkerType, NodeToolbar, Position } from "@xyflow/react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEdge, addNode, turnOffAllToolbars } from "../reducer/flow";

interface IToolbarAddNew {
  isOpen: boolean;
  onClose: () => void;
  data: any;
  sourcePositon?: any;
  sourceID?: any;
}
const ToolbarAddnew = ({
  isOpen,
  onClose,
  data,
  sourceID,
  sourcePositon,
}: IToolbarAddNew) => {
  const dispatch = useDispatch();

  const handleAddNode = async (e: any, nodetype: string) => {
    console.log("e:", e);
    e.stopPropagation();
    const newNode = {
      id: Date.now().toString(36),
      position: { x: sourcePositon.x + 300, y: sourcePositon.y },
      type: `${nodetype}`,
      data: {
        label: Date.now().toString(36),
        showToolbar: false,
      },
    };

    const TargetID = Date.now().toString(36);

    const edgesnew = {
      id: `${sourceID}-${TargetID}`,
      markerEnd: { type: MarkerType.ArrowClosed },
      source: sourceID,
      target: TargetID,
    };

    dispatch(addNode(newNode));

    dispatch(addEdge(edgesnew));

    dispatch(turnOffAllToolbars());
  };

  const toolbarOptions = [
    {
      label: "Home Node",
      action: (e) => handleAddNode(e, "home"),
    },
    {
      label: "Condition Node",
      action: (e) => handleAddNode(e, "condition"),
    },
    {
      label: "Schedules Node",
      action: (e) => handleAddNode(e, "schedules"),
    },
    {
      label: "Loop Node",
      action: (e) => handleAddNode(e, "loop"),
    },
    {
      label: "Action Node",
      action: (e) => handleAddNode(e, "action"),
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
