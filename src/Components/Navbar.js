import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    // NavbarBrand
} from 'reactstrap';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Bar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    let navAlign = "m-auto";
    let togglerAlign = null;
    let navStyles = {
        textTransform: 'uppercase',
        color: '#718096',
        letterSpacing: '0.045em',
        padding: ' 0.66rem 0 0.66rem 0',
        fontSize: '0.9em',
    }

    if (props.brand) {
        navAlign = "ml-auto"

        navStyles.padding = "1rem 0 1rem 0"
        navStyles.fontSize = "0.8em"
    }

    if (!props.brand) {
        togglerAlign = "m-auto"
    }

    return (
        <div>
            <Navbar expand="lg" light className="border-bottom px-0">
                {(props.brand ? 
                    <div className="p-0">
                        <NavLink style={{ fontSize: '1.4em' }} className="text-dark decorationNone" to="/">Neny's Blog</NavLink>
                    </div>
                : null )}

                <NavbarToggler className={togglerAlign} onClick={toggle} />

                <Collapse isOpen={isOpen} navbar>
                    <Nav className={`${navAlign}  `} navbar>
                        <NavItem>
                            <NavLink style={navStyles} className={styles.navLink}  to="/">home</NavLink>
                        </NavItem>

                        <NavItem className="mx-lg-5">
                            <NavLink style={navStyles} className={styles.navLink}  to="/allPosts">all posts</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink style={navStyles} className={styles.navLink}  to="/contact">contact</NavLink>
                        </NavItem>

                        <NavItem className="ml-lg-5">
                            <NavLink style={navStyles} className={styles.navLink}  to="/about">about</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Bar;
