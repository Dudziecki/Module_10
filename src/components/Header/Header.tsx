import { useAuth } from '../../contexts/AuthContext';
import { Link, useLocation } from 'react-router';
import { SideKickLogo } from '../../assets/icons/SideKickLogo';
import './Header.css';
import { useEffect, useState } from 'react';

type HeaderPropsType = {
  authShow?: boolean;
};

export const Header: React.FC<HeaderPropsType> = ({ authShow = true }) => {
  let { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  user = {
    name: 'Mike',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVgPimc_RQYYbUhV3A_xER8GPifFju7nveLA&s',
  };

  const isAuthPage =
    location.pathname === '/signin' || location.pathname === '/signup';
  const showRightSection = authShow && !isAuthPage;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo" onClick={closeMenu}>
          <SideKickLogo />
          <span className="header-logo-text">sidekick</span>
        </Link>

        {showRightSection && (
          <>
            <button
              className={`burger-button ${isMenuOpen ? 'open' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            {isMenuOpen && (
              <div className="header-overlay" onClick={closeMenu}></div>
            )}

            <nav className={`header-right ${isMenuOpen ? 'mobile-open' : ''}`}>
              <div className="header-mobile-top">
                <div className="header-logo">
                  <SideKickLogo width={15} height={15} />
                  <span className="header-logo-text">sidekick</span>
                </div>
                {user && (
                  <div className="header-user-info">
                    <img src={user.avatar} className="header-user-avatar" />
                    <span>{user.name}</span>
                  </div>
                )}
              </div>

              <ul className="header-menu-list">
                {user ? (
                  <>
                    <li>
                      <Link to="/profile" onClick={closeMenu}>
                        Profile info
                      </Link>
                    </li>
                    <li>
                      <Link to="/stats" onClick={closeMenu}>
                        Statistics
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link
                        to="/signup"
                        className="header-link"
                        onClick={closeMenu}
                      >
                        Sign up
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/signin"
                        className="header-link"
                        onClick={closeMenu}
                      >
                        Sign in
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </>
        )}
      </div>
    </header>
  );
};
