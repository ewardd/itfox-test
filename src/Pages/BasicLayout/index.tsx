import React from "react";
import { Button, Layout } from "antd";
import styles from "./styles.module.scss";
import { useAppDispatch, useAppSelector } from "../../Hooks/redux";
import { setUnauthenticated } from "../../Redux/Auth/authSlice";

export const BasicLayout: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(setUnauthenticated());
  };

  const isAuthenticated = useAppSelector((store) => store.auth.isAuthenticated);

  return (
    <Layout>
      <Layout.Header className={styles.header}>
        {isAuthenticated && (
          <Button onClick={onClick} className={styles.logoutButton}>
            Logout
          </Button>
        )}
      </Layout.Header>

      <Layout.Content className={styles.content}>{children}</Layout.Content>

      <Layout.Footer>
        {/* NOTE: slot for future footer content */}
      </Layout.Footer>
    </Layout>
  );
};
