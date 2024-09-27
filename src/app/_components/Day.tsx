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

type Properties = Record<Task, Person> & Record<LocationTask, Location>;

const Day = ({
  id,
  label,
  properties,
}: {
  id: number;
  label: string;
  properties: Properties;
}) => {
  return (
    <>
      <h2 className="col-span-2 text-left font-semibold sticky top-12 font-mono bg-slate-100 pb-1">
        {label}
      </h2>
      <div className="flex justify-start">
        <OptimisticLocation
          dayId={id}
          location={properties.adrianLocation}
          person="ADRIAN"
        />
      </div>
      <div className="flex justify-end">
        <OptimisticLocation
          dayId={id}
          location={properties.dinaLocation}
          person="DINA"
        />
      </div>
      {tasks.map(([task, label]) => (
        <div className="col-span-2" key={task}>
          <OptimisticTask
            label={label}
            dayId={id}
            person={properties[task]}
            task={task}
          />
        </div>
      ))}
      <div className="mb-4" />
    </>
  );
};

export default Day;
