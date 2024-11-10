
declare module 'react-typed' {
    import React from 'react';
  
    export interface TypedProps {
      strings: string[];
      typeSpeed?: number;
      backSpeed?: number;
      loop?: boolean;
      showCursor?: boolean;
    }
  
    export const Typed: React.FC<TypedProps>;
  }
  