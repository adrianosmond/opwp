'use client';

import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useOptimistic, useTransition } from 'react';
import { handleTaskChange } from '@/utils/actions';
import type { Person, Task } from '@/types';

const TaskRow = ({
  dayId,
  label,
  task,
  person,
}: {
  dayId: number;
  label: string;
  task: Task;
  person: Person;
}) => {
  const [, startTransition] = useTransition();
  const [optimisticPerson, updateOptimisticPerson] = useOptimistic<
    Person,
    Person
  >(person, (_, p) => p);
  const setPerson = (person: Person) => {
    startTransition(async () => {
      updateOptimisticPerson(person);
      await handleTaskChange(dayId, task, person);
    });
  };

  return (
    <div
      onClick={(e) => {
        if (e.clientX < window.innerWidth / 3) {
          setPerson('ADRIAN');
        } else if (e.clientX > (2 * window.innerWidth) / 3) {
          setPerson('DINA');
        } else {
          setPerson(null);
        }
      }}
      className={classNames({
        'rounded-full shadow-inner bg-slate-200 border border-slate-300 flex':
          true,
        'justify-start': optimisticPerson === 'ADRIAN',
        'justify-end': optimisticPerson === 'DINA',
        'justify-center': optimisticPerson === null,
      })}
    >
      <motion.div
        className={classNames({
          'rounded-full bg-white m-1 border border-slate-300 shadow-sm px-2':
            true,
        })}
        layout
      >
        {label}
      </motion.div>
    </div>
  );
};

export default TaskRow;
