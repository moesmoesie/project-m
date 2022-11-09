import React from "react";

export interface ContainerType {
  scrollMargin?: number;
  backgroundColor?: string;
  paddingTop?: string;
  paddingBottom?: string;
  children?: React.ReactNode;
}

export const Container: React.FC<ContainerType> = ({ scrollMargin = "0px", paddingTop = "0px", paddingBottom = "0px", backgroundColor = "transparent", children, ...props }) => {
  return (
    <div
      style={{
        scrollMargin,
        backgroundColor,
      }}
    >
      <div
        style={{
          paddingTop,
          paddingBottom,
        }}
        className={`md:px-16 mx-auto small:max-w-lg medium:max-w-5xl relative large:max-w-7xl px-4 medium:px-10`}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
