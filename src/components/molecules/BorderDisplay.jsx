export default function BorderDisplay({ children }) {
  return (
    <div
      className="m-auto border border-2 border-white rounded-2xl aspect-square
        flex items-center justify-center"
      style={{ width: "20rem" }}
    >
      <article className="flex flex-col gap-8 p-4 items-center">
        {children}
      </article>
    </div>
  );
}
