import { IProgram } from '@/interfaces/IProgram';
import styles from './HighlightedProgram.module.css'
import { IHighlightedProgramProps } from '@/interfaces/HighlightedProgramProps';
import AudioPlayer from '@/components/player/AudioPlayer';

// function HighlightedProgram() {
//   return (
//     <div>
//       <h2>Programa Destaque</h2>
//       <p>Nome do Programa</p>
//       <p>Horário</p>
//       {/* <AudioPlayer audioSrc="https://url-da-sua-radio.com/stream.mp3" /> */}
//       <AudioPlayer audioSrc="https://www.radio-ao-vivo.com/radio-metropolitana-fm" />
//     </div>
//   );
// }

export function HighlightedProgram({ program, onPlay }: IHighlightedProgramProps) {
  return (
    <div className={styles.highlightedProgram}>
      <h2>Em Destaque</h2>
      <div className="program">
        <img src={program.image} alt={program.title} />
        <div className="info">
          <h3>{program.title}</h3>
          <p>{program.description}</p>
          <button onClick={onPlay}>Ouvir Agora</button>
          <h2>Programa Destaque</h2>
          <p>Nome do Programa</p>
          <p>Horário</p>
          <AudioPlayer audioSrc="https://www.radio-ao-vivo.com/radio-metropolitana-fm" />
        </div>
      </div>
    </div>
  );
}
