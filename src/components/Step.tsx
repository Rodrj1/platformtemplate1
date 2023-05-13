interface Props {
  name: string;
  first: string;
  second: string;
  icon: JSX.Element;
  icon2: JSX.Element;
  i: number;
}

export default function Step({ name, first, second, icon, icon2, i }: Props) {
  return (
    <div
      className={`flex flex-col h-[35vh] xl:min-h-[60vh] items-center justify-center gap-16 skew-y-6 border-l w-[250px] border-gray-700 py-2 px-10 ${
        i == 2 && 'xl:translate-y-8'
      }
    ${i == 3 && 'xl:translate-y-[64px]'}`}
    >
      <div
        className={`rounded-full bg-gradient-to-tr from-pink-950/20 to-pink-900/10 md:absolute md:w-[240px] xl:w-[260px] xl:top-20 h-[50px] py-[20px] md:py-0 flex justify-center items-center 
        `}
      >
        <h4>{name}</h4>
      </div>

      <div
        className={`rounded-full p-3 min-w-[120px] flex justify-center items-center gap-2 h-[40px] w-max
        ${i == 1 && 'bg-violet-950/80 xl:-translate-x-[55px] text-purple-500'}
        ${
          i == 2 &&
          'xl:translate-y-[103px] xl:-translate-x-[55px] bg-indigo-950 text-blue-600'
        }
        ${i == 3 && 'xl:translate-y-[220px] bg-green-950 text-green-600'}`}
      >
        {icon}
        <span className="text-sm">{first}</span>
      </div>

      <div
        className={`md:translate-x-20 rounded-full p-3 flex justify-center w-max items-center gap-2 h-[40px]
        ${i == 1 && 'bg-violet-950/80 text-purple-500'}
        ${i == 2 && 'xl:translate-y-[115px] bg-indigo-950 text-blue-600'}
        ${i == 3 && 'xl:translate-y-[220px] bg-green-950 text-green-600'}`}
      >
        {icon2}
        <span className="text-sm">{second}</span>
      </div>
    </div>
  );
}
