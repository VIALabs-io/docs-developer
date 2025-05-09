import React from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

// This component adds the background effects to all pages
export default function BackgroundEffects() {
  React.useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM) {
      return;
    }

    // Function to create and inject background elements
    const injectBackgroundElements = () => {
      // Check if we're already injected these elements
      if (document.querySelector('.global-background-effects')) {
        return;
      }

      // Create container for background effects
      const backgroundContainer = document.createElement('div');
      backgroundContainer.className = 'global-background-effects';
      backgroundContainer.style.position = 'fixed';
      backgroundContainer.style.top = '0';
      backgroundContainer.style.left = '0';
      backgroundContainer.style.width = '100%';
      backgroundContainer.style.height = '100%';
      backgroundContainer.style.pointerEvents = 'none';
      backgroundContainer.style.zIndex = '-1';
      backgroundContainer.style.overflow = 'hidden';

      // Create optimized turquoise glow (reduced size and blur for performance)
      const turquoiseGlow = document.createElement('div');
      turquoiseGlow.className = 'glow-turquoise';
      turquoiseGlow.style.top = '-200px';
      turquoiseGlow.style.right = '-100px';
      turquoiseGlow.style.width = '500px';
      turquoiseGlow.style.height = '500px';
      turquoiseGlow.style.filter = 'blur(80px)';
      turquoiseGlow.style.willChange = 'transform';
      backgroundContainer.appendChild(turquoiseGlow);

      // Create optimized magenta glow (reduced size and blur for performance)
      const magentaGlow = document.createElement('div');
      magentaGlow.className = 'glow-magenta';
      magentaGlow.style.bottom = '-200px';
      magentaGlow.style.left = '-100px';
      magentaGlow.style.width = '500px';
      magentaGlow.style.height = '500px';
      magentaGlow.style.filter = 'blur(80px)';
      magentaGlow.style.willChange = 'transform';
      backgroundContainer.appendChild(magentaGlow);

      // Create optimized center glow (reduced size and blur for performance)
      const centerGlow = document.createElement('div');
      centerGlow.className = 'glow-center';
      centerGlow.style.width = '400px';
      centerGlow.style.height = '400px';
      centerGlow.style.filter = 'blur(60px)';
      backgroundContainer.appendChild(centerGlow);

      // Create simplified diagonal lines (reduced opacity for performance)
      const diagonalLines = document.createElement('div');
      diagonalLines.className = 'diagonal-lines';
      diagonalLines.style.backgroundSize = '30px 30px'; // Increased size for better performance
      diagonalLines.style.opacity = '0.2'; // Reduced opacity
      backgroundContainer.appendChild(diagonalLines);
      
      // Grid pattern removed for performance

      // Add to document body
      document.body.appendChild(backgroundContainer);
    };

    // Inject background elements
    injectBackgroundElements();

    // Cleanup function
    return () => {
      const backgroundContainer = document.querySelector('.global-background-effects');
      if (backgroundContainer) {
        backgroundContainer.remove();
      }
    };
  }, []);

  return null;
}
