import css from './Example.module.css';
import React, { useContext } from 'react';
import Link from 'next/link';
import { GlobalDispatchContext, GlobalStateContext } from '../../State';

export const Example: React.FC = () => {
  let send = useContext(GlobalDispatchContext);
  let ctx = useContext(GlobalStateContext);

  const userLogin = () => {
    let event = { type: 'LOGIN', data: { name: 'Jacky Chen' } };
    send(event);
    console.log(`sending`, event);
  };

  const userLogout = () => {
    send({ type: 'LOGOUT', data: null });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className={css.example}>Hello Next.js 9.3</h1>
      <p className="font-mono">With TypeScript, TailwindCSS, and inlined Critical CSS</p>

      <p className="m-4">
      </p>

      {ctx.context?.userData && (
        <>
          <div className="text-xl mb-4">Hello, {ctx.context?.userData.name}! Click the link to view
            <Link href="/content">
              <a className="text-blue-500 hover:text-blue-800">Content</a>
            </Link>
          </div>

          <button onClick={() => userLogout()}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Logout
          </button>
        </>
      )}

      {!ctx.context?.userData && (
        <>
          <button
            onClick={() =>
              userLogin()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            login
          </button>
        </>
      )}
    </div>
  );
};



