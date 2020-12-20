import './App.less';
import AppContent from '../appContent'
import TopNavbar from '../topNavbar'
import SideNavbar from '../sideNavbar'

import Layout from 'antd/lib/layout/layout';

const App = () => {
  return (
    <div>
      <Layout>
        <TopNavbar/>
        <Layout>
          <SideNavbar/>
          <AppContent/>          
        </Layout>
      </Layout>
    </div>
  );
}

export default App;