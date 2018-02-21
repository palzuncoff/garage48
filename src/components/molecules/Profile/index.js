import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import avatar from './img/avatar.png'

const AvatarImg = props => <img alt="avatar" src={avatar} />

const ProfileHeader = styled.div`
    position: relative;
    padding: 0;
    margin-top: 1em;
    width: 100%;
    min-height: 300px;
    border-top-left-radius: 3px!important;
    border-top-right-radius: 3px!important;
    background-color: #70929c;
    background-image: -webkit-linear-gradient(left,#70929c,#846170);
    background-image: linear-gradient(90deg,#70929c 0,#846170);
    @media screen and (max-width: 720px) {
        min-height: 200px;
    }
`

const ProfileBg = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
    background-size: cover!important;
    background-position: 50%;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
`

const ProfileInfo = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 2em 0;
    margin: 0 2em;
    display: flex;
    justify-content: space-between;
     img {
        width: 130px;
        height: 130px;
        border: 3px solid hsla(0,0%,100%,.6);
        border-radius: 50%;
        @media screen and (max-width: 720px) {
            width: 50px;
            height: 50px;
        }
     }
     @media screen and (max-width: 720px) {
        padding: 1em 0;
        margin: 0 1em;
        display: flex;
        align-items: center;
     }
`

const ProfileData = styled.div`
    float: left;
    font-size: inherit;
    padding: 1em 0;
    margin: 0 2em;
    width: calc(100% - 170px);
    h1 {
        font-size: 3em;
        display: block;
        margin: 0;
        margin-left: -2px;
        color: #fff;
        font-weight: 400;
        max-width: 100%;
        @media screen and (max-width: 720px) {
            font-size: 1em;
        }
    }
    span {
        display: block;
        font-weight: 200;
        color: hsla(0,0%,95%,.7);
        letter-spacing: .1em;
        text-transform: uppercase;
        font-size: .85em;
    }
    @media screen and (max-width: 720px) {
        margin: 0 1em;
        width: calc(100% - 100px);
    }
`

const ProfileDataList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    padding-top: .5em;
    li {
        padding-right: 1em;
        a {
            display: block;
            font-weight: 200;
            color: #fff;
            letter-spacing: .1em;
            text-transform: uppercase;
            font-size: .85em;
            text-decoration: none;
            &:hover {
                color: hsla(0,0%,100%,.8);
            }
        }
    }
`

const Profile = () => {
  return (
    <ProfileHeader>
      <ProfileBg>
        <ProfileInfo>
          <AvatarImg />
          <ProfileData>
            <h1>Name Surname</h1>
            <ProfileDataList>
              <li><Link to="/subjects">Info</Link></li>
              <li><Link to="/subjects">Study</Link></li>
              <li><Link to="/subjects">Tests</Link></li>
            </ProfileDataList>
          </ProfileData>
        </ProfileInfo>
      </ProfileBg>
    </ProfileHeader>
  )
}

export default Profile
