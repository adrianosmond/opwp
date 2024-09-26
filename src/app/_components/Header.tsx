const Avatar = ({ initials }: { initials: string }) => (
  <div className="w-10 h-10 flex justify-center items-center rounded-full bg-purple-700 text-white aspect-square font-semibold">
    {initials}
  </div>
);

const Header = () => (
  <>
    <div className="flex justify-center sticky top-0 bg-slate-100 pt-2">
      <Avatar initials="AO" />
    </div>
    <div className="flex justify-center sticky top-0 bg-slate-100 pt-2">
      <Avatar initials="DP" />
    </div>
  </>
);

export default Header;
