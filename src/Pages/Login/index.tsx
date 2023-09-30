import { Button, Form, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
  const validEmail = "test@test.org";
  const validPassword = "password";

  const navigate = useNavigate();

  const onFinish = (values: any) => {
    navigate("/dashboard");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  type FieldType = {
    username?: string;
    password?: string;
  };

  return (
    <Form
      name="loginForm"
      style={{ maxWidth: 400 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
          {
            validator: (_, value: string) =>
              new Promise((resolve, reject) =>
                value === validEmail ? resolve(null) : reject("Wrong email")
              ),
            validateTrigger: "submit",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[
          { required: true, message: "Please input your password!" },
          {
            validator: (_, value: string) =>
              new Promise((resolve, reject) =>
                value === validPassword
                  ? resolve(null)
                  : reject("Wrong password")
              ),
            validateTrigger: "submit",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};
