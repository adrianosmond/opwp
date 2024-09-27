import { Person, Task } from '@/types';
import { useOptimistic, useTransition } from 'react';
import Slider from './Slider';
import { handleTaskChange } from '@/utils/actions';

const OptimisticTask = ({
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

  return (
    <Slider
      label={label}
      person={optimisticPerson}
      setPerson={(person) => {
        startTransition(async () => {
          updateOptimisticPerson(person);
          await handleTaskChange(dayId, task, person);
        });
      }}
    />
  );
};

export default OptimisticTask;
