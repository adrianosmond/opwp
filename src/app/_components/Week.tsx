'use client';

import { useEffect, useOptimistic, useRef, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { resetWeek } from '@/utils/actions';
import { EMPTY_DAY } from '@/constants';
import type { Week } from '@/types';
import Day from './Day';
import { useVisibilityChange } from '../_hooks/usePageVisibilityChange';

const Week = ({ week }: { week: Week }) => {
  const router = useRouter();
  const pageVisible = useVisibilityChange();
  const firstLoad = useRef(true);
  const [optimisticWeek, updateOptimisticWeek] = useOptimistic<Week, Week>(
    week,
    (_, val) => val,
  );
  const [, startTransition] = useTransition();

  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }

    if (pageVisible) {
      router.refresh();
    }
  }, [pageVisible, router]);

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
