import React from 'react'
import './sideNavbar.less'
import { Affix, Button, Menu } from "antd"
import Sider from "antd/lib/layout/Sider"
import { useState } from 'react'
import {
  DoubleRightOutlined,
  DoubleLeftOutlined,
  FilterFilled
} from '@ant-design/icons';

const { SubMenu } = Menu;

const SideNavbar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Affix>
      <Sider 
        theme="light"
        collapsible={true}
        style={{ height: '100vh'}}
      >
        <Button type="primary" id="collapse-button" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <DoubleRightOutlined /> : <DoubleLeftOutlined />}
        </Button>
        {/* <Input id="search-bar" placeholder="Ingresa tu búsqueda" /> */}
        <Menu
          mode="inline"
          theme="light"
          inlineCollapsed={collapsed}
        >
          <SubMenu key="sub1" id="filter-menu" icon={<FilterFilled id="filter-icon"/>} title="FILTRAR TIPOS">
            <Menu.Item key="1">Select</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    </Affix>
  )
}

export default SideNavbar;