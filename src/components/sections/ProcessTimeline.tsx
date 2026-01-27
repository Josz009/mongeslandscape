"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui";
import { SectionHeader, ProcessStep } from "@/components/shared";

export function ProcessTimeline() {
  const t = useTranslations("process");

  const steps = [0, 1, 2, 3];

  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionHeader
          title={t("sectionTitle")}
          subtitle={t("sectionSubtitle")}
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
          {steps.map((index) => (
            <ProcessStep
              key={index}
              number={t(`steps.${index}.number`)}
              title={t(`steps.${index}.title`)}
              description={t(`steps.${index}.description`)}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
