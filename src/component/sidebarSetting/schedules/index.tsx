import { Form, Select } from "antd";
import React, { useState } from "react";

const SchedulesToolbarForm = ({ selectedNode }) => {
  console.log("SchedulesToolbarForm:", selectedNode);

  const [mode, setMode] = useState<string>();
  const [form] = Form.useForm();

  function handleFinish() {}

  return (
    <div>
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Form.Item label="Mode" rules={[{ required: true }]} name="mode">
          <Select
            options={[
              { label: "SET TIME", value: "SET TIME" },
              { label: "WAITING", value: "WAITING" },
            ]}
            onChange={setMode}
          ></Select>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SchedulesToolbarForm;
