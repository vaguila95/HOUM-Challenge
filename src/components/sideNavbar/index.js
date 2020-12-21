import React from 'react'
import './sideNavbar.less'
import { Button, Menu } from "antd"
import Sider from "antd/lib/layout/Sider"
import { useState } from 'react'
import {
  FilterFilled
} from '@ant-design/icons';

const { SubMenu } = Menu;

const SideNavbar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider id="sidebar">
      <Button type="primary" onClick={() => setCollapsed(!collapsed)}>
        
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
      >
        <SubMenu key="1" icon={<FilterFilled />} title="FILTRAR TIPOS">
          <Menu.Item key="5">Select</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  )
}

export default SideNavbar;