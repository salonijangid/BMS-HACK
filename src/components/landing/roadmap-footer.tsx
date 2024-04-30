import { type SVGProps } from "react";

const navigation = [
  
];


export default function RoadmapFooter() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">

        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} 
          </p>
        </div>
      </div>
    </footer>
  );
}
