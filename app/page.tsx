import Image from "next/image";

export default function Home() {
  const sway = "xl:-my-10 -my-5";

  return (
    <main className="flex min-h-screen flex-col gap-20 sm:gap-52 py-24">
      <section className="text-right self-end ">
        <h1 className={sway}>
          <span style={{ fontStyle: "italic" }} className="font">
            Sway{" "}
          </span>{" "}
          through
        </h1>
        <h1 className={sway}>the crowd</h1>
        <h1 className={sway}>to an empty</h1>
        <h1 className={sway} style={{ fontStyle: "italic" }}>
          space
        </h1>
      </section>
      <section>{intro}</section>
      <section>
        <ul className="sm:text-[1.4rem] text-lg max-w-[1000px] sm:leading-10 self-center flex flex-col gap-2 list-disc">
          <li>
            <span className="font-bold">Homework:</span> understanding what you
            want and the world you operate in.
          </li>
          <li>
            <span className="font-bold">Strategy and creative:</span> find that
            “empty space”. Programmes and experiences: from the right tactical
            mix - social media, PR, outdoor, whatever – to developing
            brand-specific experiences or properties.
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
      </section>
      <section className="self-start">
        <h3>Let&apos;s Dance</h3>
        <p className="underline underline-offset-4 text-lg sm:text-2xl font-light">
          peter@seriousmoonlight.co.za
        </p>
      </section>
    </main>
  );
}

export const intro = (
  <h2 className=" leading-9 sm:leading-[3.2rem] text-center">
    We develop <span className="text-orange-500">strategies</span> and{" "}
    <span className="text-orange-500">content</span> that take you to an “empty
    space”. Where you can be visible and understood. Away from the hustle and
    noise of an overcrowded marketplace. To get there, we do the simple things
    right.
  </h2>
);
