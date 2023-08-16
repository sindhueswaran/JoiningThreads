// "use client"
import Container from "./container";
import Image from "next/image";
import TeamData from "@/data/team.json";
import Section from "./section";
import SectionTitle from "./section-title";

export default function Team() {
  return (
    <Section id="team">
      <Container>
        <SectionTitle>{TeamData.teamtitle.title}</SectionTitle>
        <p className="text-center mb-10"> {TeamData.teamtitle.text} </p>
        <div className="grid md:grid-cols-2 my-5">
          {TeamData.teammembers.map((item, index) => {
            return (
              <div key={index} className="mx-auto mb-10">
                <Image
                  className="mx-auto rounded-full"
                  src={item.image}
                  alt={item.name}
                  width={150}
                  height={150}
                />
                <div className="text-center">
                  <h4 className="text-jt-primary font-semibold text-xl mt-5 mb-2">{item.name}</h4>
                  <p className="w-5/6 mx-auto">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
