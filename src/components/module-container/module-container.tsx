import React from "react";
import { z } from "zod";
import { ModuleZod } from "../../types";

export const ModuleContainer: React.FC<ModuleContainerType> = ({ module, children }) => {
  return (
    <div
      id={module?.identifier}
      style={
        {
          background: module?.background ?? "transparent",
          "--padding-top-small": module?.paddingTop?.small ?? "0px",
          "--padding-top-medium": module?.paddingTop?.medium ?? "0px",
          "--padding-top-large": module?.paddingTop?.large ?? "0px",
          "--padding-bottom-small": module?.paddingBottom?.small ?? "0px",
          "--padding-bottom-medium": module?.paddingBottom?.medium ?? "0px",
          "--padding-bottom-large": module?.paddingBottom?.large ?? "0px",
          "--scroll-margin-small": module?.scrollMargin?.small ?? "0px",
          "--scroll-margin-medium": module?.scrollMargin?.medium ?? "0px",
          "--scroll-margin-large": module?.scrollMargin?.large ?? "0px",
        } as React.CSSProperties
      }
      className={`
        relative 
        scroll-m-small medium:scroll-m-medium large:scroll-m-large
        pt-small-top medium:pt-medium-top large:pt-large-top
        pb-small-bottom medium:pb-medium-bottom large:pb-large-bottom
        ${module?.hide?.small ? "hidden" : "block"}
        ${module?.hide?.medium ? "medium:hidden" : "medium:block"}
        ${module?.hide?.large ? "large:hidden" : "large:block"}
      `}
    >
      {children}

      <div />
    </div>
  );
};

export default ModuleContainer;

export interface ModuleContainerType extends z.infer<typeof ModuleZod> {
  children: React.ReactNode;
}
