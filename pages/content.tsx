import React, { useContext } from 'react';
import { GlobalStateContext } from '../State';
import Link from 'next/link';

const Content = () => {

  let ctx = useContext(GlobalStateContext);

  return (<>
      <div className="font-mono p-4">
        <div className="text-2xl">Content Page</div>
        <div>This is content page. You can only see this after login.</div>
        <div>
          The context object is <br/>
          {JSON.stringify(ctx.context)}
        </div>
        <hr/>
        <Link href="/">
          <a className="text-blue-500 hover:text-blue-800" href="#">Home</a>
        </Link>
      </div>
    </>
  );
};

export default Content;
