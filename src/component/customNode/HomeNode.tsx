import React, { useCallback, useEffect, useState } from "react";

import "./index.less";

import { HomeTwoTone, PlusOutlined } from "@ant-design/icons";
import { Handle, Position } from "@xyflow/react";
import ToolbarAddnew from "../toolbar";

const HomeNode = ({ data, id }) => {
  const [toolbarVisible, setToolbarVisible] = useState(data?.showToolbar);

  useEffect(() => {
    setToolbarVisible(data?.showToolbar);
  }, [data?.showToolbar]);

  const handleClick = () => {
    data.onClickHandle?.(id);
  };

  // const onHandleClick = useCallback(
  //   (event: any, handleType: any) => {
  //     event.stopPropagation(); // Ngăn event bubble lên node
  //     setToolbarVisible(true);
  //     // Có thể lưu handleType để tùy chỉnh toolbar (ví dụ: khác nhau cho source/target)
  //     console.log(`Clicked handle: ${handleType} on node ${id}`);
  //   },
  //   [id]
  // );

  return (
    <div className="node">
      <div className="node-header">
        <div className="icon">
          <HomeTwoTone />
        </div>
        START
      </div>
      <div className="node-field">
        <div className="node-field-content">HOME NODE</div>

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

      <ToolbarAddnew
        data={data}
        onClose={() => setToolbarVisible(false)}
        isOpen={toolbarVisible}
      />
    </div>
  );
};

export default HomeNode;
