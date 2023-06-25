import { Agency } from "./Agency";
import { Chatbot } from "./Chatbot";
import { DigitalMarketing } from "./DigitalMarketing";
import { LeadGeneration } from "./LeadGeneration";
import { PaidMedia } from "./PaidMedia";
import { Container } from "./styles";

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