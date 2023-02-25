import React, { useEffect, useState } from 'react';

import { AiOutlineClose } from 'react-icons/ai';
import { BiMenuAltRight } from 'react-icons/bi';

import { Link, useNavigate } from 'react-router-dom';
import classes from './Header.module.scss';

const Header = () => {
	const history = useNavigate();
	const [menuOpen, setMenuOpen] = useState(false);
	const [size, setSize] = useState({
		width: undefined,
		height: undefined,
	});

	useEffect(() => {
		const handleResize = () => {
			setSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		if (size.width > 768 && menuOpen) {
			setMenuOpen(false);
		}
	}, [size.width, menuOpen]);

	const menuToggleHandler = () => {
		setMenuOpen((p) => !p);
	};

	const ctaClickHandler = () => {
		menuToggleHandler();
		history.push('/page-signIn');
	};

	return (
		<header className={classes.header}>
			<div className={classes.header__content}>
				<Link to="/" className={classes.header__content__logo}>
					Farming Tracker
				</Link>
				<nav className={`${classes.header__content__nav} ${menuOpen && size.width < 768 ? classes.isMenu : ''}`}>
					<ul>
						<li>
							<a href="#!">Character Ascension</a>
							<ul className="nav-dropdown">
								<li>
									<Link to="/page-one" onClick={menuToggleHandler}>
										Ascension Gems
									</Link>
								</li>
								<li>
									<Link to="/page-two" onClick={menuToggleHandler}>
										World Boss Mats
									</Link>
								</li>
								<li>
									<Link to="/page-three" onClick={menuToggleHandler}>
										EXP Book
									</Link>
								</li>
								<li>
									<Link to="/page-four" onClick={menuToggleHandler}>
										Local Specialty
									</Link>
								</li>
							</ul>
						</li>
						<li>
							<a href="#!">Talent Ascension</a>
							<ul className="nav-dropdown">
								<li>
									<Link to="/page-five" onClick={menuToggleHandler}>
										Weekly Boss
									</Link>
								</li>
								<li>
									<Link to="/page-six" onClick={menuToggleHandler}>
										Talent Books
									</Link>
								</li>
							</ul>
						</li>
						<li>
							<a href="#!">Common Ascension Materials</a>
							<ul className="common-asc-nav-dropdown">
								<li>
									<Link to="/page-seven" onClick={menuToggleHandler}>
										General Drops
									</Link>
								</li>
								<li>
									<Link to="/page-eight" onClick={menuToggleHandler}>
										Elite Drops
									</Link>
								</li>
							</ul>
						</li>
						<li>
							<Link to="/page-nine" onClick={menuToggleHandler}>
								Wish Calculator
							</Link>
						</li>
					</ul>
					<button onClick={ctaClickHandler}>Sign In</button>
				</nav>
				<div className={classes.header__content__toggle}>{!menuOpen ? <BiMenuAltRight onClick={menuToggleHandler} /> : <AiOutlineClose onClick={menuToggleHandler} />}</div>
			</div>
		</header>
	);
};

export default Header;
