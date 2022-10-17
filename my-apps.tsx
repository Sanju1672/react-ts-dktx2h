import * as React from 'react';
import AppTile from './AppTile';
import './style.css';
import styled from 'styled-components';
import { useState, useCallback } from 'react';

const SearchWrapper = styled.div`
 display:flex;
height:20px;
 width:100%;
background-color:#fdfbfb;
border : 2px black;
`;

const ImageSearch = styled.img`
  width :20px;
  height :20px;
`;
const searchIcon = {
  imgUrl:
    'https://img.freepik.com/premium-vector/search-icon-magnifying-glass-symbol-outline-icon_543062-139.jpg?w=2000',
  imgSize: 25,
};
interface IAppInfo {
  id: number;
  appName: string;
  appDescription: string;
  appVersion: string;
  appType: string;
}
const appMetaData: IAppInfo[] = [
  {
    id: 1,
    appName: 'Workplace Incident Management',
    appDescription: 'N/A',
    appVersion: 'Version 1',
    appType: 'android',
  },
  {
    id: 2,
    appName: 'HRM',
    appDescription: 'HRM',
    appVersion: 'Version 3',
    appType: 'ios',
  },
  {
    id: 3,
    appName: 'PO Amendment',
    appDescription: 'N/A',
    appVersion: 'Version 3.9',
    appType: 'android',
  },
  {
    id: 4,
    appName: 'Internal Procurement Management',
    appDescription: 'N/A',
    appVersion: 'Version 1',
    appType: 'ios',
  },
  {
    id: 5,
    appName: 'kali_test_app',
    appDescription: 'Test Mobile Application',
    appVersion: 'Version 4.1.1',
    appType: 'ios',
  },
  {
    id: 6,
    appName: 'MDM3',
    appDescription: 'N/A',
    appVersion: 'Version MDM2',
    appType: 'android',
  },
  {
    id: 7,
    appName: 'Test2',
    appDescription: 'N/A',
    appVersion: 'Version Android Test2',
    appType: 'android',
  },
  {
    id: 8,
    appName: 'HR Application ',
    appDescription: 'HR Application Mobile App',
    appVersion: 'Version 1',
    appType: 'ios',
  },
  {
    id: 9,
    appName: 'zzzz',
    appDescription: 'test',
    appVersion: 'Version zzzz',
    appType: 'android',
  },
];
const MyAppsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

`;

// const results = appMetaData.filter(
//   (app) => app.appVersion === props.filterAppVersion
// );
// console.log('result', results);

export default function MyApps(props) {
  // const [searchText, setSearchText] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [appTypeData, setAppTypeData] = useState(appMetaData);
  const [appInfo , setAppInfo] = useState([]);
   
  React.useEffect(() => {
    fetch('https://mobilebuild.nxone.com/MobileBuildService/MobileAppService.svc/GetMobileApps'
    ,{
   headers: {
     "Content-Type" : "application/json",
    "authorization" :"Basic bnhvbmVcbS5zaGFybWE6UGFzc0B3b3JkODg=" }
    })
      .then((response) => response.json())
      .then((json) => setAppInfo(json));
},[]);
  

  const handleChange = useCallback(
    (event) => {
      const filteredApps = appMetaData.filter((app) =>
        app.appName.toLowerCase().includes(event.target.value)
      );
      setAppTypeData(filteredApps);
      // setSearchText(event.target.value);
    },
    [appMetaData]
  );
  // const search = useMemo(
  // () =>
  //  appTypeData.filter((app) =>
  //  app.appName.toLowerCase().includes(searchText)
  // ),
  //  [searchText]
  // );

  const ontypeChange = (event) => {
    setTypeFilter(event.target.value);
    if (event.target.value === 'All') {
      setAppTypeData(appMetaData);
    } else if (event.target.value === 'Android') {
      const result = appMetaData.filter((app) => app.appType === 'android');
      setAppTypeData(result);
    } else if (event.target.value === 'IOS') {
      const output = appMetaData.filter((app) => app.appType === 'ios');
      setAppTypeData(output);
    }
  };

  return (
    <React.Fragment>
      <SearchWrapper>
        <ImageSearch src={searchIcon.imgUrl} />

        <input
          type="search"
          name="apps search"
          placeholder="Search Apps"
          onChange={handleChange}
        />

        <div>
          <label htmlFor="apps">Sort by:</label>
          <select
            name="apps"
            id="apps"
            onChange={ontypeChange}
            value={typeFilter}
          >
            <option value="All">All</option>
            <option value="Android">Android</option>
            <option value="IOS">IOS</option>
          </select>
        </div>
      </SearchWrapper>
      <MyAppsWrapper className="my-apps">
        
        {appInfo.map((app) => ( 
         <AppTile key={app.id} data={app} />
        ))}
      </MyAppsWrapper>
    </React.Fragment>
  );
}
