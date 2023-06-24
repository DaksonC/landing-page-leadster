import { Agency } from "./Agency";
import { Chatbot } from "./Chatbot";
import { DigitalMarketing } from "./DigitalMarketing";
import { LeadGeneration } from "./LeadGeneration";
import { PaidMedia } from "./PaidMedia";

interface BodyComponentVideosSectionProps {
  activeComponent: string;
}

export function BodyComponentVideosSection(
  {
    activeComponent
  }: BodyComponentVideosSectionProps) {

  return (
    <>
      {activeComponent === "Agency" && <Agency />}
      {activeComponent === "Chatbot" && <Chatbot />}
      {activeComponent === "DigitalMarketing" && <DigitalMarketing />}
      {activeComponent === "LeadGeneration" && <LeadGeneration />}
      {activeComponent === "PaidMedia" && <PaidMedia />}
    </>
  );
}