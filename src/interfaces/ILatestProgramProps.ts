import { IProgram } from "./IProgram";

export interface ILatestProgramsProps {
  programs: IProgram[];
  onPlay: (program: IProgram) => void;
}