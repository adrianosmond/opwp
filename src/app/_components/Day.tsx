'use client';

import type { Location, LocationTask, Person, Task } from '@/types';
import OptimisticLocation from './OptimisticLocation';
import OptimisticTask from './OptimisticTask';

const tasks: [Task, string][] = [
  ['ollieAM', 'Ollie AM'],
  ['ellieAM', 'Ellie AM'],
  ['olliePM', 'Ollie PM'],
  ['elliePM', 'Ellie PM'],
  ['cooking', 'Cooking'],
];

type InitialValues = Record<Task, Person> & Record<LocationTask, Location>;

const Day = ({
  id,
  label,
  initialValues,
}: {
  id: number;
  label: string;
  initialValues: InitialValues;
}) => {
  return (
    <>
      <h2 className="col-span-2 text-left font-semibold sticky top-12 font-mono bg-slate-100 pb-1">
        {label}
      </h2>
      <div className="flex justify-start">
        <OptimisticLocation
          dayId={id}
          initialValue={initialValues.adrianLocation}
          person="ADRIAN"
        />
      </div>
      <div className="flex justify-end">
        <OptimisticLocation
          dayId={id}
          initialValue={initialValues.dinaLocation}
          person="DINA"
        />
      </div>
      {tasks.map(([task, label]) => (
        <div className="col-span-2" key={task}>
          <OptimisticTask
            label={label}
            dayId={id}
            initialValue={initialValues[task]}
            task={task}
          />
        </div>
      ))}
      <div className="mb-4" />
    </>
  );
};

export default Day;
