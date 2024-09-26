import { Person, Task } from '@/types';
import { useState } from 'react';
import Slider from './Slider';
import { handleTaskChange } from '@/utils/actions';

const OptimisticTask = ({
  dayId,
  label,
  task,
  initialValue,
}: {
  dayId: number;
  label: string;
  task: Task;
  initialValue: Person;
}) => {
  const [person, setPerson] = useState<Person>(initialValue);

  return (
    <Slider
      label={label}
      person={person}
      setPerson={(person) => {
        setPerson(person);
        handleTaskChange(dayId, task, person);
      }}
    />
  );
};

export default OptimisticTask;
