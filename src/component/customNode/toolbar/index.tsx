import { NodeToolbar, Position } from "@xyflow/react";
import React, { useCallback, useEffect, useRef, useState } from "react";

interface IToolbarAddNew {
  isOpen: boolean;
  onClose: () => void;
  data: any;
}

const ToolbarAddnew = ({ isOpen, onClose, data }: IToolbarAddNew) => {
  console.log("ToolbarAddnew:", data);
  const toolbarRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      console.log("toolbarRef.current:", toolbarRef.current);

      if (
        toolbarRef.current &&
        !toolbarRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={toolbarRef}>
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
                background: option.color,
                color: "white",
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
