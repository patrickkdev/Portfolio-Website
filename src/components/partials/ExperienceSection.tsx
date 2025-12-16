import AcademicCap from '@/components/icons/AcademicCap';
import { educations } from '@/data/educations';
import { experiences } from '@/data/experiences';
import styles from '@/styles/modules/ExperienceSection.module.scss';
import classNames from 'classnames';
import { FiBriefcase } from 'react-icons/fi';

const ExperienceSection = () => {
  return (
    <div className="space-y-20">
      <header className="text-center space-y-4 max-w-3xl mx-auto">
        <h2 className="font-heading font-semibold text-5xl">Experiência e Estudos</h2>
      </header>
      <div className="grid gap-8 md:grid-cols-2">
        {/* Experience */}
        <div>
          <div className="rounded-2xl bg-white py-8 shadow-lg dark:bg-gray-700 border border-gray-200 dark:border-gray-500 border border-primary-600 dark:border-primary-200">
            <ol className={classNames(styles['experience'])}>
              {experiences.map((experience, index) => (
                <li key={index} className={styles['experience-item']}>
                  <span className="absolute -left-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-white text-primary-500 ring-8 ring-white dark:bg-gray-700 dark:ring-gray-700">
                    <FiBriefcase className="h-5" />
                  </span>
                  <time className="mb-2 block text-sm font-normal leading-none opacity-70">
                    {experience.startDate} - {experience.endDate}
                  </time>
                  <h3 className="mb-1 flex items-center text-lg font-semibold dark:text-gray-200">
                    {experience.jobTitle}
                  </h3>
                  <p className="mb-2 block text-sm font-normal leading-none opacity-70">
                    {experience.company}
                  </p>
                  <details className="group">
                    <summary className="list-none cursor-pointer">
                      <p className="line-clamp-6 group-open:line-clamp-none whitespace-pre-line text-base font-normal opacity-90 mb-2">
                        {experience.description}
                      </p>

                      <span className="text-sm font-medium group-open:hidden group-hover:underline">
                        Ler mais
                      </span>
                    </summary>
                  </details>
                </li>
              ))}
            </ol>
          </div>
        </div>
        {/* Education */}
        <div>
          <div className="rounded-2xl bg-white py-8 shadow-lg dark:bg-gray-700 border border-primary-600 dark:border-primary-200">
            <ol className={classNames(styles['education'])}>
              {educations.map((education, index) => (
                <li key={index} className={styles['education-item']}>
                  <span className="absolute -left-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-white text-primary-500 ring-8 ring-white dark:bg-gray-700 dark:ring-gray-700">
                    <AcademicCap className="h-5" />
                  </span>
                  <h3 className="mb-1 flex items-center text-lg font-semibold">
                    {education.degree}
                  </h3>
                  <p className="mb-2 block text-xs leading-none opacity-70">
                    {education.school}
                  </p>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-200">{education.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
