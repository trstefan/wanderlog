import Tag from "./Tag";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto gap-8 p-6 md:p-12 ">
      <div className="flex flex-col items-start justify-center flex-1 space-y-4">
        <h1 className="text-2xl font-bold">
          Don&apos;t know which place to visit?
        </h1>
        <p className="text-muted-foreground font-semibold">
          Dive into your next adventure right now!
        </p>
      </div>
      <div className="flex-1 bg-[#EDF1FA] dark:bg-[#1D2333] rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
        <div className="h-full">
          <img
            src="https://img.buzzfeed.com/buzzfeed-static/static/2024-03/15/0/asset/f34ca90d22b1/sub-buzz-1828-1710462954-1.jpg?downsize=600:*&output-format=auto&output-quality=auto"
            alt="Product Image"
            className="rounded-t-md object-cover w-full aspect-[4/3]"
          />
          <div className="p-6 space-y-2">
            <h3 className="text-xl font-semibold">Seto Inland Sea</h3>

            <div className="flex flex-wrap gap-2 mt-2">
              {" "}
              <Tag tag={"Island"} />
              <Tag tag={"Beach"} />
              <Tag tag={"Cold"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
