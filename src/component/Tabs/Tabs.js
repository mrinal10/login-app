import React, { useState } from 'react';

import axios from 'axios';
import './Tabs.css';






const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Tab1');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleFootballData = async (e) => {
    
    try {
      const response = await axios.get('http://localhost:5000/api/data');
      console.log(response.getbody());
    } catch (error) {
      console.error("error getting football data");
    }
  };

  return (
    <div className="tabs">
      <div className="tab-headers">
        <button
          className={activeTab === 'Tab1' ? 'active' : ''}
          onClick={() => handleTabClick('Tab1')}
        >
           Tab 1
        </button>
        <button
          className={activeTab === 'Tab2' ? 'active' : ''}
          onClick={() => {handleTabClick('Tab2'); handleFootballData();}}>
        Football</button>
        <button
          className={activeTab === 'Tab3' ? 'active' : ''}
          onClick={() => handleTabClick('Tab3')}
        >
          Tab 3
        </button>
        <button
          className={activeTab === 'Tab4' ? 'active' : ''}
          onClick={() => handleTabClick('Tab4')}
        >
          Tab 4
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'Tab1' && <div>Content for Tab 1</div>}
        {activeTab === 'Tab2' && <div>Content for Tab 2</div>}
        {activeTab === 'Tab3' && <div>Content for Tab 3</div>}
        {activeTab === 'Tab4' && <div>Content for Tab 4</div>}
      </div>
    </div>
  );
};

export default Tabs;