import React, { useCallback, useState } from "react";
import { Handle, NodeToolbar, Position } from "@xyflow/react";
import { Button, Tooltip } from "antd";

import { BranchesOutlined } from "@ant-design/icons";

import "./index.less";

import {
  DeleteOutlined,
  PlayCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import ToolbarAddnew from "./toolbar";
export default function ConditionNode({ data, id }) {
  console.log("customnode:", data);
  const [hovered, setHovered] = useState(false);

  const [toolbarVisible, setToolbarVisible] = useState(false);

  // Xử lý click trên handle (ví dụ: source handle bên phải)
  const onHandleClick = useCallback(
    (event: any, handleType: any) => {
      event.stopPropagation(); // Ngăn event bubble lên node
      setToolbarVisible(true);
      // Có thể lưu handleType để tùy chỉnh toolbar (ví dụ: khác nhau cho source/target)
      console.log(`Clicked handle: ${handleType} on node ${id}`);
    },
    [id]
  );

  const toolbarOptions = [
    { label: "LLM", color: "#3b82f6", action: () => console.log("Chọn LLM") },
    {
      label: "LLM xuất kiến thức",
      color: "#10b981",
      action: () => console.log("Chọn LLM xuất kiến thức"),
    },
    {
      label: "Truy xuất kiến thức",
      color: "#f59e0b",
      action: () => console.log("Chọn Truy xuất kiến thức"),
    },
    {
      label: "Kết thúc",
      color: "#ef4444",
      action: () => console.log("Chọn Kết thúc"),
    },
    // Thêm các option khác từ hình: Nguỵ đại lý, Phân loại chủ đề, v.v.
    {
      label: "Nguỵ đại lý",
      color: "#8b5cf6",
      action: () => console.log("Chọn Nguỵ đại lý"),
    },
    {
      label: "Phân loại chủ đề",
      color: "#06b6d4",
      action: () => console.log("Chọn Phân loại chủ đề"),
    },
    {
      label: "Logic",
      color: "#84cc16",
      action: () => console.log("Chọn Logic"),
    },
    { label: "Lap", color: "#f97316", action: () => console.log("Chọn Lap") },
    { label: "Vong", color: "#ec4899", action: () => console.log("Chọn Vong") },
    {
      label: "Chuyen doi",
      color: "#14b8a6",
      action: () => console.log("Chọn Chuyen doi"),
    },
    { label: "Ma", color: "#a855f7", action: () => console.log("Chọn Ma") },
    { label: "Mau", color: "#c2410c", action: () => console.log("Chọn Mau") },
    {
      label: "Ma uong huyen bien",
      color: "#d97706",
      action: () => console.log("Chọn Ma uong huyen bien"),
    }, // Có thể là "Mẫu ứng hiện biến"
    {
      label: "Trinh tong hop bien",
      color: "#059669",
      action: () => console.log("Chọn Trinh tong hop bien"),
    }, // "Trình tổng hợp biến"
    {
      label: "Trinh trich xuat tai lieu",
      color: "#7c3aed",
      action: () => console.log("Chọn Trinh trich xuat tai lieu"),
    }, // "Trình trích xuất tài liệu"
  ];

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
        <div className="node-field-content">asd</div>
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
          onClick={(event) => onHandleClick(event, "source")}
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
