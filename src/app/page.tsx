import { getWeek } from '@/utils/api';
import Day from './_components/Day';
import Header from './_components/Header';
import ResetButton from './_components/ResetButton';

export default async function Home() {
  const week = await getWeek();

  return (
    <>
      <div className="grid gap-y-3 grid-cols-2 text-center">
        <Header />
        {week.map((day) => {
          const { id, name, ...properties } = day;
          return <Day key={id} id={id} label={name} properties={properties} />;
        })}
        <ResetButton className="mt-4 col-span-2" />
      </div>
    </>
  );
}
