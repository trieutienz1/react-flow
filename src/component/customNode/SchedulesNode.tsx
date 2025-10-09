import React, { useEffect, useState } from "react";

import "./index.less";

import { ClockCircleTwoTone, PlusOutlined } from "@ant-design/icons";
import { Handle, Position } from "@xyflow/react";
import ToolbarAddnew from "../toolbar";
import { useDispatch } from "react-redux";
import { turnOnToolbar } from "../reducer/flow";

interface ISchedules {
  data: any;
  id: string;
}

const SchedulesNode = ({
  data,
  id,
  positionAbsoluteX,
  positionAbsoluteY,
}: ISchedules) => {
  const [toolbarVisible, setToolbarVisible] = useState<boolean>(
    data?.showToolbar
  );

  const { timeZone, date } = data;

  const dispatch = useDispatch();

  useEffect(() => {
    setToolbarVisible(data?.showToolbar);
  }, [data?.showToolbar]);

  const handleClick = () => {
    dispatch(turnOnToolbar(id));
  };

  return (
    <div className="node">
      <div className="node-header">
        <div className="icon">
          <ClockCircleTwoTone />
        </div>
        SCHEDULES
      </div>
      <div className="node-field">
        <div className="node-field-content">
          <strong>DATE:</strong> {date}
        </div>
        <div className="node-field-content">
          <strong>TIMEZONE:</strong> {timeZone}
        </div>

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
        sourcePositon={{ x: positionAbsoluteX, y: positionAbsoluteY }}
        onClose={() => setToolbarVisible(false)}
        isOpen={toolbarVisible}
      />
    </div>
  );
};

export default SchedulesNode;
