import React from "react";

import "../index.less";
const Sidebar = ({ selectedNode }) => {
  console.log("selectedNode:", selectedNode);

  const { data, id, type } = selectedNode;

  return (
    <div className="panel">
      <div className="panel-header">
        <span>{type}</span>
        <div>⋮</div>
      </div>

      <div className="panel-body">
        <div className="section">
          <label className="section-label">Đầu vào *</label>
          <input className="input" placeholder="Đặt giá trị biến" />
        </div>

        <div className="section">
          <label className="section-label">Biến đầu ra *</label>
          <input className="input" placeholder="Đặt giá trị biến" />
        </div>

        <div className="section">
          <label className="section-label">Chế độ song song</label>
          <div className="toggle"></div>
        </div>

        <div className="section">
          <label className="section-label">Phương pháp phản hồi lỗi</label>
          <select className="select">
            <option>Chấm dứt</option>
            <option>Bỏ qua</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
