import { Container, ModuleContainer } from "../../components";
import React from "react";
import { z } from "zod";
import { ModuleZod } from "../../types";

export const Footer: React.FC<FooterType> = (props) => {
  return (
    <div className="mt-auto py-6 bg-grey-500 text-white">
      <ModuleContainer module={props?.module}>
        <Container>
          <p>{props.title}</p>
        </Container>
      </ModuleContainer>
    </div>
  );
};

export const FooterZod = ModuleZod.extend({
  _type: z.literal("footer"),
  title: z.string(),
});

export type FooterType = z.infer<typeof FooterZod>;
