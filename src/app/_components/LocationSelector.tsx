import { type Location } from '@/types';
import classNames from 'classnames';

const LocationSelector = ({
  location,
  setLocation,
}: {
  location: Location;
  setLocation: (loc: Location) => void;
}) => (
  <div className="flex">
    <button
      onClick={() => setLocation('HOME')}
      className={classNames([
        'rounded-l-full p-2 pl-3',
        location === 'HOME' ? 'bg-blue-800' : 'bg-blue-600',
      ])}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="fill-white h-6 w-6"
      >
        <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
      </svg>
    </button>
    <button
      onClick={() => setLocation('OFFICE')}
      className={classNames([
        'p-2 border-l border-r border-blue-800',
        location === 'OFFICE' ? 'bg-blue-800' : 'bg-blue-600',
      ])}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="fill-white h-6 w-6"
      >
        <path d="M17,11V3H7v4H3v14h8v-4h2v4h8V11H17z M7,19H5v-2h2V19z M7,15H5v-2h2V15z M7,11H5V9h2V11z M11,15H9v-2h2V15z M11,11H9V9h2 V11z M11,7H9V5h2V7z M15,15h-2v-2h2V15z M15,11h-2V9h2V11z M15,7h-2V5h2V7z M19,19h-2v-2h2V19z M19,15h-2v-2h2V15z" />
      </svg>
    </button>
    <button
      onClick={() => setLocation('AWAY')}
      className={classNames([
        'rounded-r-full p-2 pr-3',
        location === 'AWAY' ? 'bg-blue-800' : 'bg-blue-600',
      ])}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="fill-white h-6 w-6"
      >
        <path d="M2.5 19h19v2h-19v-2zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 2.59 4.49L21 11.49c.81-.23 1.28-1.05 1.07-1.85z" />
      </svg>
    </button>
  </div>
);

export default LocationSelector;
