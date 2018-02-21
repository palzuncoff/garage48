import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import bg from './img/suspension-bridge.jpg'
import logo from './img/logo.png'
import google from './img/icons/google.png'
import facebook from './img/icons/fb.png'
import twitter from './img/icons/twitter.png'

const SignUpBg = styled.section`
    background: url(${bg}) no-repeat center center fixed;
    background-size: cover;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    display: flex;
    align-items: center;
    justify-content: center;
`

const SignUpBgOverlay = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(125, 102, 213, .9), rgba(87, 83, 128, .9));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 2em;
    .login-subtitle {
        color: #fff;
        font-weight: 100;
        font-size: 30px;
        margin: 0;
        padding-top: 20px;
        @media screen and (max-width: 992px) {
            font-size: 20px;
        }
        @media screen
            and (min-device-width: 320px)
            and (max-device-width: 1024px)
            and (-webkit-min-device-pixel-ratio: 2)
            and (orientation: landscape) {
                display: none;
            }
    }
    .logo {
        width: 150px;
        @media screen and (max-width: 992px) {
            width: 100px;
        }
        @media screen
            and (min-device-width: 320px)
            and (max-device-width: 1024px)
            and (-webkit-min-device-pixel-ratio: 2)
            and (orientation: landscape) {
                display: none;
            }
    }
    .logo-title {
        color: #fff;
        font-size: 30px;
        font-weight: 100;
        display: flex;
        margin: 30px 0;
        &:before {
            background: #fff;
            content: '';
            width: 10px;
            height: 1px;
            flex: 1 1 1px;
            margin-right: 10px;
            margin-top: 16px;
            align-items: center;
            display: inline-block;
            vertical-align: middle;
            box-sizing: border-box;
            transition: width 1s;
            @media screen and (max-width: 992px) {
                margin-top: 12px;
            }
        }
        &:after {
            background: #fff;
            content: '';
            width: 10px;
            height: 1px;
            flex: 1 1 1px;
            margin-left: 10px;
            margin-top: 16px;
            align-items: center;
            display: inline-block;
            vertical-align: middle;
            box-sizing: border-box;
            transition: width 1s;
            @media screen and (max-width: 992px) {
                margin-top: 12px;
            }
        }
        &--active:before,
        &--active:after {
            width: 80px;
            transition: width 1s;
        }
        @media screen and (max-width: 992px) {
            font-size: 18px;
        }
        @media screen and (max-width: 768px) {
            margin: 20px 0;
        }
        @media screen
            and (min-device-width: 320px)
            and (max-device-width: 1024px)
            and (-webkit-min-device-pixel-ratio: 2)
            and (orientation: landscape) {
                display: none;
            }
    }
    @media screen and (max-width: 768px) {
        padding-top: 4em;
    }
    @media screen
            and (min-device-width: 320px)
            and (max-device-width: 1024px)
            and (-webkit-min-device-pixel-ratio: 2)
            and (orientation: landscape) {
                padding: 0;
            }
`

const SignUpListIcons = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    .list-icons {
        &__li {
            display: inline-block;
            vertical-align: middle;
            padding: 0 10px;
        }
        &__icon {
            cursor: pointer;
            border-radius: 50%;
            display: block;
        }
        &__img {
            width: 50px;
            border: 1px solid rgba(255, 255, 255, 1);
            border-radius: 50%;
            transition: border .3s;
            &:hover {
                border: 1px solid rgba(255, 255, 255, .5);
            }
            &:active {
                border: 1px solid rgba(255, 255, 255, .5);
            }
        }
    }
    @media screen
        and (min-device-width: 320px)
        and (max-device-width: 1024px)
        and (-webkit-min-device-pixel-ratio: 2)
        and (orientation: landscape) {
            display: none;
        }
`

