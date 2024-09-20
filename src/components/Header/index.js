import {MdDarkMode, MdLightMode} from 'react-icons/md'
import ThemeContext from '../../context/ThemeContext'
import {HeaderContainer, SmHamburgBtn, SmLogoutBtn} from './styledComponents'
import './index.css'

const Header = () => {
  const renderSMNavItems = (isDarkTheme, toggleTheme) => (
    <ul className="sm-header-nav-items-ul-container">
      <li className="nav-items-li-container">
        <button
          onClick={() => toggleTheme()}
          className="nav-btn btn"
          type="button"
        >
          {isDarkTheme ? (
            <MdLightMode className="nav-dark-theme-icon" size={24} />
          ) : (
            <MdDarkMode size={24} />
          )}
        </button>
      </li>
      <li className="nav-items-li-container">
        <button className="nav-btn btn" type="button">
          <SmHamburgBtn isDarkTheme={isDarkTheme} size={24} />
        </button>
      </li>
      <button className="sm-logout-btn-icon nav-btn btn" type="button">
        <SmLogoutBtn isDarkTheme={isDarkTheme} size={24} />
      </button>
    </ul>
  )

  const renderLGNavItems = (isDarkTheme, toggleTheme) => (
    <ul className="lg-header-nav-items-ul-container">
      <li className="nav-items-li-container">
        <button
          onClick={() => toggleTheme()}
          className="nav-btn btn"
          type="button"
        >
          {isDarkTheme ? (
            <MdLightMode className="nav-dark-theme-icon" size={30} />
          ) : (
            <MdDarkMode size={30} />
          )}
        </button>
      </li>
      <li className="nav-items-li-container">
        <button className="nav-btn btn" type="button">
          <img
            className="nav-profile-icon"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
          />
        </button>
      </li>
      <button className="logout-btn btn" type="button">
        Logout
      </button>
    </ul>
  )

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, toggleTheme} = value
        return (
          <HeaderContainer
            isDarkTheme={isDarkTheme}
            className="header-main-container"
          >
            <div className="logo-container" data-testid="home">
              {isDarkTheme ? (
                <img
                  className="nav-logo-img"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                  alt="website logo"
                />
              ) : (
                <img
                  className="nav-logo-img"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="nxt watch logo"
                />
              )}
            </div>
            {renderSMNavItems(isDarkTheme, toggleTheme)}
            {renderLGNavItems(isDarkTheme, toggleTheme)}
          </HeaderContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Header
