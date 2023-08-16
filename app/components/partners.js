import Image from "next/image";
import Container from "./container";
import PartnersData from "@/data/partners.json";
import Section from "./section";
import SectionTitle from "./section-title";

export default function Partners() {
  return (
    <Section id="partners">
      <Container>
        <SectionTitle>Our partners</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PartnersData.map((item, index) => {
            return (
              <div className=" " key={index}>
                <Image
                className="mx-auto"
                  src={item.image}
                  alt={item.title}
                  width={240}
                  height={240}
                />
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