const SignUpInputEmailAndPassword = styled.div`
    .login-input {
        position: relative;
        z-index: 1;
        display: inline-block;
        width: 300px;
        vertical-align: top;
        overflow: hidden;
        padding-top: 2em;
        transition: max-width 1s;
        &.email--active {
            .input__label {
                color: #333;
                -webkit-transform: translate3d(0, -1.25em, 0) scale3d(0.75, 0.75, 1);
                transform: translate3d(0, -1.25em, 0) scale3d(0.75, 0.75, 1);
            }
            .input__graphic {
                stroke: #8fdeff;
                -webkit-transform: translate3d(-66.6%, 0, 0);
                transform: translate3d(-66.6%, 0, 0);
            }
        }
        &.password--active {
            .input__label {
                color: #333;
                -webkit-transform: translate3d(0, -1.25em, 0) scale3d(0.75, 0.75, 1);
                transform: translate3d(0, -1.25em, 0) scale3d(0.75, 0.75, 1);
            }
            .input__graphic {
                stroke: #8fdeff;
                -webkit-transform: translate3d(-66.6%, 0, 0);
                transform: translate3d(-66.6%, 0, 0);
            }
        }
        @media screen and (max-width: 992px) {
            transition: max-width 1s;
            width: 200px;
        }
    }
    .input {
        &__field {
            position: relative;
            display: block;
            float: right;
            border: none;
            border-radius: 0;
            font-weight: 100;
            padding: 0.5em 0 0.25em;
            width: 100%;
            background: transparent;
            color: #8fdeff;
            font-size: 20px;
            text-align: center;
            -webkit-appearance: none;
            &:focus {
                outline: none;
                + .input__label {
                    color: #333;
                    -webkit-transform: translate3d(0, -1.25em, 0) scale3d(0.75, 0.75, 1);
                    transform: translate3d(0, -1.25em, 0) scale3d(0.75, 0.75, 1);
                }
                ~ .input__graphic {
                    stroke: #8fdeff;
                    -webkit-transform: translate3d(-66.6%, 0, 0);
                    transform: translate3d(-66.6%, 0, 0);
                }
            }
        }
        &__label {
            float: right;
            color: #696969;
            font-weight: bold;
            position: absolute;
            box-sizing: border-box;
            top: 25px;
            font-size: 14px;
            left: 0;
            display: block;
            width: 100%;
            text-align: left;
            padding: 0;
            pointer-events: none;
            -webkit-transform-origin: 0 0;
            transform-origin: 0 0;
            -webkit-transition: -webkit-transform 0.2s 0.15s, color 1s;
            transition: transform 0.2s 0.15s, color 1s;
            -webkit-transition-timing-function: ease-out;
            transition-timing-function: ease-out;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        &__content {
            position: relative;
            display: block;
            padding: 1em 0;
            width: 100%;
            color: #fff;
            text-align: center;
            font-weight: 500;
        }
        &__graphic {
            position: absolute;
            top: 0;
            left: 0;
            fill: none;
            stroke: #fff;
            pointer-events: none;
            -webkit-transition: -webkit-transform 0.7s, stroke 0.7s;
            transition: transform 0.7s, stroke 0.7s;
            -webkit-transition-timing-function: cubic-bezier(0, 0.25, 0.5, 1);
            transition-timing-function: cubic-bezier(0, 0.25, 0.5, 1);
        }
    }
    @media screen
        and (min-device-width: 320px)
        and (max-device-width: 1024px)
        and (-webkit-min-device-pixel-ratio: 2)
        and (orientation: landscape) {
            padding-top: 1em;
        }
`

const SignUpBt = styled.button`
    float: left;
    width: 220px;
    display: block;
    font-size: 12px;
    text-transform: uppercase;
    margin-top: 3em;
    padding: 1em 0;
    border: none;
    background: none;
    outline: none;
    vertical-align: middle;
    position: relative;
    border-radius: 15px;
    border-color: #fff;
    cursor: pointer;
    z-index: 1;
    color: #41baed;
    transition: color 0.3s;
    &:focus {
        outline: none;
    }
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        z-index: -1;
        box-shadow: inset 0 0 0 35px #fff;
        transform: scale3d(0.9, 0.9, 1);
        transition: box-shadow 0.3s, transform 0.3s;
    }
    &.button-login--inverted {
        &::before {
            box-shadow: inset 0 0 0 35px #fff;
        }
    }
    &:hover {
        color: #fff;
        &::before {
            box-shadow: inset 0 0 0 2px #fff;
            transform: scale3d(1, 1, 1);
        }
    }
    &:focus {
        color: #fff;
        &::before {
            box-shadow: inset 0 0 0 2px #fff;
            transform: scale3d(1, 1, 1);
        }
    }
`

