import { stepItems } from "../constants";

const InformationSection = () => {
  return (
    <div className="relative mt-8 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center mb-24">
        <span className="bg-netural-900 text-pink-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Informacje
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg-mt20 tracking-wide">
          Przewodnik
          <span className="bg-gradient-to-r from-pink-300 to-pink-500 text-transparent bg-clip-text">
            {" "}
            po stronie
          </span>
        </h2>
      </div>
      <div className="relative grid lg:grid-cols-3 lg:grid-row-2 gap-10 max-w-7xl mx-auto sm:felx sm:justify-center ">
        {stepItems.map((item, i) => (
          <div
            key={i}
            className="flex flex-col border-2 border-pink-400 rounded-lg p-5 bg-cover bg-center backdrop-blur-md"
            style={{ background: `url(${item.background})` }}
          >
            <div className="uppercase h-24 bg-white/75 p-1 rounded-lg">
              <div className="flex items-center">
                {item.icon}
                <h1 className="text-3xl text-pink-500 pl-2 font-bold">
                  {i + 1}. Krok
                </h1>
              </div>
              <h2 className="text-lg font-bold">{item.header}</h2>
            </div>
            <p className="pt-3 bg-white/75 rounded-lg p-2 mt-2">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InformationSection;
