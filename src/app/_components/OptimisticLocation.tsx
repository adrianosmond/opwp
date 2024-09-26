import { Location, Person } from '@/types';
import { useState } from 'react';
import LocationSelector from './LocationSelector';
import { handleLocationChange } from '@/utils/actions';

const OptimisticLocation = ({
  dayId,
  person,
  initialValue,
}: {
  dayId: number;
  person: NonNullable<Person>;
  initialValue: Location;
}) => {
  const [location, setLocation] = useState<Location>(initialValue);

  return (
    <LocationSelector
      location={location}
      setLocation={(loc) => {
        setLocation(loc);
        handleLocationChange(dayId, person, loc);
      }}
    />
  );
};

export default OptimisticLocation;
