import React, { useState } from 'react';

import axios from 'axios';
import './Tabs.css';


const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Tab1'); // default to active tab
  const [teams, setTeams] = useState([]);
  const handleTabClick = async (tabName) => {
    console.log(tabName);
    setActiveTab(tabName);
    if(tabName === 'Tab2') {
      try {
        const response = await axios.get('http://localhost:5000/api/data');
        setTeams(response.data);
        console.log(JSON.stringify(response, null, 2));
      } catch (error) {
        console.error("error getting football data" + error);
      }
    }
  };

  return (
    <div className="tabs">
      <div className="tab-headers">
        <button
          className={activeTab === 'Tab1' ? 'active' : ''}
          onClick={() => handleTabClick('Tab1')}
        >Tab 1</button>
        <button
          className={activeTab === 'Tab2' ? 'active' : ''}
          onClick={() => {handleTabClick('Tab2'); }}>Football</button>
      </div>

      <div className="tab-content">
        {activeTab === 'Tab1' && <div>Content for Tab 1</div>}
        {activeTab === 'Tab2' && 
        <div className="team-list">
          <h2>Teams</h2>
          <div className="team-container">
              {teams.map(team => (
                <div className="team-box" key={team.team_name}>
                  {team.team_name} - {team.team_location}
                  {team.team_stadium}
                </div>
              ))}
          </div>
        </div>}
      </div>
    </div>
  );
};

export default Tabs;