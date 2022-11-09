import { Footer, FooterZod } from "./footer/footer";
import { Header, HeaderZod } from "./header/header";
import { LandingHome, LandingHomeZod } from "./landing-home/landing-home";
import { Spacer, SpacerZod } from "./spacer/spacer";
import { z } from "zod";

const Module: React.FC<ModuleType> = (props) => {
  switch (props?._type) {
    case "header":
      return <Header {...props} />;
    case "footer":
      return <Footer {...props} />;
    case "landing-home":
      return <LandingHome {...props} />;
    case "spacer":
      return <Spacer {...props} />;
    default:
      return <div />;
  }
};

export default Module;

export const ModuleZod = z.discriminatedUnion("_type", [HeaderZod, FooterZod, LandingHomeZod, SpacerZod]);

export type ModuleType = z.infer<typeof ModuleZod>;
