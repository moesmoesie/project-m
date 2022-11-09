import { Container, ModuleContainer, Image, ImageZod } from "../../components";
import React from "react";
import { z } from "zod";
import { ModuleZod } from "../../types";

export const Header: React.FC<HeaderType> = (props) => {
  return (
    <div className="fixed top-0 w-full z-[999]">
      <ModuleContainer module={{ background: "white", ...props?.module }}>
        <div className="border-b py-3 medium:py-5 border-grey-200">
          <Container>
            <h1>{props.logo}</h1>
          </Container>
        </div>
      </ModuleContainer>
    </div>
  );
};

export const HeaderZod = ModuleZod.extend({
  _type: z.literal("header"),
  logo: z.string(),
});

export type HeaderType = z.infer<typeof HeaderZod>;
