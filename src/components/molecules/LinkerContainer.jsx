import React from 'react'

export function LinkerContainer({ text,children }){
  return (
    <section className="w-full flex flex-1 justify-center items-center gap-2 text-white">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold">{text}</h2>
        {children}
      </div>
    </section>
  );
};
