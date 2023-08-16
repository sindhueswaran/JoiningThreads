"use client";
import Container from "./container";
import ContactForm from "./contact-form";
import { Icon } from "@iconify/react";
import SiteMeta from "@/data/sitemeta.json";
import SectionTitle from "./section-title";
import Section from "./section";

export default function Contact() {
  return (
    <Section id="contact">
      <Container className="mx-auto">
       
          <SectionTitle>Write to us</SectionTitle> 
           <div className="mb-5">
            {SiteMeta.contact.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="email-link text-lg hover:text-gray-600"
            >
              <p className="flex justify-center content-center mb-10">
                <Icon icon={item.icon} className="w-8 h-8 mr-5" /> {item.text}
              </p>
            </a>
          ))}
        </div>
        <div className="mx-auto">
          <ContactForm />
        </div>
      </Container>
    </Section>
  );
}
