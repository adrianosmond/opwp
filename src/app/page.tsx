import { getWeek } from '@/utils/api';
import Week from './_components/Week';

export default async function Home() {
  const week = await getWeek();

  return (
    <div className="grid gap-3 grid-cols-2">
      <div className="col-span-2 flex gap-3 justify-around sticky top-0 bg-slate-100 pt-2">
        <div className="w-10 h-10 place-content-center rounded-full bg-purple-700 text-white font-semibold">
          AO
        </div>
        <div className="w-10 h-10 place-content-center rounded-full bg-purple-700 text-white font-semibold">
          DP
        </div>
      </div>
      <Week week={week} />
    </div>
  );
}
