const Home = () => {
  return (
    <div className="primary-content min-h-screen flex justify-center items-center flex-col gap-10">
      <h1 className="text-center font-bold">URL shortner</h1>
      <div className="w-64 flex flex-col gap-5">
        <label className="input input-bordered flex items-center gap-2">
          URL
          <input type="text" className="grow" placeholder="  example.com" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          localhost://
          <input type="text" className="grow" placeholder="  alias name" />
        </label>
      </div>
    </div>
  );
};

export default Home;
