// "use client"
import Container from "./container";
import Section from "./section";
import Image from "next/image";
import WhatwedoData from "@/data/whatwedo.json";
import SectionTitle from "./section-title";

export default function Whatwedo() {
  return (
    <Section id="whatwedo">
      <Container>
        <SectionTitle>{WhatwedoData.wwdtitle}</SectionTitle>
        <div className="wwd-items my-5">
          {WhatwedoData.wwditem.map((item, index) => (
            <article
              key={index}
              className="group grid lg:grid-cols-3 gap-8 row wwd-item mb-10">
                <Image
                  className="w-full rounded-md lg:group-even:order-last"
                  src={item.image}
                  alt="Profile picture"
                  width={360}
                  height={360}
                /> 

              <div className="grid lg:col-span-2 place-content-center lg:group-even:text-right">
                <h4 className="text-3xl font-serif text-jt-primary font-semibold mb-2">
                  {item.title}
                </h4>
                <p className=" ">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
