import { useState } from "react";

import styles from './Banner.module.css';

export function Banner() {
  const [playing, setPlaying] = useState(false);

  function handlePlay() {
    setPlaying(true);
  }

  return (
    <div className={styles.banner}>
      <h1>Rádio Cidade FM Web</h1>
      <p>A melhor programação para você!</p>
      {!playing && <button onClick={handlePlay}>Ouvir Agora</button>}
      {playing && <p>A rádio está tocando!</p>}
    </div>
  );
}
