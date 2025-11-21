import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <div className={styles.controls}>
        <button className={styles.button}>Ouvir agora</button>
        <button className={styles.button}>Baixar App</button>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link href="/">
              Início
            </Link>
          </li>
          <li>
            <Link href="/programacao">
              Programação
            </Link>
          </li>
          <li>
            <Link href="/patrocinadores">
              Patrocinadores
            </Link>
          </li>
          <li>
            <Link href="/contato">
              Contato
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.search}>
        <input type="text" placeholder="Buscar" />
        <button>Buscar</button>
      </div>
      <div className={styles.social}>
        <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
        <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
      </div>
    </header>
  );
};

export default Header;
