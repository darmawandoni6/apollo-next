import React, { useState } from "react";
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from "reactstrap";

const Header = (props) => {
  const { placeholder, isDisplay, onChange } = props;

  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="row mx-0 border-bottom">
      <div className="col-12 py-2">
        <div className="d-flex">
          <div className="w-100">
            {!isDisplay && (
              <div className="input-group border-0">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text border-0 bg-white"
                    id="basic-addon1"
                  >
                    <i className="fa fa-search" />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder={placeholder}
                  onChange={() => onChange()}
                />
              </div>
            )}
          </div>
          <button className="btn btn-link">
            <i className="fa fa-bell" />
          </button>
          <Dropdown
            className="d-inline"
            isOpen={dropdown}
            toggle={() => setDropdown(!dropdown)}
          >
            <DropdownToggle color="link">
              <i className="fa fa-user" />
            </DropdownToggle>
            <DropdownMenu right className="border-0 shadow">
              <DropdownItem>Admin</DropdownItem>
              <DropdownItem>Change Password</DropdownItem>
              <DropdownItem>Setting Limit Request</DropdownItem>
              <DropdownItem>Logout</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Header;
