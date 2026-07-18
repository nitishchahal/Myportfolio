export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-black z-50">
      <div className="text-center">
        <h1 className="loader-text text-5xl md:text-7xl font-extrabold tracking-[0.25em] uppercase">
          JK08<span className="text-red-500">edits</span>
        </h1>

        <div className="mt-8 flex justify-center">
          <div className="loading-line"></div>
        </div>
      </div>
    </div>
  );
}