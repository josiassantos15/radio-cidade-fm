import { IProgramCardProps } from "@/interfaces/IProgramCardProps";
import Image from "next/image";

export function ProgramCard({ program, onPlay }: IProgramCardProps) {
  return (
    <div className="card">
      <Image src={program.image} alt={program.title} />
      <div className="info">
        <h3>{program.title}</h3>
        <p>{program.description}</p>
        <button onClick={onPlay}>Ouvir Agora</button>
      </div>
    </div>
  );
}
