import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1 className="text-4xl font-bold mt-44 ml-44 mb-11">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <Link
        href="week-2"
        className="ml-52 text-xl hover:text-rose-700 hover:underline"
      >
        Week 2 Assignment
      </Link>
      <br />
      <Link
        href="week-3"
        className="ml-52 text-xl hover:text-rose-700 hover:underline"
      >
        Week 3 Assignment
      </Link>
      <br />
      <Link
        href="week-4"
        className="ml-52 text-xl hover:text-rose-700 hover:underline"
      >
        Week 4 Assignment
      </Link>
    </main>
  );
}
