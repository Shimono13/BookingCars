export default function Splash() {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <img
        className="w-full max-w-xs"
        src="https://immagini.alvolante.it/sites/default/files/styles/anteprima_lunghezza_640/public/serie_auto_galleria/2018/04/lamborghini_urus_ant_0.png"
        alt=""
      />
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-2xl font-bold text-center">
          Find Ideal Car for <br /> Your Next Trip
        </h1>
        <p className="text-center">
          The point of using. Lorem ipsum ishtat
          <br /> Readable content of a page.
        </p>
        <button className="rounded-full bg-primary px-6 py-2 font-bold">
          Get Started
        </button>
      </div>
    </div>
  );
}
