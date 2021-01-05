import React from "react";
import { BeatLoader } from "react-spinners";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from "react-pro-sidebar";

const AdminLayout = (props) => {
  const { children } = props;

  return (
    <div className="row mx-0">
      <div className="col px-0">
        <div className="wrapper p-0">
          <ProSidebar collapsed={false}>
            <SidebarContent>
              <Menu iconShape="circle">
                <MenuItem icon={<i className="fas fa-tachometer-alt" />}>
                  Dashboard
                </MenuItem>
                <SubMenu title="Components">
                  <MenuItem>Component 1</MenuItem>
                  <MenuItem>Component 2</MenuItem>
                </SubMenu>
              </Menu>
            </SidebarContent>
          </ProSidebar>
          <div className="wrapper-content border">
            {/* <div className="loading-page text-center">
            <BeatLoader size={50} color="#3c5975" loading />
          </div> */}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
