import classNames from 'classnames';

type Props = {
  progress: number;
  className?: string;
  fillClassName?: string;
};

const ProgressBar = ({ progress, className, fillClassName }: Props) => {
  return (
    <div className={classNames('h-2 w-full overflow-hidden rounded-md bg-gray-200 dark:bg-gray-700', className)}>
      <div className={classNames('h-3', fillClassName)} style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
