'use server';

import { setLocation, setTask } from '@/utils/api';
import type { Person, Location, Task } from '@/types';

export const handleLocationChange = async (
  dayId: number,
  person: NonNullable<Person>,
  location: Location,
) => {
  await setLocation(dayId, person, location);
};

export const handleTaskChange = async (
  dayId: number,
  task: Task,
  person: Person,
) => {
  await setTask(dayId, task, person);
};
