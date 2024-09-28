import {
  Day,
  Location as DBLocation,
  Person as DBPerson,
} from '@prisma/client';

export type Person = DBPerson | null;

export type Location = DBLocation | null;

export type LocationTask = 'adrianLocation' | 'dinaLocation';

export type Task = keyof Omit<Day, 'id' | 'name' | LocationTask>;

export type DayInfo = Record<Task, Person> & Record<LocationTask, Location>;

export type Week = Day[];
