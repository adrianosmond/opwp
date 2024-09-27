import { Location, Person } from '@/types';
import { useOptimistic, useTransition } from 'react';
import LocationSelector from './LocationSelector';
import { handleLocationChange } from '@/utils/actions';

const OptimisticLocation = ({
  dayId,
  person,
  location,
}: {
  dayId: number;
  person: NonNullable<Person>;
  location: Location;
}) => {
  const [, startTransition] = useTransition();
  const [optimisticLocation, updateOptimisticLocation] = useOptimistic<
    Location,
    Location
  >(location, (_, l) => l);

  return (
    <LocationSelector
      location={optimisticLocation}
      setLocation={(loc) => {
        startTransition(async () => {
          updateOptimisticLocation(loc);
          await handleLocationChange(dayId, person, loc);
        });
      }}
    />
  );
};

export default OptimisticLocation;
