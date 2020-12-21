import './App.less';
import AppContent from '../appContent';
import TopNavbar from '../topNavbar';
import SideNavbar from '../sideNavbar';

import { useState } from 'react';
import Layout from 'antd/lib/layout/layout';


const App = () => {
  const [filteredTypes, setFilteredTypes] = useState([]);

  const newFilterHandler = selectedTypes => {
    setFilteredTypes(selectedTypes)
  }

  return (
    <div>
      <Layout>
        <TopNavbar/>
        <Layout>
          <SideNavbar newFilterHandler={newFilterHandler}/>
          <AppContent filteredTypes={filteredTypes}/>          
        </Layout>
      </Layout>
    </div>
  );
}

export default App;