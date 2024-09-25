import {
  getWeek,
  setAdrianLocation,
  setCooking,
  setDinaLocation,
  setEllieAM,
  setElliePM,
  setOllieAM,
  setOlliePM,
} from '@/utils/api';
import Day from './_components/Day';
import Person from './_components/Person';
import { Person as DBPerson, Location } from '@prisma/client';
import { SliderPosition } from './_components/Slider';
import { LocationOption } from './_components/Location';

const dbPersonToSliderPosition = (person: DBPerson | null): SliderPosition => {
  if (person === DBPerson.ADRIAN) return 'left';
  if (person === DBPerson.DINA) return 'right';
  return undefined;
};

const dbLocationToLocationOption = (
  location: Location | null,
): LocationOption => {
  if (location === Location.HOME) return 'home';
  if (location === Location.AWAY) return 'away';
  if (location === Location.OFFICE) return 'office';
  return undefined;
};

const handleAdrianLocationChange = async (
  dayId: number,
  location: LocationOption,
) => {
  'use server';

  let dbLocation: Location | null = null;
  if (location === 'home') dbLocation = 'HOME';
  if (location === 'away') dbLocation = 'AWAY';
  if (location === 'office') dbLocation = 'OFFICE';

  await setAdrianLocation(dayId, dbLocation);
};

const handleDinaLocationChange = async (
  dayId: number,
  location: LocationOption,
) => {
  'use server';

  let dbLocation: Location | null = null;
  if (location === 'home') dbLocation = 'HOME';
  if (location === 'away') dbLocation = 'AWAY';
  if (location === 'office') dbLocation = 'OFFICE';

  await setDinaLocation(dayId, dbLocation);
};

const handleOllieAMChange = async (dayId: number, position: SliderPosition) => {
  'use server';

  let person: DBPerson | null = null;
  if (position === 'left') person = 'ADRIAN';
  if (position === 'right') person = 'DINA';

  await setOllieAM(dayId, person);
};

const handleOlliePMChange = async (dayId: number, position: SliderPosition) => {
  'use server';

  let person: DBPerson | null = null;
  if (position === 'left') person = 'ADRIAN';
  if (position === 'right') person = 'DINA';

  await setOlliePM(dayId, person);
};

const handleEllieAMChange = async (dayId: number, position: SliderPosition) => {
  'use server';

  let person: DBPerson | null = null;
  if (position === 'left') person = 'ADRIAN';
  if (position === 'right') person = 'DINA';

  await setEllieAM(dayId, person);
};

const handleElliePMChange = async (dayId: number, position: SliderPosition) => {
  'use server';

  let person: DBPerson | null = null;
  if (position === 'left') person = 'ADRIAN';
  if (position === 'right') person = 'DINA';

  await setElliePM(dayId, person);
};

const handleCookingChange = async (dayId: number, position: SliderPosition) => {
  'use server';

  let person: DBPerson | null = null;
  if (position === 'left') person = 'ADRIAN';
  if (position === 'right') person = 'DINA';

  await setCooking(dayId, person);
};

export default async function Home() {
  const week = await getWeek();

  return (
    <>
      <div className="grid gap-y-3 grid-cols-2 text-center">
        <div className="flex justify-center sticky top-0 bg-slate-100 pt-2">
          <Person initials="AO" />
        </div>
        <div className="flex justify-center sticky top-0 bg-slate-100 pt-2">
          <Person initials="DP" />
        </div>

        {week.map((day) => (
          <Day
            key={day.id}
            id={day.id}
            label={day.name}
            initialValues={{
              adrianLoc: dbLocationToLocationOption(day.adrianLocation),
              dinaLoc: dbLocationToLocationOption(day.dinaLocation),
              ollieAM: dbPersonToSliderPosition(day.ollieAM),
              olliePM: dbPersonToSliderPosition(day.olliePM),
              ellieAM: dbPersonToSliderPosition(day.ellieAM),
              elliePM: dbPersonToSliderPosition(day.elliePM),
              cooking: dbPersonToSliderPosition(day.cooking),
            }}
            handlers={{
              adrianLoc: handleAdrianLocationChange,
              dinaLoc: handleDinaLocationChange,
              ollieAM: handleOllieAMChange,
              olliePM: handleOlliePMChange,
              ellieAM: handleEllieAMChange,
              elliePM: handleElliePMChange,
              cooking: handleCookingChange,
            }}
          />
        ))}
      </div>
    </>
  );
}
