import React, { Suspense, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import LazyLoader from './LazyLoader';

// Pre-import all components to avoid Vite dynamic import issues
const componentMap = {
  './sections/About': lazy(() => import('../sections/About')),
  './sections/Experiences': lazy(() => import('../sections/Experiences')),
  './sections/Projects': lazy(() => import('../sections/Projects')),
  './sections/Education': lazy(() => import('../sections/Education')),
  './sections/Contact': lazy(() => import('../sections/Contact')),
  './sections/Footer': lazy(() => import('../sections/Footer')),
};

const LazySection = ({ 
  componentPath, 
  fallback = <LazyLoader />,
  threshold = 0.1,
  rootMargin = '100px',
  className = '',
  children 
}) => {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin
  });

  // Get the lazy component from our map
  const LazyComponent = componentMap[componentPath];

  // Handle case where component path is not found
  if (!LazyComponent) {
    console.error(`Component path "${componentPath}" not found in componentMap`);
    return (
      <div className="min-h-[200px] flex items-center justify-center text-red-500">
        Error: Component not found
      </div>
    );
  }

  return (
    <motion.div
      ref={targetRef}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {isIntersecting ? (
        <Suspense fallback={fallback}>
          <LazyComponent />
        </Suspense>
      ) : (
        <div className="min-h-[200px] flex items-center justify-center">
          <div className="text-gray-500 text-sm">Scroll to load content...</div>
        </div>
      )}
    </motion.div>
  );
};

export default LazySection;
