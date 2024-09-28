'use client';

import { useOptimistic, useTransition } from 'react';
import { resetWeek } from '@/utils/actions';
import { EMPTY_DAY } from '@/constants';
import type { Week } from '@/types';
import Day from './Day';

const Week = ({ week }: { week: Week }) => {
  const [optimisticWeek, updateOptimisticWeek] = useOptimistic<Week, Week>(
    week,
    (_, val) => val,
  );
  const [, startTransition] = useTransition();

  return (
    <>
      {optimisticWeek.map((day) => {
        const { id, name, ...dayInfo } = day;
        return <Day key={id} id={id} label={name} dayInfo={dayInfo} />;
      })}

      <button
        className="p-2 bg-blue-600 text-white rounded-md font-semibold mt-4 col-span-2"
        onClick={() => {
          startTransition(async () => {
            updateOptimisticWeek(
              optimisticWeek.map((day) => ({ ...day, ...EMPTY_DAY })),
            );
            await resetWeek();
          });
        }}
      >
        Reset week
      </button>
    </>
  );
};

export default Week;
