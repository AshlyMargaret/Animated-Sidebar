// box-icon.d.ts
declare module 'box-icon' {
    import React from 'react';
  
    interface BoxIconProps {
      className?: string;
      size?: string;
      name?: string;
      type?: string;
      color?: string;
      animation?: string;
      rotate?: string;
    }
  
    const BoxIcon: React.FC<BoxIconProps>;
  
    export default BoxIcon;
  }
  