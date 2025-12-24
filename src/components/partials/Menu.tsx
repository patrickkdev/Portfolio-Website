import { Theme, useTheme } from '@/hooks/use-theme';
import { Dialog, DialogBackdrop, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useMemo, useState } from 'react';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import { HiMenuAlt3 } from 'react-icons/hi';
import { contactSectionID } from './ContactSection';
import { worksSectionID } from './RecentWorkSection';

const Menu = () => {
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();
  const isIndexPage = useMemo(() => router.pathname === '/', [router.pathname]);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 400) {
        setScrolledPastHero(true);
      } else {
        setScrolledPastHero(false);
      }

      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="navbar" className={classNames('mx-auto w-full md:max-w-7xl header fixed left-0 right-0 md:top-1 z-30')}>
      <div className={classNames('flex h-16 items-center p-2 md:pr-6 md:rounded-lg transition-all duration-300 ease-out', { 'md:shadow-md backdrop-blur bg-white dark:bg-[#151A23] dark:ring-1 dark:ring-white/5 backdrop-opacity-70': scrolled })}>
        <Link href="/" className="flex items-center gap-3 overflow-hidden">
          <Image
            src="/images/avatar/me.png"
            width={50}
            height={50}
            alt="avatar"
            className={classNames(
              'aspect-square rounded object-cover transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
              {
                '-translate-x-6 opacity-0 w-0': !scrolledPastHero,
                'translate-x-0 opacity-100 w-[50px]': scrolledPastHero || (!isIndexPage && scrolled),
              }
            )}
          />
          <span
            className={classNames(
              'transition-all duration-300 text-2xl font-bold ease-[cubic-bezier(0.22,1,0.36,1)]',
              { 'translate-x-0': scrolledPastHero }
            )}
          >
            Patrick Ferreira
          </span>
        </Link>

        <ul className="ml-auto hidden items-center md:flex">
          <li>
            <a href={`/#${worksSectionID}`} className={classNames('inline-block px-4 font-semibold transition-colors duration-300 hover:text-primary-600 hover:underline cursor-pointer')}>
              Trabalhos
            </a>
          </li>          
          <li>
            <a href={`/#${contactSectionID}`} className={classNames('inline-block px-4 font-semibold  transition-colors duration-150 hover:text-primary-600 hover:underline cursor-pointer')}>
              Contato
            </a>
          </li>
        </ul>
        <button
          type="button"
          className="ml-auto transition-colors duration-150 hover:text-primary-500 md:-mt-0.5 md:ml-3"
          onClick={() => toggleTheme()}
        >
          {theme === Theme.LIGHT ? <BsMoonStars size={20} /> : <BsSun size={20} />}
        </button>
        <button
          type="button"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="ml-5 flex text-gray-700 dark:text-gray-200 md:hidden"
        >
          <HiMenuAlt3 size={24} />
        </button>
      </div>
      {/* Mobile menu */}
      <Transition show={sidebarOpen} as={React.Fragment}>
        <Dialog as="div" className="fixed inset-0 z-40 flex md:hidden" onClose={setSidebarOpen}>
          <TransitionChild
            as={React.Fragment}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <DialogBackdrop className="fixed inset-0 bg-black/40" aria-hidden="true" />
          </TransitionChild>
          <TransitionChild
            as={'div'}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          ></TransitionChild>
          <TransitionChild
            as={'div'}
            enter="transition ease-in-out duration-300 transform origin-right"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform origin-right"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <DialogPanel className="relative flex h-full w-full min-w-[12rem] flex-1 flex-col bg-[#f9f9ff] pt-5 dark:bg-gray-800">
              <div className="flex h-full flex-col overflow-y-auto">
                <nav className="mt-2 space-y-1 px-2">
                  <a
                    href={`/#${worksSectionID}`}
                    onClick={() => setSidebarOpen(false)}
                    className={classNames('group flex items-center px-2 py-2 text-2xl font-medium transition-colors duration-150 hover:text-primary-600',)}
                  >
                    Trabalhos
                  </a>
                  
                  <a
                    href={`/#${contactSectionID}`}
                    onClick={() => setSidebarOpen(false)}
                    className={classNames('group flex items-center px-2 py-2 text-2xl font-medium transition-colors duration-150 hover:text-primary-600')}
                  >
                    Contato
                  </a>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
          <div className="w-14 flex-shrink-0" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition>
    </header>
  );
};

export default Menu;
