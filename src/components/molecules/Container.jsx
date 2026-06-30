export default function Container({ children }) {
  return (
    <div className="w-full flex flex-col min-h-full justify-center">
      {children}
    </div>
  );
}