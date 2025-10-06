import React, { useCallback, useEffect, useState } from "react";
import { Handle, NodeToolbar, Position } from "@xyflow/react";

import { BranchesOutlined } from "@ant-design/icons";

import "./index.less";

import { PlusOutlined } from "@ant-design/icons";
import ToolbarAddnew from "../toolbar";
import { turnOnToolbar } from "../reducer/flow";
import { useDispatch } from "react-redux";
export default function ConditionNode({ data, id }) {
  const [toolbarVisible, setToolbarVisible] = useState<boolean>(
    data?.showToolbar
  );

  const dispatch = useDispatch();

  useEffect(() => {
    setToolbarVisible(data?.showToolbar);
  }, [data?.showToolbar]);

  const handleClick = () => {
    dispatch(turnOnToolbar(id));
  };

  // const onHandleClick = useCallback(
  //   (event: any, handleType: any) => {
  //     event.stopPropagation();
  //     setToolbarVisible(true);
  //     console.log(`Clicked handle: ${handleType} on node ${id}`);
  //   },
  //   [id]
  // );

  return (
    <div className="node">
      <div className="node-header">
        <div className="icon">
          <BranchesOutlined />
        </div>
        IF/ELSE
      </div>
      <div className="case-text">CASE 1:</div>
      <div className="node-field">
        <div className="node-field-content">CONDITION</div>
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
          // onClick={(event) => onHandleClick(event, "source")}

          onClick={(e) => {
            e.stopPropagation();
            handleClick();
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
        onClose={() => setToolbarVisible(false)}
        isOpen={toolbarVisible}
      />
    </div>
  );
}
