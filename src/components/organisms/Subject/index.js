// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import holder from './img/holder.png'
import coub from './img/coub.jpg'
import zigzag from './img/zigzag.png'

const HolderImage = () => <img alt="Logo" src={holder} />
const CoubImage = () => <img alt="Logo" src={coub} />
const ZigzagImage = () => <img alt="Logo" src={zigzag} />

const SubjectContent = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 1em;
    @media screen and (max-width: 720px) {
        flex-direction: column;
    }
`

const SubjectMain = styled.section`
    flex: 0 0 68%;
    box-sizing: border-box;
    border-radius: 3px;
    background: #fff;
    box-shadow: 0 1px 2px rgba(0,0,0,.1);
    margin-bottom: 1em;
    @media screen and (max-width: 720px) {
        width: 100%;
    }
`

const SubjectSide = styled.aside`
    flex: 0 0 30%;
    box-sizing: border-box;
    border-radius: 3px;
    background: #fff;
    box-shadow: 0 1px 2px rgba(0,0,0,.1);
    padding: 1em;
    @media screen and (max-width: 720px) {
        width: 100%;
    }
`

const SubjectSideContent = styled.section`
    background: #fff;
    dl {
        margin: 0;
        position: relative;
        box-sizing: border-box;
        dt {
            color: #8196a7;
            border-bottom: 1px solid #ebf0f2;
            line-height: 40px;
        }
        dd {
            position: absolute;
            margin-top: -40px;
            right: 0;
            font-weight: 600;
            text-align: right;
            color: #586573;
            line-height: 40px;
        }
    }
`

const SubjectPanelHeader = styled.div`
    border-bottom: 1px solid rgba(0,0,0,.05);
    padding: .5rem 1rem;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    h4 {
        font-size: .85rem;
        margin: 0;
        color: #4e5860;
        text-transform: uppercase;
        letter-spacing: .1em;
        margin-bottom: 0;
        font-weight: 600;
    }
`

const SubjectPanelContent = styled.div`
    margin: 0;
    padding: 1em;
`

const SubjectPanelList = styled.ul`
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    li {
        display: flex;
        align-items: center;
        height: 3em;
        border-bottom: 1px solid #f2f2f2;
        padding: 0 10px;
        &:hover {
            background: #f7f7f7;
        }
    }
`

const SubjectPanelListCard = styled.div`
      display: inline-block;
      position: relative;
      margin: 0 1em;
      @media screen and (max-width: 720px) {
          margin: 0 .5em;
      }
`

const SubjectPanelListCardLabel = styled.div`
      box-sizing: border-box;
      display: inline-block;
      vertical-align: middle;
      position: relative;
      background: #70929c;
      width: 25px;
      height: 25px;
`

const SubjectPanelListCardBody = styled.div`
      box-sizing: border-box;
      display: inline-block;
      vertical-align: middle;
      padding-left: 1em;
      width: calc(100% - 32px);
      font-size: 16px;
      a {
          font-size: 1em;
          color: #4e5860;
          font-weight: 500;
          margin: 0;
          padding: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-decoration: none;
          &:hover {
              text-decoration: underline;
          }
      }
      h3 {
          font-size: 13px;
          color: #8d9aa5;
          font-weight: 300;
          margin-bottom: 0;
          margin-top: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
      }
      @media screen and (max-width: 500px) {
          width: auto;
          max-width: 10em;
          overflow: hidden;
      }
      @media screen and (max-width: 400px) {
          max-width: 8em;
      }
`

const SubjectPanelListCardButton = styled.button`
      color: #09c;
      background: #fff;
      border: 1px solid #09c;
      margin-left: auto;
      font-size: 12px;
      cursor: pointer;
      outline: none;
      transition: all .3s;
      &:hover {
          color: #fff;
          background: #09c;
      }
`
class Subject extends Component {
  state = {
    topics: [],
  }

  componentWillMount() {

  }

  render() {
    return (
      <SubjectContent>
        <SubjectMain>
          <SubjectPanelHeader>
            <h4>{this.props.name}</h4>
          </SubjectPanelHeader>
          <SubjectPanelContent>

            <SubjectPanelList>
              <li>
                <span>01</span>
                <SubjectPanelListCard>
                  <SubjectPanelListCardLabel>
                    <CoubImage />
                  </SubjectPanelListCardLabel>
                  <SubjectPanelListCardBody>
                    <Link to={`/subjects/${name}/topic1`}>Sub Topic - {name}</Link>
                    <h3>Description</h3>
                  </SubjectPanelListCardBody>
                </SubjectPanelListCard>
                <SubjectPanelListCardButton>View</SubjectPanelListCardButton>
              </li>
              <li>
                <span>02</span>
                <SubjectPanelListCard>
                  <SubjectPanelListCardLabel>
                    <ZigzagImage />
                  </SubjectPanelListCardLabel>
                  <SubjectPanelListCardBody>
                    <Link to={`/subjects/${name}/topic2`}>Sub Topic - {name}</Link>
                    <h3>Description</h3>
                  </SubjectPanelListCardBody>
                </SubjectPanelListCard>
                <SubjectPanelListCardButton>View</SubjectPanelListCardButton>
              </li>
              <li>
                <span>03</span>
                <SubjectPanelListCard>
                  <SubjectPanelListCardLabel>
                    <HolderImage />
                  </SubjectPanelListCardLabel>
                  <SubjectPanelListCardBody>
                    <Link to={`/subjects/${name}/topic3`}>Sub Topic - {name}</Link>
                    <h3>Description</h3>
                  </SubjectPanelListCardBody>
                </SubjectPanelListCard>
                <SubjectPanelListCardButton>View</SubjectPanelListCardButton>
              </li>
            </SubjectPanelList>

          </SubjectPanelContent>
        </SubjectMain>

        <SubjectSide>
          <SubjectSideContent>
            <dl>
              <dt>lorem</dt>
              <dd>10%</dd>
              <dt>lorem</dt>
              <dd>20%</dd>
              <dt>lorem</dt>
              <dd>30%</dd>
              <dt>lorem</dt>
              <dd>40%</dd>
              <dt>lorem</dt>
              <dd>50%</dd>
            </dl>
          </SubjectSideContent>
        </SubjectSide>

      </SubjectContent>
    );
  }
};

Subject.propTypes = {
  name: PropTypes.string.isRequired,
  topics: PropTypes.array.isRequired,
}

export default Subject
