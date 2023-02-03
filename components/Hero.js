export default function Hero(props) {
  return (
    <>
      <div id="hero" className="mb-5 md:mb-5">
        <div
          className={
            props.img
              ? props.img + " h-80 bg-cover bg-left relative"
              : "bg-hero-image h-80 bg-cover bg-left relative"
          }
        >
          <div className="container mx-auto px-5 md:px-12 xl:px-40 flex flex-col h-full items-center md:items-start justify-center ">
            <div className="text-4xl md:text-7xl font-extrabold pb-0 md:pb-5 text-white">
              {props.first}
            </div>
            <div className="text-4xl md:text-7xl font-extrabold pb-0 md:pb-5 text-white">
              {props.sec}
            </div>
          </div>
          <div className="bg-pattren-image w-full h-full bg-right-top bg-repeat-y opacity-50 bg-fixed absolute top-0 right-0"></div>
        </div>
      </div>
    </>
  );
}
