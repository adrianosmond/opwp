'use client';

import type { DayInfo, Task } from '@/types';
import LocationRow from './LocationRow';
import TaskRow from './TaskRow';

const tasks: [Task, string][] = [
  ['ollieAM', 'Ollie AM'],
  ['ellieAM', 'Ellie AM'],
  ['olliePM', 'Ollie PM'],
  ['elliePM', 'Ellie PM'],
  ['cooking', 'Cooking'],
];

const Day = ({
  id,
  label,
  dayInfo,
}: {
  id: number;
  label: string;
  dayInfo: DayInfo;
}) => {
  return (
    <>
      <h2 className="col-span-2 font-semibold sticky top-12 font-mono bg-slate-100 pb-1">
        {label}
      </h2>
      <LocationRow
        dayId={id}
        location={dayInfo.adrianLocation}
        person="ADRIAN"
      />
      <LocationRow dayId={id} location={dayInfo.dinaLocation} person="DINA" />
      {tasks.map(([task, label]) => (
        <div key={task} className="col-span-2">
          <TaskRow
            label={label}
            dayId={id}
            person={dayInfo[task]}
            task={task}
          />
        </div>
      ))}
      <div className="mb-1" />
    </>
  );
};

export default Day;
