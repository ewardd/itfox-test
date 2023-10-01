import { type FormProps, Button, Form, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../Hooks/redux";
import { setAuthenticated } from "../../Redux/Auth/authSlice";

interface IForm {
  username: string;
  password: string;
}

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onFinish = () => {
    dispatch(setAuthenticated());
    navigate("/dashboard");
  };

  const onFinishFailed: FormProps<IForm>["onFinishFailed"] = (errorInfo) => {
    console.error("Failed:", errorInfo);
  };

  return (
    <Form<IForm>
      name={"loginForm"}
      style={{ maxWidth: 400 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete={"off"}
      layout={"vertical"}
    >
      <Form.Item
        label={"Username"}
        name={"username"}
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
          {
            validator: (_, value: IForm["username"]) =>
              new Promise((resolve, reject) =>
                value === process.env.REACT_APP_AUTH_LOGIN
                  ? resolve(null)
                  : reject("Wrong email")
              ),
            validateTrigger: "submit",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={"Password"}
        name={"password"}
        rules={[
          { required: true, message: "Please input your password!" },
          {
            validator: (_, value: IForm["password"]) =>
              new Promise((resolve, reject) =>
                value === process.env.REACT_APP_AUTH_PASS
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
        <Button type={"primary"} htmlType={"submit"}>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};
