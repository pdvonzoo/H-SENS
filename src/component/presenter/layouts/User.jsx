import styled from 'styled-components';
import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { useQuery } from 'react-apollo-hooks';
import { gql } from 'apollo-boost';
import UserInfo from '../../container/user/UserInfo';
import Works from './Works';
import { MainContext } from '../../../context/mainContext';

const User = styled.div`
  position: relative;
  height: 200vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  font-weight: bold;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const QUERY = gql`
  query seeUser($userid: String!) {
    seeUser(userid: $userid) {
      userdesc
      username
      userimage
      works {
        workimage
      }
    }
  }
`;

function UserPage({
  match: {
    params: { userid },
  },
}) {
  const { data, loading } = useQuery(QUERY, {
    variables: { userid },
  });
  if (loading) return null;
  return (
    <User>
      <UserInfo
        userid={userid}
        username={data.seeUser.username}
        userdesc={data.seeUser.userdesc}
        userimage={data.seeUser.userimage}
      />
      <Works works={data.seeUser.works} />
    </User>
  );
}

export default withRouter(UserPage);
