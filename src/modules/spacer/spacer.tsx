import React from "react";
import { z } from "zod";
import { ModuleContainer } from "../../components";
import { ModuleZod } from "../../types";

export const Spacer: React.FC<SpacerType> = (props) => {
  return (
    <ModuleContainer module={props.module}>
      <></>
    </ModuleContainer>
  );
};

export const SpacerZod = ModuleZod.extend({
  _type: z.literal("spacer"),
});

export type SpacerType = z.infer<typeof SpacerZod>;
