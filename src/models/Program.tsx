import React from "react";
import img from "next/image";
import styles from "./Program.module.css";

interface ProgramProps {
  title: string;
  schedule: string;
  image: string;
}

const Program: React.FC<ProgramProps> = ({ title, schedule, image }) => {
  return (
    <div className= { styles.program }>
      <img src={ image } alt = { title }/>
        <div className={ styles.details }>
          <h3 className= { styles.title }> { title } </h3>
          <p className = { styles.schedule } > { schedule } </p>
        </div>
    </div>
  );
};

export default Program;
