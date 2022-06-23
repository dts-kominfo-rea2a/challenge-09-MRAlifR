// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import "./Header.css"

const Header = () => {
	return (
		<div class="Header">
			<h1>Call a Friend</h1>
			<h5>your friendly contact app</h5>
            <p class="Header-separator">**********************************************************************************************</p>
		</div>
	);
};

export default Header;
