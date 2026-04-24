import { industryLeadCopy } from "@/components/views/industry/content";
import { LeadCaptureSection } from "@/components/shared/LeadCaptureSection";

export function DemoLeadSection() {
  return (
    <LeadCaptureSection
      ariaId="industry-lead-h2"
      copy={{
        eyebrow: industryLeadCopy.eyebrow,
        titlePrefix: industryLeadCopy.titlePrefix,
        titleEmphasis: industryLeadCopy.titleEmphasis,
        body: industryLeadCopy.body,
        bullets: industryLeadCopy.checklist.map((t) => ({ title: t })),
        quickLinks: industryLeadCopy.quickLinks,
        form: {
          title: industryLeadCopy.form.title,
          subtitle: industryLeadCopy.form.subtitle,
          submit: industryLeadCopy.form.submit,
          notePrefix: industryLeadCopy.form.notePrefix,
          privacy: industryLeadCopy.form.privacy,
          emailSubject: "Delta ARBIM — Industry Demo Request",
          mailHeader: "Industry demo request",
          waText: "Hi Delta ARBIM, I'd like a demo for my industry.",
          fields: [
            {
              key: "firstName",
              kind: "text",
              label: industryLeadCopy.form.fields.firstName.label,
              placeholder: industryLeadCopy.form.fields.firstName.placeholder,
              required: industryLeadCopy.form.fields.firstName.required,
              autoComplete: industryLeadCopy.form.fields.firstName.autoComplete,
            },
            {
              key: "lastName",
              kind: "text",
              label: industryLeadCopy.form.fields.lastName.label,
              placeholder: industryLeadCopy.form.fields.lastName.placeholder,
              required: industryLeadCopy.form.fields.lastName.required,
              autoComplete: industryLeadCopy.form.fields.lastName.autoComplete,
            },
            {
              key: "email",
              kind: "email",
              label: industryLeadCopy.form.fields.email.label,
              placeholder: industryLeadCopy.form.fields.email.placeholder,
              required: industryLeadCopy.form.fields.email.required,
              autoComplete: industryLeadCopy.form.fields.email.autoComplete,
            },
            {
              key: "company",
              kind: "text",
              label: industryLeadCopy.form.fields.company.label,
              placeholder: industryLeadCopy.form.fields.company.placeholder,
              required: industryLeadCopy.form.fields.company.required,
              autoComplete: industryLeadCopy.form.fields.company.autoComplete,
            },
            {
              key: "industry",
              kind: "select",
              label: industryLeadCopy.form.fields.industry.label,
              placeholder: "Select industry",
              required: industryLeadCopy.form.fields.industry.required,
              options: industryLeadCopy.form.industryOptions,
            },
            {
              key: "phone",
              kind: "tel",
              label: industryLeadCopy.form.fields.phone.label,
              placeholder: industryLeadCopy.form.fields.phone.placeholder,
              required: industryLeadCopy.form.fields.phone.required,
              autoComplete: industryLeadCopy.form.fields.phone.autoComplete,
            },
          ],
          successTitle: industryLeadCopy.form.successTitle,
          successBody: industryLeadCopy.form.successBody,
          waPrefix: industryLeadCopy.form.waPrefix,
          waCta: industryLeadCopy.form.waCta,
        },
      }}
    />
  );
}

