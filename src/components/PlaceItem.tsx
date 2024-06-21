import { Place } from "@prisma/client";

interface PlaceItem {
  place: Place;
}

export default function PlaceItem({
  place: { name, locationType, temperatureType },
}: PlaceItem) {
  return (
    <article className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-t-lg"
        src="https://pixabay.com/get/g67e048a0ef8a5af28b451e58a76a228776bb90cc7bbd1e7f6aabeb81c3f56f9b15efa8d3162f380ed1343fe69d90887b.jpg"
        alt=""
      />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <div className="flex">
          <p className="flex items-center gap-2 mb-2 px-3 py-1 bg-gray-200 rounded-full text-sm  font-medium capitalize text-gray-700 dark:text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="inline-block w-4 mr-1 fill-current"
            >
              <path
                className="heroicon-ui"
                d="M2.59 13.41A1.98 1.98 0 0 1 2 12V7a5 5 0 0 1 5-5h4.99c.53 0 1.04.2 1.42.59l8 8a2 2 0 0 1 0 2.82l-8 8a2 2 0 0 1-2.82 0l-8-8zM20 12l-8-8H7a3 3 0 0 0-3 3v5l8 8 8-8zM7 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
              />
            </svg>
            {temperatureType}
          </p>
          <p className="flex items-center mr-2 mb-2 px-3 py-1 bg-gray-200 rounded-full text-sm  font-medium capitalize text-gray-700 dark:text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="inline-block w-4 mr-1 fill-current"
            >
              <path
                className="heroicon-ui"
                d="M2.59 13.41A1.98 1.98 0 0 1 2 12V7a5 5 0 0 1 5-5h4.99c.53 0 1.04.2 1.42.59l8 8a2 2 0 0 1 0 2.82l-8 8a2 2 0 0 1-2.82 0l-8-8zM20 12l-8-8H7a3 3 0 0 0-3 3v5l8 8 8-8zM7 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
              />
            </svg>
            {temperatureType}
          </p>
          <p className="flex items-center mr-2 mb-2 px-3 py-1 bg-gray-200 rounded-full text-sm  font-medium capitalize text-gray-700 dark:text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="inline-block w-4 mr-1 fill-current"
            >
              <path
                className="heroicon-ui"
                d="M2.59 13.41A1.98 1.98 0 0 1 2 12V7a5 5 0 0 1 5-5h4.99c.53 0 1.04.2 1.42.59l8 8a2 2 0 0 1 0 2.82l-8 8a2 2 0 0 1-2.82 0l-8-8zM20 12l-8-8H7a3 3 0 0 0-3 3v5l8 8 8-8zM7 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
              />
            </svg>
            {temperatureType}
          </p>
        </div>
      </div>
    </article>
  );
}
