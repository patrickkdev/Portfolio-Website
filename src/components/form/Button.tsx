import classNames from 'classnames';
import React from 'react';

interface Props {
  href?: string;
  target?: string;
  download?: boolean;
  type?: 'button' | 'submit';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  rainbow?: boolean
}

const Button: React.FC<Props> = ({
  href,
  target,
  download,
  type = 'submit',
  children,
  className,
  onClick,
  rainbow
}) => {
  return (
    <div className={classNames(rainbow && 'rainbow relative z-0 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100', className)}>
      {href ? (
        <a href={href} download={download} className={'btn'} onClick={onClick} target={target} rel="noreferrer">
          {children}
        </a>
      ) : (
        <button type={type} onClick={onClick} className={'btn'}>
          {children}
        </button>
      )}
    </div>
  );
};

export default Button;
