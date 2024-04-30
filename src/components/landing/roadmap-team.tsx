import Link from "next/link";

type People = {
  name: string;
  role: string;
  imageUrl: string;
  link: string;
};

const people: People[] = [
  {
    name: "Saloni Jangid",
    role: "FrontEnd Developer",
    imageUrl:
      "/images/saloni.png",
    link: "https://www.linkedin.com/in/salonijangid/",
  },
  {
    name: "Sneha Shinde",
    role: "FrontEnd & BackEnd Developer",
    imageUrl:
      "/images/sneha.png",
    link: "https://www.linkedin.com/in/sneha-shinde04/",
  },
  {
    name: "Sarika Suman",
    role: "BackEnd Developer",
    imageUrl:
      "/images/sarika.png",
    link: "https://www.linkedin.com/in/sarika-suman-0634a6278/",
  },
  {
    name: "Shreya Yadav",
    role: "UI/ UX Designer",
    imageUrl:
      "/images/shreya.png",
    link: "https://www.linkedin.com/in/shreya-yadav-21519a267/",
  },
];

export default function RoadmapTeam() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A strategic tool designed to plot your journey 
            through the AI landscape, tailored to your needs, 
            it harnesses data and tends to craft a roadmap.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={person?.imageUrl}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-gray-600">
                    {person.role}
                  </p>
                  <div className="mt-2">
                    <a
                      href={person?.link}
                      target="_blank"
                      className="text-md font-semibold text-green-600 hover:underline"
                    >
                      LinkedIn Profile &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}