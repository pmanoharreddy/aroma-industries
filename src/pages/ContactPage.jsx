import Seo from "@/components/Seo";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/data/siteConfig";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
} from "@/components/icons";

export default function ContactPage() {
  const contactItems = [
    {
      Icon: PhoneIcon,
      label: "Phone",
      value: siteConfig.contact.phoneDisplay,
      href: siteConfig.contact.phoneHref,
    },
    {
      Icon: MailIcon,
      label: "Email",
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
    },
  ];

  return (
    <>
      <Seo
        title="Contact Us — Aroma Industries"
        description="Get in touch with Aroma Industries. Reach us by phone or email, or send an enquiry using our contact form."
        path="/contact"
      />

      <PageHeader
        eyebrow="Contact Us"
        title="Get in Touch"
        description="Have a question, a custom requirement or a wholesale enquiry? Reach out and our team will get back to you."
      />

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
            {/* Contact information */}
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-stone-900">
                Contact Information
              </h2>
              <p className="mt-3 text-stone-600">
                Choose whichever way is easiest for you — we're here to help.
              </p>

              <ul className="mt-8 space-y-5">
                {contactItems.map(({ Icon, label, value, href }) => {
                  const content = (
                    <span className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-stone-500">
                          {label}
                        </span>
                        <span className="mt-0.5 block font-medium text-stone-900">
                          {value}
                        </span>
                      </span>
                    </span>
                  );

                  return (
                    <li key={label}>
                      {href ? (
                        <a
                          href={href}
                          className="group block rounded-2xl border border-stone-200/80 bg-white p-4 transition-all duration-300 hover:border-brand-300 hover:shadow-md hover:shadow-stone-900/5"
                        >
                          {content}
                        </a>
                      ) : (
                        <span className="block rounded-2xl border border-stone-200/80 bg-white p-4">
                          {content}
                        </span>
                      )}
                    </li>
                  );
                })}

                <li className="rounded-2xl border border-stone-200/80 bg-white p-4">
                  <span className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                      <MapPinIcon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-stone-500">
                        Business Address
                      </span>
                      <span className="mt-0.5 block font-medium text-stone-900">
                        {siteConfig.contact.address}
                      </span>
                    </span>
                  </span>
                </li>
              </ul>

              {/* Working hours */}
              <div className="mt-8 rounded-2xl bg-ink p-6 text-stone-300">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-brand-300">
                    <ClockIcon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-white">
                    Working Hours
                  </h3>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {siteConfig.contact.workingHours.map((slot) => (
                    <li
                      key={slot.days}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-stone-400">{slot.days}</span>
                      <span className="font-medium text-stone-200">{slot.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={100}>
              <div className="rounded-3xl border border-stone-200/80 bg-white p-7 shadow-sm sm:p-9">
                <h2 className="font-display text-2xl font-semibold text-stone-900">
                  Send an Enquiry
                </h2>
                <p className="mt-2 text-sm text-stone-500">
                  Fill in the form below and we'll respond as soon as possible.
                </p>
                <div className="mt-7">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Map */}
      <section className="pb-20 lg:pb-24">
        <Container>
          {siteConfig.contact.mapEmbedUrl ? (
            <div className="overflow-hidden rounded-3xl border border-stone-200">
              <iframe
                src={siteConfig.contact.mapEmbedUrl}
                title="Aroma Industries location"
                className="h-80 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          ) : (
            <div className="flex h-64 items-center justify-center rounded-3xl border border-dashed border-stone-300 bg-cream text-center">
              <div>
                <MapPinIcon className="mx-auto h-8 w-8 text-stone-400" />
                <p className="mt-3 max-w-sm text-sm text-stone-500">
                  The map location will appear here once the business address is
                  added in the site configuration.
                </p>
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
