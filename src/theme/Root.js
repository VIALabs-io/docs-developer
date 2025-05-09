import React from 'react';
import BackgroundEffects from './BackgroundEffects';

// Root component that wraps the entire application
export default function Root({children}) {
  return (
    <>
      <BackgroundEffects />
      {children}
    </>
  );
}
