import { IProgram } from "./IProgram";

export interface IProgramCardProps {
  program: IProgram;
  onPlay: () => void;
}