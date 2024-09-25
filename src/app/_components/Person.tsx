const Person = ({ initials }: { initials: string }) => (
  <div className="w-10 h-10 flex justify-center items-center rounded-full bg-purple-700 text-white aspect-square font-semibold">
    {initials}
  </div>
);

export default Person;
