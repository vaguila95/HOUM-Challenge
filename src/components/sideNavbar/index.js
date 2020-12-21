import React from 'react'
import './sideNavbar.less'
import { Affix, Button, Menu, Select } from "antd"
import Sider from "antd/lib/layout/Sider"
import { useState, useEffect } from 'react'
import {
  DoubleRightOutlined,
  DoubleLeftOutlined,
  FilterFilled,
  LoadingOutlined
} from '@ant-design/icons';

const { SubMenu } = Menu;
const { Option } = Select;

const SideNavbar = (props) => {
  const { newFilterHandler } = props;
  const [collapsed, setCollapsed] = useState(false);
  const [types, setTypes] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/type`);
      const data = await response.json();
      setTypes(data.results)
    }
    fetchData();

    // eslint-disable-next-line
  }, [])

  

  const typesSelection = () => {
    if (types.length) {
      const children = []
      types.forEach(type => {
         children.push(<Option key={type.name}>{type.name}</Option>)
      })
      return (children)
    } else {
      return (
        <div style={{ width: '100%', justifyContent: 'center' }}>
          <LoadingOutlined />
        </div>
      )
    }
  }

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
          
          <SubMenu key="sub1" id="filter-menu" icon={<FilterFilled id="filter-icon"/>} title="TYPE FILTER">
            <Menu.Item key="1" style={{ height: 'auto' }}>
              <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                placeholder="  Select types"
                onChange={newFilterHandler}
              >
                { typesSelection() }
              </Select>
            </Menu.Item>
          </SubMenu>
          <Menu.Item>
          </Menu.Item>
        </Menu>
      </Sider>
    </Affix>
  )
}

export default SideNavbar;