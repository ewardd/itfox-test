import React from "react";
import { Menu, MenuProps } from "antd";
import { locationMenuItems } from "../../Constants";
import { useAppDispatch, useAppSelector } from "../../Hooks/redux";
import { isLocationEnum } from "../../Methods/isLocationEnum";
import { getLocationCoordinatesThunk } from "../../Redux/Location/locationsSlice";
import styles from "./styles.module.scss";

export const LocationMenu: React.FC = () => {
  const dispatch = useAppDispatch();

  const selected = useAppSelector((state) => state.location.selected);

  const onClick: MenuProps["onClick"] = ({ key }) => {
    if (!isLocationEnum(key)) return;

    dispatch(getLocationCoordinatesThunk(key));
  };

  return (
    <Menu
      className={styles.locationMenu}
      items={locationMenuItems}
      selectedKeys={[selected]}
      onClick={onClick}
    />
  );
};
