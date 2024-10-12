const InformationSection = () => {
  return (
    <div className="relative mt-8 broder-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-natural-900 text-pink-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Informacje
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg-mt20 tracking-wide">
          Łatwy przewodnik
          <span className="bg-gredient-to-r from-pink-300 to-pink-500 text-transparent bg-clip-text">
            po stronie
          </span>
        </h2>
      </div>
    </div>
  );
};

export default InformationSection;
