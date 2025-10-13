import { Col, Form, Input, Row, Select, Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateNode } from "../../reducer/flow";

const SchedulesToolbarForm = ({ selectedNode }) => {
  console.log("SchedulesToolbarForm:", selectedNode);

  const { id, data } = selectedNode;

  const [mode, setMode] = useState<string>();
  const dispatch = useDispatch();

  const [unit, setUnit] = useState<string>();
  const [form] = Form.useForm();

  // console.log("form:setUnit", form.getFieldsValue());

  useEffect(() => {
    console.log("form.getFieldsValue():", form.getFieldsValue());
  }, [form.getFieldsValue()]);

  const handleValuesChange = (changedValues, allValues) => {
    console.log("Trường vừa đổi:", changedValues);
    console.log("Toàn bộ giá trị form:", allValues);

    const payload = {
      id: id,
      data: {
        ...data,
        ...allValues,
      },
    };
    dispatch(updateNode(payload));
  };

  const items = [
    {
      key: "1",
      label: "Time to run",
      children: (
        <div>
          <div>adsdkskla</div>
          <div>adsdkskla</div>
        </div>
      ),
    },
    {
      key: "2",
      label: "Delay",
      children: (
        <div>
          <p>Settings</p>

          <Row gutter={[5, 5]}>
            <Col xs={16} xl={16}>
              <Form.Item
                label="Set time delay"
                name="timeDelay"
                rules={[{ required: true }]}
              >
                <Input type="number"></Input>
              </Form.Item>
            </Col>
            <Col xs={8} xl={8}>
              <Form.Item
                name="unit"
                label={<span style={{ opacity: 0 }}>unit</span>}
              >
                <Select
                  options={[
                    { label: "Days", value: "days" },
                    { label: "Hours", value: "hours" },
                    { label: "Minutes", value: "minutes" },
                  ]}
                ></Select>
              </Form.Item>
            </Col>
          </Row>
        </div>
      ),
    },
  ];

  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <div>
      <Form form={form} onValuesChange={handleValuesChange} layout="vertical">
        <Form.Item
          label="Timezone"
          rules={[{ required: true }]}
          name="timeZone"
        >
          <Select
            options={[
              { label: "America/Los_Angeles", value: "US" },
              { label: "Asia/Ho_Chi_Minh", value: "VN" },
            ]}
          ></Select>
        </Form.Item>
        <Form.Item label="">
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </Form.Item>
      </Form>
    </div>
  );
};

export default SchedulesToolbarForm;
