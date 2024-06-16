type DataProps = {
  name: string
  description?: string
  creator?: string
  bg?: string
  icon: string
};

export const PackContainer: React.FC<DataProps> = ({ name, description, creator, bg, icon }) => {
  return (
    <div className="w-80 bg-black rounded-xl drop-shadow-xl hover:scale-105 transition-all cursor-pointer">
      <div style={{ backgroundImage: `url(${bg})`, width: '320px', height: '400px', backgroundSize: 'cover'}} className="z-10 w-72 h-56 flex flex-col rounded-xl">
        <div className="w-[320px] h-[400px] bg-black/70 rounded-xl flex flex-col justify-end p-6">
          <p className="text-4xl font-bold">{name}</p>
          <p className="text-sm">{description}</p>
          <div className="flex items-center gap-1 mt-2">
            <img src={icon} className="w-6 rounded-full"/>
            <p className="text-sm">{creator}</p>
          </div>
        </div>
      </div>
    </div>
  );
};