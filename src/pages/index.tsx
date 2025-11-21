import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import { Banner } from '../components/home/Banner/Banner';
import { HighlightedProgram } from '../components/home/HighlightedProgram/HighlightedProgram';
import { LatestPrograms } from '../components/home/LatestPrograms/LatestPrograms';
// import  Program from '../models/Program';

import { IProgram } from '@/interfaces/IProgram';
import Footer from '@/components/common/Footer/Footer';
import Header from '@/components/common/Header/Header';

export default function Home() {

  const latestPrograms: IProgram[] = [
    {
      id: '1',
      title: 'Programa 1',
      description: 'Descrição do Programa 1',
      image: 'https://placehold.it/400x400',
      schedule: 'Segunda a Sexta - 10h às 12h',
    },
    {
      id: '2',
      title: 'Programa 2',
      description: 'Descrição do Programa 2',
      image: 'https://placehold.it/400x400',
      schedule: 'Segunda a Sexta - 14h às 16h',
    },
    {
      id: '3',
      title: 'Programa 3',
      description: 'Descrição do Programa 3',
      image: 'https://placehold.it/400x400',
      schedule: 'Segunda a Sexta - 18h às 20h',
    },
  ];

  const highlightedProgram: IProgram = {
    id: '4',
    title: 'Programa em Destaque',
    description: 'Descrição do Programa em Destaque 1',
    image: 'https://placehold.it/800x400',
    schedule: 'Segunda a Sexta - 21h às 23h',
  };
  
  return (
    <div>
      <Header/>
      <Banner />
      <HighlightedProgram program={highlightedProgram} onPlay={function (): void {
        throw new Error('Function not implemented.');
      } } />
      {/* <LatestPrograms programs={latestPrograms} onPlay={function (program: IProgram): void {
        throw new Error('Function not implemented.');
      } } 
      /> */}
      <Footer/>
    </div>
  );
}
