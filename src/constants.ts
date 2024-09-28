import { LocationTask, Task } from './types';

export const EMPTY_DAY: Record<Task & LocationTask, null> = {
  adrianLocation: null,
  dinaLocation: null,
  cooking: null,
  ellieAM: null,
  elliePM: null,
  ollieAM: null,
  olliePM: null,
};
