import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../button';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="UffbrunoFlix logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>

    );
}

export default Menu;