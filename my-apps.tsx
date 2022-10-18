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
  AppId: number;
  AppDisplayName: string;
  AppDescription: string;
  AppVersion: string;
  Android: boolean;
  iOS: boolean;
}
const appMetaData: IAppInfo[] = [
  {
    id: 1,
    AppDisplayName: 'Workplace Incident Management',
    AppDescription: 'N/A',
    AppVersion: 'Version 1',
    appType: 'android',
  },
  {
    id: 2,
    AppDisplayName: 'HRM',
    AppDescription: 'HRM',
    AppVersion: 'Version 3',
    appType: 'ios',
  },
  {
    id: 3,
    AppDisplayName: 'PO Amendment',
    AppDescription: 'N/A',
    AppVersion: 'Version 3.9',
    appType: 'android',
  },
  {
    id: 4,
    AppDisplayName: 'Internal Procurement Management',
    AppDescription: 'N/A',
    AppVersion: 'Version 1',
    appType: 'ios',
  },
  {
    id: 5,
    AppDisplayName: 'kali_test_app',
    AppDescription: 'Test Mobile Application',
    AppVersion: 'Version 4.1.1',
    appType: 'ios',
  },
  {
    id: 6,
    AppDisplayName: 'MDM3',
    AppDescription: 'N/A',
    AppVersion: 'Version MDM2',
    appType: 'android',
  },
  {
    id: 7,
    AppDisplayName: 'Test2',
    AppDescription: 'N/A',
    AppVersion: 'Version Android Test2',
    appType: 'android',
  },
  {
    id: 8,
    AppDisplayName: 'HR Application ',
    AppDescription: 'HR Application Mobile App',
    AppVersion: 'Version 1',
    appType: 'ios',
  },
  {
    id: 9,
    AppDisplayName: 'zzzz',
    AppDescription: 'test',
    AppVersion: 'Version zzzz',
    appType: 'android',
  },
];
const MyAppsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

`;

// const results = appMetaData.filter(
//   (app) => app.AppVersion === props.filterAppVersion
// );
// console.log('result', results);

export default function MyApps(props) {
  // const [searchText, setSearchText] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [appInfo, setAppInfo] = useState([]);
  const [appTypeData, setAppTypeData] = useState(appInfo);

  React.useEffect(() => {
    fetch(
      'https://mobilebuild.nxone.com/MobileBuildService/MobileAppService.svc/GetMobileApps',
      {
        headers: {
          'Content-Type': 'application/json',
          authorization: 'Basic bnhvbmVcbS5zaGFybWE6UGFzc0B3b3JkODg=',
        },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        setAppInfo(json);
        setAppTypeData(json);
      });
  }, []);

  const handleChange = useCallback(
    (event) => {
      if (typeFilter === 'All') {
        const filteredApps = appInfo.filter((app) =>
          app.AppDisplayName.toLowerCase().includes(event.target.value)
        );
        setAppTypeData(filteredApps);
      } else if (typeFilter === 'Android') {
        const filteredAndroidApps = appInfo.filter(
          (app) =>
            app.AppDisplayName.toLowerCase().includes(event.target.value) &&
            app.Android === true
        );

        setAppTypeData(filteredAndroidApps);
      } else {
        const filteredIosApps = appInfo.filter(
          (app) =>
            app.AppDisplayName.toLowerCase().includes(event.target.value) &&
            app.iOS === true
        );

        setAppTypeData(filteredIosApps);
      }
      // setSearchText(event.target.value);
    },
    [appTypeData, typeFilter]
  );
  // const search = useMemo(
  // () =>
  //  appTypeData.filter((app) =>
  //  app. AppDisplayName.toLowerCase().includes(searchText)
  // ),
  //  [searchText]
  // );

  const ontypeChange = (event) => {
    setTypeFilter(event.target.value);
    if (event.target.value === 'All') {
      setAppTypeData(appInfo);
    } else if (event.target.value === 'Android') {
      const result = appInfo.filter((app) => app.Android === true);
      setAppTypeData(result);
    } else if (event.target.value === 'IOS') {
      const output = appInfo.filter((app) => app.iOS === true);
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
        {appTypeData.map((app) => (
          <AppTile key={app.AppId} data={app} />
        ))}
      </MyAppsWrapper>
    </React.Fragment>
  );
}
