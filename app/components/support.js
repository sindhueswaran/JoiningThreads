// "use client"
import Container from "./container";
import Image from "next/image";
import SupportData from "@/data/support.json";
import SectionTitle from "./section-title";
import Section from "./section";

export default function Support() {
  return (
    <Section id="support">
      <Container>
        <SectionTitle>{SupportData.supporttitle}</SectionTitle>
        <div className="grid md:grid-cols-3 gap-8 row support-items">
          {SupportData.supportitems.map((item, index) => (
            <div key={index} className="">
              <Image
                className="mx-auto"
                src={item.image}
                alt={item.text}
                width={200}
                height={200}
              />
              <p className="text-center">{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
