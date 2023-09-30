import React from "react";
import { Layout } from "antd";
import "./styles.scss";

export const BasicLayout: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <Layout className={"h-screen"}>
      <Layout.Header>{/* TODO: slot for future nav menu */}</Layout.Header>

      <Layout.Content className={"content"}>{children}</Layout.Content>

      <Layout.Footer>
        {/* TODO: slot for future footer content */}
      </Layout.Footer>
    </Layout>
  );
};
