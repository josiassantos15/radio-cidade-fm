// import { Program } from '../../models/Program';
// import { ProgramCard } from '../programming/ProgramCard/ProgramCard';
// import styles from './LatestPrograms.module.css';

// interface LatestProgramsProps {
//   // programs: Program[];
// }

// export function LatestPrograms({ programs }: LatestProgramsProps) {
//   return (
//     <div className={styles.latestPrograms}>
//       <h2>Últimos Programas</h2>
//       <div className={styles.programs}>
//         {programs.map((program) => (
//           <ProgramCard key={program.id} program={program} />
//         ))}
//       </div>
//     </div>
//   );
// }

// import Program from '../../../models/Program';
import { ProgramCard } from '../../programming/ProgramCard/ProgramCard';
import styles from './LatestPrograms.module.css';

import { ILatestProgramsProps } from '@/interfaces/ILatestProgramProps';

export function LatestPrograms({ programs, onPlay }: ILatestProgramsProps ) {
  return (
    <div className={styles.latestPrograms}>
      <h2>Últimos Programas</h2>
      <div className={styles.programs}>
        {programs.map((program) => (
          <ProgramCard key={program.id} program={program} onPlay={() => onPlay(program)} />
        ))}
      </div>
    </div>
  );
}
