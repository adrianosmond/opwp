import { Person } from '@/types';
import classNames from 'classnames';
import { motion } from 'framer-motion';

const Slider = ({
  label,
  person,
  setPerson,
}: {
  label: string;
  person: Person;
  setPerson: (person: Person) => void;
}) => (
  <div
    onClick={(e) => {
      if (e.clientX < window.innerWidth / 3) {
        setPerson('ADRIAN');
      } else if (e.clientX > (2 * window.innerWidth) / 3) {
        setPerson('DINA');
      } else {
        setPerson(null);
      }
    }}
    className={classNames({
      'rounded-full shadow-inner bg-slate-200 border border-slate-300 flex':
        true,
      'justify-start': person === 'ADRIAN',
      'justify-end': person === 'DINA',
      'justify-center': person === null,
    })}
  >
    <motion.div
      className={classNames({
        'rounded-full bg-white m-1 border border-slate-300 shadow-sm px-2':
          true,
      })}
      layout
    >
      {label}
    </motion.div>
  </div>
);

export default Slider;
