import axios from "axios";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { useState } from "react";

const Home = () => {
  const [url, setUrl] = useState(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    const url = formdata.get("url");
    const name = formdata.get("alias");
    if (
      (typeof url === "string" && url.trim() === "") ||
      (typeof name === "string" && name.trim() === "")
    ) {
      toast.error("URL or Alias is empty");
      return;
    }

    try {
      const response = await axios.post("/api/url", { url, name });
      toast.success(response.data.message);
      setUrl(response.data.url);
    } catch (error) {
      if (axios.isAxiosError(error)) {
          toast.error(error.response?.data.error);
          console.log(error);
          
      } else if (error instanceof Error) {
        toast.error("Somthing went wrong");
      }
    }
  };
  return (
    <div className="primary-content min-h-screen flex justify-center items-center flex-col gap-10">
      <h1 className="text-center font-bold">URL shortner</h1>
      <form onSubmit={handleSubmit}>
        <div className="w-64 flex flex-col gap-5">
          <label className="input input-bordered flex items-center gap-2">
            URL
            <input
              type="text"
              className="grow"
              placeholder="  example.com"
              name="url"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            localhost://
            <input
              type="text"
              className="grow"
              placeholder="  alias name"
              name="alias"
            />
          </label>
          <input type="submit" className="btn btn-neutral" />

          {url && <a href={url}>{url}</a>}
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default Home;
