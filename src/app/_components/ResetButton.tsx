'use client';

import { resetWeek } from '@/utils/actions';
import classNames from 'classnames';

const ResetButton = ({ className }: { className: string }) => (
  <button
    className={classNames([
      'p-2 bg-purple-700 text-white rounded-md font-semibold',
      className,
    ])}
    onClick={() => resetWeek()}
  >
    Reset week
  </button>
);

export default ResetButton;
