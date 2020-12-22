import './topNavbar.less'
import { Header } from "antd/lib/layout/layout"

const TopNavbar = () => {
  return (
    <Header className="header">
      <h1 className="page-title">PokeCards</h1>
    </Header>
  )
}

export default TopNavbar;