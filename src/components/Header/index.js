import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header(props) {
    return (
        <header className={styles.Header}>
        <nav>
            <ul>
                {
                    props.user ?
                    <>
                        <li>
                            <Link to="" onClick={props.handleLogout}>Logout</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>

                    </>
                    :
                    <>
                         <li>
                            <Link to="/login">Login</Link> 
                        </li>
                        <li>
                            <Link to="/signup">Signup</Link>  
                        </li>

                    </>
                }
            </ul>
        </nav>
        <div>
        <p>Hawaii</p>
                <ul>
                    <li><Link to="/pages/StatesPage/Hawaii">Hawaii</Link></li>
                </ul>

                <p>Alaska</p>
                <ul>
                    <li><Link to="/pages/StatesPage/Alaska">Alaska</Link></li>
                </ul>

                <p>California</p>
                <ul>
                    <li><Link to="/pages/StatesPage/California">California</Link></li>
                </ul>

                <p>Oregon</p>
                <ul>
                    <li><Link to="/pages/StatesPage/Oregon">Oregon</Link></li>
                </ul>

                <p>Washington</p>
                <ul>
                    <li><Link to="/pages/StatesPage/Washington">Washington</Link></li>
                </ul>

                <p>Texas</p>
                <ul>
                    <li><Link to="/pages/StatesPage/Texas">Texas</Link></li>
                </ul>

                <p>Florida</p>
                <ul>
                    <li><Link to="/pages/StatesPage/Florida">Florida</Link></li>
                </ul>

                <p>North Carolina</p>
                <ul>
                    <li><Link to="/pages/StatesPage/NorthCarolina">North Carolina</Link></li>
                </ul>

                <p>Virginia</p>
                <ul>
                    <li><Link to="/pages/StatesPage/Virginia">Virginia</Link></li>
                </ul>

                <p>New Jersey</p>
                <ul>
                    <li><Link to="/pages/StatesPage/NewJersey">New Jersey</Link></li>
                </ul>

                <p>New York</p>
                <ul>
                    <li><Link to="/pages/StatesPage/NewYork">New York</Link></li>
                </ul>

                <p>Rhode Island</p>
                <ul>
                    <li><Link to="/pages/StatesPage/RhodeIsland">Rhode Island</Link></li>
                </ul>

                <p>New Hampshire</p>
                <ul>
                    <li><Link to="/pages/StatesPage/NewHampshire">New Hampshire</Link></li>
                </ul>
                
                <p>Maine</p>
                <ul>
                    <li><Link to="/pages/StatesPage/Maine">Maine</Link></li>
                </ul>
        </div>
        </header>
    )
};

    

export default Header;