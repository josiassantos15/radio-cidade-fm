import React from 'react';
import styles from './Footer.module.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        {/* <Image src="/logo.png" width={360} height={360} alt="Logo da Rádio" /> */}
        <p className={styles.slogan}>O som que toca a sua vida</p>
      </div>
      <div className={styles.contactContainer}>
        <h3>Contato</h3>
        <p>(11) 1234-5678</p>
        <p>contato@radioweb.com.br</p>
      </div>
      <div className={styles.socialContainer}>
        <h3>Redes Sociais</h3>
        <div className={styles.iconsContainer}>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
