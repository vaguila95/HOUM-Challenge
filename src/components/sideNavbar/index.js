import React from 'react'
import { Affix, Menu, Select } from "antd"
import Sider from "antd/lib/layout/Sider"
import { useState, useEffect } from 'react'
import {
  FilterFilled,
  LoadingOutlined
} from '@ant-design/icons';

const { Option } = Select;

const SideNavbar = (props) => {
  const { newFilterHandler } = props;
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
        style={{ height: '100vh'}}
      >
        {/* <Input id="search-bar" placeholder="Ingresa tu búsqueda" /> */}
        <Menu
          mode="inline"
          theme="light"
        >
          <Menu.Item key="1" style={{ height: 'auto' }} icon={<FilterFilled/>}>
            <Select
              mode="multiple"
              allowClear
              style={{ width: '80%' }}
              placeholder="Filter by type"
              onChange={newFilterHandler}
            >
              { typesSelection() }
            </Select>
          </Menu.Item>
      </Menu>
      </Sider>
    </Affix>
  )
}

export default SideNavbar;