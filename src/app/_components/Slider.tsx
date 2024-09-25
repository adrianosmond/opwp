import classNames from 'classnames';
import { motion } from 'framer-motion';

export type SliderPosition = 'left' | 'right' | undefined;

const Slider = ({
  label,
  position,
  setPosition,
}: {
  label: string;
  setPosition: (pos?: SliderPosition) => void;
  position?: SliderPosition;
}) => (
  <div
    onClick={(e) => {
      if (e.clientX < window.innerWidth / 3) {
        setPosition('left');
      } else if (e.clientX > (2 * window.innerWidth) / 3) {
        setPosition('right');
      } else {
        setPosition(undefined);
      }
    }}
    className={classNames({
      'rounded-full shadow-inner bg-slate-200 border border-slate-300 flex':
        true,
      'justify-start': position === 'left',
      'justify-end': position === 'right',
      'justify-center': position === undefined,
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
