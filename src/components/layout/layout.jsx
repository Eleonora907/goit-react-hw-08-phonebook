import { Loader } from 'components/loader/loader';
import { Navigation } from 'components/navigation/navigation';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <div>
        <Navigation />
      </div>
      <div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
