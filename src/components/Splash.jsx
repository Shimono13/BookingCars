export default function Splash() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col justify-evenly p-4">
        <div>
          <img
            className="w-full max-w-xs"
            src="https://immagini.alvolante.it/sites/default/files/styles/anteprima_lunghezza_640/public/serie_auto_galleria/2018/04/lamborghini_urus_ant_0.png"
            alt=""
          />
        </div>

        <div className="flex flex-col items-center gap-3">
          <h1 className="text-4xl font-bold text-center">
            Find Ideal Car for <br /> Your Next Trip
          </h1>
          <div className="flex flex-col gap-10">
            <p className="text-center">
              The point of using. Lorem ipsum ishtat
              <br /> Readable content of a page.
            </p>
            <button className="w-full rounded-full bg-primary px-6 py-2 font-bold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
