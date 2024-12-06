import { Location, Person } from '@prisma/client';
import { prisma } from './db';
import { EMPTY_DAY } from '@/constants';
import type { Task } from '@/types';

export const getWeek = () =>
  prisma.day.findMany({
    take: 5,
  });

export const setLocation = (
  dayId: number,
  person: Person,
  location: Location | null,
) => {
  const property: 'adrianLocation' | 'dinaLocation' =
    person === 'ADRIAN' ? 'adrianLocation' : 'dinaLocation';

  return prisma.day.update({
    data: {
      [property]: location,
    },
    where: {
      id: dayId,
    },
  });
};

export const setTask = (dayId: number, task: Task, person: Person | null) =>
  prisma.day.update({
    data: {
      [task]: person,
    },
    where: {
      id: dayId,
    },
  });

export const resetAllDays = () =>
  prisma.day.updateMany({
    data: EMPTY_DAY,
  });
