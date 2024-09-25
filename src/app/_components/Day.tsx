'use client';

import { useState } from 'react';
import Slider, { type SliderPosition } from './Slider';
import Location, { type LocationOption } from './Location';

const Day = ({
  id,
  label,
  initialValues,
  handlers,
}: {
  id: number;
  label: string;
  initialValues: {
    ollieAM: SliderPosition;
    olliePM: SliderPosition;
    ellieAM: SliderPosition;
    elliePM: SliderPosition;
    cooking: SliderPosition;
    adrianLoc: LocationOption;
    dinaLoc: LocationOption;
  };
  handlers: {
    ollieAM: (dayId: number, position: SliderPosition) => void;
    olliePM: (dayId: number, position: SliderPosition) => void;
    ellieAM: (dayId: number, position: SliderPosition) => void;
    elliePM: (dayId: number, position: SliderPosition) => void;
    cooking: (dayId: number, position: SliderPosition) => void;
    adrianLoc: (dayId: number, location: LocationOption) => void;
    dinaLoc: (dayId: number, location: LocationOption) => void;
  };
}) => {
  const [ollieAM, setOllieAM] = useState<SliderPosition>(initialValues.ollieAM);
  const [olliePM, setOlliePM] = useState<SliderPosition>(initialValues.olliePM);
  const [ellieAM, setEllieAM] = useState<SliderPosition>(initialValues.ellieAM);
  const [elliePM, setElliePM] = useState<SliderPosition>(initialValues.elliePM);
  const [cooking, setCooking] = useState<SliderPosition>(initialValues.cooking);
  const [adrianLoc, setAdrianLoc] = useState<LocationOption>(
    initialValues.adrianLoc,
  );
  const [dinaLoc, setDinaLoc] = useState<LocationOption>(initialValues.dinaLoc);

  return (
    <>
      <h2 className="col-span-2 text-left font-semibold sticky top-12 font-mono bg-slate-100 pb-1">
        {label}
      </h2>
      <div className="flex justify-start">
        <Location
          location={adrianLoc}
          setLocation={(loc) => {
            setAdrianLoc(loc);
            handlers.adrianLoc(id, loc);
          }}
        />
      </div>
      <div className="flex justify-end">
        <Location
          location={dinaLoc}
          setLocation={(loc) => {
            setDinaLoc(loc);
            handlers.dinaLoc(id, loc);
          }}
        />
      </div>
      <div className="col-span-2">
        <Slider
          label="Ollie AM"
          position={ollieAM}
          setPosition={(person) => {
            setOllieAM(person);
            handlers.ollieAM(id, person);
          }}
        />
      </div>
      <div className="col-span-2">
        <Slider
          label="Ellie AM"
          position={ellieAM}
          setPosition={(person) => {
            setEllieAM(person);
            handlers.ellieAM(id, person);
          }}
        />
      </div>
      <div className="col-span-2">
        <Slider
          label="Ollie PM"
          position={olliePM}
          setPosition={(person) => {
            setOlliePM(person);
            handlers.olliePM(id, person);
          }}
        />
      </div>
      <div className="col-span-2">
        <Slider
          label="Ellie PM"
          position={elliePM}
          setPosition={(person) => {
            setElliePM(person);
            handlers.elliePM(id, person);
          }}
        />
      </div>
      <div className="col-span-2 mb-4">
        <Slider
          label="Cooking"
          position={cooking}
          setPosition={(person) => {
            setCooking(person);
            handlers.cooking(id, person);
          }}
        />
      </div>
    </>
  );
};

export default Day;
