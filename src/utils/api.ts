import { Location, Person } from '@prisma/client';
import { prisma } from './db';

export const getWeek = () =>
  prisma.day.findMany({
    take: 5,
  });

export const setOllieAM = (dayId: number, ollieAM: Person | null) =>
  prisma.day.update({
    data: {
      ollieAM,
    },
    where: {
      id: dayId,
    },
  });

export const setOlliePM = (dayId: number, olliePM: Person | null) =>
  prisma.day.update({
    data: {
      olliePM,
    },
    where: {
      id: dayId,
    },
  });

export const setEllieAM = (dayId: number, ellieAM: Person | null) =>
  prisma.day.update({
    data: {
      ellieAM,
    },
    where: {
      id: dayId,
    },
  });

export const setElliePM = (dayId: number, elliePM: Person | null) =>
  prisma.day.update({
    data: {
      elliePM,
    },
    where: {
      id: dayId,
    },
  });

export const setCooking = (dayId: number, cooking: Person | null) =>
  prisma.day.update({
    data: {
      cooking,
    },
    where: {
      id: dayId,
    },
  });

export const setAdrianLocation = (
  dayId: number,
  adrianLocation: Location | null,
) =>
  prisma.day.update({
    data: {
      adrianLocation,
    },
    where: {
      id: dayId,
    },
  });

export const setDinaLocation = (dayId: number, dinaLocation: Location | null) =>
  prisma.day.update({
    data: {
      dinaLocation,
    },
    where: {
      id: dayId,
    },
  });
