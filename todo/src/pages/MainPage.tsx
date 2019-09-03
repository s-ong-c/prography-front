import * as React from 'react';
import styled from 'styled-components';
import MainTemplate from '../components/MainTemplate';
import MainContainer from '../containers/Main/MainContainer';

const MainPageBlock = styled.div``;
interface MainPageProps {}

const MainPage: React.SFC<MainPageProps> = props => {
  return <MainContainer />;
};

export default MainPage;
