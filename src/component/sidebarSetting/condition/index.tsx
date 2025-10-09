import { Button, Card, Form, Input, Select, Space } from "antd";
import { useForm } from "antd/es/form/Form";
import React, { useState } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const FormCondition = () => {
  const [form] = Form.useForm();

  const [templateEmailName, setTemplateEmailName] = useState<string>(null);
  const [mode, setMode] = useState<string>();

  function handleFinish() {
    console.log(123);
  }

  const LIST_FIELD = [
    {
      label: "TickerType",
      value: "TickerType",
    },
    {
      label: "Subject",
      value: "Subject",
    },
    {
      label: "Status",
      value: "Status",
    },
    {
      label: "CreatedAt",
      value: "CreatedAt",
    },
  ];

  return (
    <div>
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Form.Item label="Mode" rules={[{ required: true }]} name="mode">
          <Select
            options={[
              { label: "INPUT", value: "INPUT" },
              { label: "SEND_MAIL", value: "SEND_MAIL" },
              { label: "MANUAL", value: "MANUAL" },
              { label: "TRIGGER", value: "TRIGGER" },
            ]}
            onChange={setMode}
          ></Select>
        </Form.Item>

        {mode === "SEND_MAIL" && (
          <Form.Item
            label="Template Email"
            rules={[{ required: true }]}
            name="template"
          >
            <Select options={templateData()} onChange={handleChange}></Select>
          </Form.Item>
        )}

        <Form.List name="connections">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Card
                  key={key}
                  title={`Connection ${name + 1}`}
                  style={{ marginBottom: 16 }}
                  extra={<MinusCircleOutlined onClick={() => remove(name)} />}
                >
                  {/* <Form.Item {...restField} name={[name, 'targetID']} label="Target ID">
                    <Input />
                  </Form.Item>

                  <Form.Item {...restField} name={[name, 'sourceID']} label="Source ID" rules={[{ required: true }]}>
                    <Input />
                  </Form.Item> */}

                  <Form.Item
                    {...restField}
                    name={[name, "operation"]}
                    label="Operation"
                    rules={[{ required: true }]}
                  >
                    <Select
                      options={[
                        {
                          label: "OR",
                          value: "OR",
                        },
                        {
                          label: "AND",
                          value: "AND",
                        },
                      ]}
                    ></Select>
                  </Form.Item>

                  {/* Nested conditions */}
                  <Form.List name={[name, "conditions"]}>
                    {(condFields, { add: addCond, remove: removeCond }) => (
                      <>
                        {condFields.map(
                          ({ key: cKey, name: cName, ...restCond }) => (
                            <Space
                              key={cKey}
                              align="baseline"
                              style={{ display: "flex", marginBottom: 8 }}
                            >
                              <Form.Item
                                {...restCond}
                                name={[cName, "field"]}
                                rules={[{ required: true }]}
                              >
                                <Select
                                  style={{ width: 100 }}
                                  options={LIST_FIELD}
                                ></Select>
                              </Form.Item>
                              <Form.Item
                                {...restCond}
                                name={[cName, "operator"]}
                                rules={[{ required: true }]}
                              >
                                <Select
                                  style={{ width: 100 }}
                                  options={[
                                    {
                                      label: "equal",
                                      value: "equal",
                                    },
                                    {
                                      label: "not_equal",
                                      value: "not_equal",
                                    },
                                  ]}
                                ></Select>
                              </Form.Item>
                              <Form.Item
                                {...restCond}
                                name={[cName, "value"]}
                                rules={[{ required: true }]}
                              >
                                <Input placeholder="Value" />
                              </Form.Item>
                              <MinusCircleOutlined
                                onClick={() => removeCond(cName)}
                              />
                            </Space>
                          )
                        )}
                        <Form.Item>
                          <Button
                            type="dashed"
                            onClick={() => addCond()}
                            icon={<PlusOutlined />}
                          >
                            Add Condition
                          </Button>
                        </Form.Item>
                      </>
                    )}
                  </Form.List>
                </Card>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  icon={<PlusOutlined />}
                >
                  Add Connection
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form>
    </div>
  );
};

export default FormCondition;
