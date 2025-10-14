import React from 'react';
import styles from '@/styles/modules/HeroBackground.module.scss';
import {
  FiBarChart2,
  FiBell,
  FiCircle,
  FiCloud,
  FiCode,
  FiHexagon,
  FiPieChart,
  FiStar,
  FiTriangle,
} from 'react-icons/fi';

const HeroBackground = () => {
  return (
    <>
      <FiBarChart2
        size={30}
        className="absolute top-60 left-10 hidden text-gray-400 dark:text-gray-500 sm:inline-block md:left-24"
      />
      <FiBell
        size={30}
        className="animate-bell absolute top-28 right-2/3 hidden text-gray-400 dark:text-gray-500 sm:inline-block"
      />
      <FiCode
        size={30}
        className="absolute top-48 right-1/2 hidden animate-bounce text-gray-500 dark:text-gray-400 sm:inline-block"
      />
      <FiPieChart
        size={30}
        className="animate-move absolute bottom-10 right-20 hidden text-gray-400 dark:text-gray-500 sm:inline-block md:right-48"
      />
      <FiStar
        size={30}
        className="absolute top-36 right-10 hidden text-gray-500 dark:text-gray-400 sm:inline-block md:right-24"
      />
      <FiTriangle
        size={30}
        className="animate-move-rotate absolute top-1/3 right-1/4 hidden text-gray-600 dark:text-gray-300 sm:inline-block"
      />
      <FiCloud
        size={30}
        className="absolute bottom-48 left-2/3 hidden animate-pulse text-gray-400 dark:text-gray-500 sm:inline-block"
      />
      <FiCircle
        size={30}
        className="absolute bottom-20 left-16 hidden animate-bounce text-gray-400 dark:text-gray-500 sm:inline-block md:left-40"
      />
      <FiHexagon
        size={30}
        className="absolute top-96 left-1/4 hidden animate-spin text-gray-600 dark:text-gray-300 sm:inline-block"
      />
      <ul className={styles.circles}>
        <li className="bg-gray-300 dark:bg-gray-600"></li>
        <li className="bg-gray-300 dark:bg-gray-600"></li>
        <li className="bg-gray-300 dark:bg-gray-600"></li>
        <li className="bg-gray-300 dark:bg-gray-600"></li>
        <li className="bg-gray-400 dark:bg-gray-500"></li>
        <li className="bg-gray-500 dark:bg-gray-400"></li>
        <li className="bg-gray-600 dark:bg-gray-300"></li>
        <li className="bg-gray-600 dark:bg-gray-300"></li>
        <li className="bg-gray-600 dark:bg-gray-300"></li>
        <li className="bg-gray-600 dark:bg-gray-300"></li>
      </ul>
    </>
  );
};

export default HeroBackground;
