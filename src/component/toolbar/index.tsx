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
  sourceHandle?: string;
}
const ToolbarAddnew = ({
  isOpen,
  onClose,
  data,
  sourceID,
  sourceHandle,
  sourcePositon,
}: IToolbarAddNew) => {
  const dispatch = useDispatch();

  const handleAddNode = async (e: any, nodetype: string) => {
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

    const edgesNew: any = {
      id: `${sourceID}-${TargetID}`,
      markerEnd: { type: MarkerType.ArrowClosed },
      source: sourceID,
      target: TargetID,
    };

    if (sourceHandle) {
      edgesNew["sourceHandle"] = sourceHandle;
    }

    dispatch(addNode(newNode));

    dispatch(addEdge(edgesNew));

    dispatch(turnOffAllToolbars());
  };

  const toolbarOptions = [
    {
      label: "Home",
      action: (e) => handleAddNode(e, "home"),
    },
    {
      label: "Condition",
      action: (e) => handleAddNode(e, "condition"),
    },
    {
      label: "Schedules",
      action: (e) => handleAddNode(e, "schedules"),
    },
    {
      label: "Loop",
      action: (e) => handleAddNode(e, "loop"),
    },
    {
      label: "Action",
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
