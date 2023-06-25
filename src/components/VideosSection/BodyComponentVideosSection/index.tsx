import { Agency } from "./Agency";
import { Chatbot } from "./Chatbot";
import { Container } from "./styles";
import { PaidMedia } from "./PaidMedia";
import { LeadGeneration } from "./LeadGeneration";
import { DigitalMarketing } from "./DigitalMarketing";

interface BodyComponentVideosSectionProps {
  activeComponent: string;
}

export function BodyComponentVideosSection(
  {
    activeComponent
  }: BodyComponentVideosSectionProps) {

  return (
    <Container>
      {activeComponent === "Agency" && <Agency />}
      {activeComponent === "Chatbot" && <Chatbot />}
      {activeComponent === "DigitalMarketing" && <DigitalMarketing />}
      {activeComponent === "LeadGeneration" && <LeadGeneration />}
      {activeComponent === "PaidMedia" && <PaidMedia />}
    </Container>
  );
}