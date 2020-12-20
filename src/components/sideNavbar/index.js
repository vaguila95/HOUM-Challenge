import { Button, Menu } from "antd"
import Sider from "antd/lib/layout/Sider"

const SideNavbar = () => {
  return (
    <Sider>
      <Menu>
        <Menu.Item>
          <form className="pagesize-form">
            <input className="pagesize-bar" type="text"/>
            <Button className="pagesize-button" type="primary">Submit</Button>
          </form>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default SideNavbar;