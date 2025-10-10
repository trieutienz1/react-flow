import React from "react";

import "../index.less";
import SchedulesToolbarForm from "./schedules";
import FormCondition from "./condition";
const Sidebar = ({ selectedNode }) => {
  console.log("selectedNode:", selectedNode);

  const { data, id, type } = selectedNode;

  return (
    <div className="panel">
      <div className="panel-header">
        <span>{type.toUpperCase()}</span>
        <div>⋮</div>
      </div>

      <div className="panel-body">
        {type === "schedules" && (
          <SchedulesToolbarForm
            selectedNode={selectedNode}
          ></SchedulesToolbarForm>
        )}
        {type === "condition" && <FormCondition></FormCondition>}
        {type === "action" && <FormCondition></FormCondition>}
      </div>
    </div>
  );
};

export default Sidebar;
