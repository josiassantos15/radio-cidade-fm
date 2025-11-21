import { IProgram } from "./IProgram";

export interface IHighlightedProgramProps {
  program: IProgram;
  onPlay: () => void;
}