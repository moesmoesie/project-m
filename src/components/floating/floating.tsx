import React from "react";

export interface FloatingType {
  delay?: number;
  children: JSX.Element;
}

export const Floating: React.FC<FloatingType> = (props) => {
  return (
    <div
      style={{
        animationDelay: props.delay ? `${props.delay}s` : "0s",
      }}
      className="animate-floating"
    >
      {props.children}
    </div>
  );
};
