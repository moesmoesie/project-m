import { Container, ModuleContainer, RichText } from "../../components";
import React from "react";
import { ModuleZod } from "../../types";
import { z } from "zod";
import { RichTextZod } from "../../types";

export const LandingHome: React.FC<LandingHomeType> = (props) => {
  return (
    <ModuleContainer module={props?.module}>
      <Container>
        <h1>
          <RichText value={props.title} />
        </h1>
      </Container>
    </ModuleContainer>
  );
};

export const LandingHomeZod = ModuleZod.extend({
  _type: z.literal("landing-home"),
  title: RichTextZod,
});

export type LandingHomeType = z.infer<typeof LandingHomeZod>;
