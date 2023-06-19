import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'

import { routeConfig } from 'shared/config/routes'

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(route => <Route {...route} />)}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
