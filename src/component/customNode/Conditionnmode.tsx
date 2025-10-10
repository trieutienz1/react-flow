import React, { useCallback, useEffect, useState } from "react";
import { Handle, NodeToolbar, Position } from "@xyflow/react";

import { BranchesOutlined } from "@ant-design/icons";

import "./index.less";

import { PlusOutlined } from "@ant-design/icons";
import ToolbarAddnew from "../toolbar";
import { setSelectedNode, turnOnToolbar } from "../reducer/flow";
import { useDispatch, useSelector } from "react-redux";
export default function ConditionNode(props) {
  const { data, id, positionAbsoluteX, positionAbsoluteY } = props;
  const nodes = useSelector((state) => state.flow.nodes);
  const [sourceHandle, setSourceHandle] = useState<string>(null);
  const [toolbarVisible, setToolbarVisible] = useState<boolean>(
    data?.showToolbar
  );

  const dispatch = useDispatch();

  useEffect(() => {
    setToolbarVisible(data?.showToolbar);
  }, [data?.showToolbar]);

  const handleClick = (sourceIdHandle: string) => {
    setSourceHandle(sourceIdHandle);
    dispatch(turnOnToolbar(id));
  };

  return (
    <div className="node">
      <div className="node-header">
        <div className="icon">
          <BranchesOutlined />
        </div>
        CONDITION
      </div>
      <div className="case-text">CASE 1:</div>
      <div className="node-field">
        <div className="node-field-content">CONDITION 1</div>
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
          onClick={(e) => {
            e.stopPropagation();
            handleClick("source");
          }}
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
      <div className="case-text">CASE 2:</div>
      <div className="node-field">
        <div className="node-field-content">CONDITION 2</div>
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
          id={"source-2"}
          onClick={(e) => {
            e.stopPropagation();
            handleClick("source-2");
          }}
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

      {/* source */}
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

      <ToolbarAddnew
        data={data}
        sourceID={id}
        sourceHandle={sourceHandle}
        sourcePositon={{ x: positionAbsoluteX, y: positionAbsoluteY }}
        onClose={() => setToolbarVisible(false)}
        isOpen={toolbarVisible}
      />
    </div>
  );
}