const SignUpFooterNav = styled.ul`
    list-style: none;
    width: 220px;
    padding: 0;
    margin: 0;
    padding-top: 2em;
    display: flex;
    justify-content: space-between;
    .bar-separator {
        display: inline-block;
        width: 1px;
        margin: 0 5px;
        height: 20px;
        background-color: #e6e6e6;
        vertical-align: middle;
    }
    .login-footer {
        &__li {
            display: flex;
            align-items: center;
            &:nth-child(1) {
                width: 49%;
                display: flex;
                justify-content: flex-start;
            }
            &:nth-child(3) {
                width: 49%;
                display: flex;
                justify-content: flex-end;
            }
        }
        &__link {
            color: #fff;
            font-size: 13px;
            font-weight: 100;
            text-decoration: none;
            @media screen and (max-width: 992px) {
                font-size: 12px;
            }
        }
    }
    @media screen and (max-width: 992px) {
        width: 180px;
    }
`


class SignUpPage extends Component {
    state = {
      logoTitle: '',
      inputEmail: '',
      inputPassword: '',
    };
    componentDidMount() {
      this.timerID = setInterval(
        () => this.title(),
        10
      )
    }
    componentWillUnmount() {
      clearInterval(this.timerID)
    }
    render() {
      return (
        <SignUpBg>
          <SignUpBgOverlay>
            <img src={logo} alt="" className="logo" />
            <p className={`logo-title ${this.state.logoTitle}`}>Login with</p>
            <SignUpListIcons>
              <li className="list-icons__li">
                <Link to="/" className="list-icons__icon">
                  <img
                    src={google}
                    alt="google"
                    className="list-icons__img"
                  />
                </Link>
              </li>
              <li className="list-icons__li">
                <Link to="/" className="list-icons__icon">
                  <img
                    src={facebook}
                    alt="facebook"
                    className="list-icons__img"
                  />
                </Link>
              </li>
              <li className="list-icons__li">
                <Link to="/" className="list-icons__icon">
                  <img
                    src={twitter}
                    alt="twitter"
                    className="list-icons__img"
                  />
                </Link>
              </li>
            </SignUpListIcons>
            <p className="login-subtitle">or</p>
            <SignUpInputEmailAndPassword>
              <span className={`login-input ${this.state.inputEmail}`}>
                <input className="input__field" type="text" id="input-mail" onChange={this.email} />
                <label className="input__label" htmlFor="input-mail">
                  <span className="input__content">Email</span>
                </label>
                <svg className="input__graphic" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
                  <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0" />
                </svg>
              </span>
            </SignUpInputEmailAndPassword>
            <SignUpInputEmailAndPassword>
              <span className={`login-input ${this.state.inputPassword}`}>
                <input className="input__field" type="text" id="input-pass" onChange={this.password} />
                <label className="input__label" htmlFor="input-pass">
                  <span className="input__content">Password</span>
                </label>
                <svg className="input__graphic" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
                  <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0" />
                </svg>
              </span>
            </SignUpInputEmailAndPassword>
            <SignUpBt>Login</SignUpBt>
            <SignUpFooterNav>
              <li className="login-footer__li">
                <Link to="/" className="login-footer__link">Rigister</Link>
              </li>
              <li className="login-footer__li">
                <span className="bar-separator" />
              </li>
              <li className="login-footer__li">
                <Link to="/" className="login-footer__link">Can’t sign in</Link>
              </li>
            </SignUpFooterNav>
          </SignUpBgOverlay>
        </SignUpBg>
      )
    }
    title() {
      this.setState({
        logoTitle: 'logo-title--active',
      })
    }
    email = (event) => {
      const target = event.target.value
      if (target !== '') {
        this.setState({
          inputEmail: 'email--active',
        })
      } else {
        this.setState({
          inputEmail: '',
        })
      }
    };
    password = (event) => {
      const target = event.target.value
      if (target !== '') {
        this.setState({
          inputPassword: 'password--active',
        })
      } else {
        this.setState({
          inputPassword: '',
        })
      }
    }
}


export default SignUpPage
