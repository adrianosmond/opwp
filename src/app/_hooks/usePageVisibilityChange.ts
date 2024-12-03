import { useSyncExternalStore } from 'react';

const useVisibilityChangeSubscribe = (callback: () => void) => {
  document.addEventListener('visibilitychange', callback);

  return () => {
    document.removeEventListener('visibilitychange', callback);
  };
};

const getVisibilityChangeSnapshot = () => {
  return document.visibilityState;
};

const getVisibilityChangeServerSnapshot = () => 'hidden';

export function useVisibilityChange() {
  const visibilityState = useSyncExternalStore(
    useVisibilityChangeSubscribe,
    getVisibilityChangeSnapshot,
    getVisibilityChangeServerSnapshot,
  );

  return visibilityState === 'visible';
}
