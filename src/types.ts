import {
  Day,
  Location as DBLocation,
  Person as DBPerson,
} from '@prisma/client';

export type Person = DBPerson | null;

export type Location = DBLocation | null;

export type LocationTask = 'adrianLocation' | 'dinaLocation';

export type Task = keyof Omit<Day, 'id' | 'name' | LocationTask>;
