import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full  p-24">
      <div className="text-right self-end pr-20">
        <h1>
          <span className="">Sway </span> through
        </h1>
        <h1>the crowd</h1>
        <h1>to an empty</h1>
        <h1>space</h1>
      </div>
      <ul className="w-2/3 text-2xl leading-10 list-disc">
        <li>
          <span className="font-bold">Homework:</span> understanding what you
          want and the world you operate in.
        </li>
        <li>
          <span className="font-bold">Strategy and creative:</span> find that
          “empty space”. Programmes and experiences: from the right tactical mix
          - social media, PR, outdoor, whatever – to developing brand-specific
          experiences or properties.
        </li>
        <li>
          <span className="font-bold">Content:</span> the key to telling
          compelling stories – and persuading others.
        </li>
        <li>
          <span className="font-bold">Advisory:</span> brand and communication
          advice, crisis communications.
        </li>
        <li>
          <span className="font-bold">Measurement:</span> did it all work out?
        </li>
      </ul>
    </main>
  );
}

export const intro = (
  <h2 className="w-3/4 text-center">
    We develop <span className="text-orange-600">strategies</span> and{" "}
    <span className="text-orange-600">content</span> that take you to an “empty
    space”. Where you can be visible and understood. Away from the hustle and
    noise of an overcrowded marketplace. To get there, we do the simple things
    right.
  </h2>
);
