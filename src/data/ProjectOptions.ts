// src/data/ProjectOptions.ts

export interface SelectOption {
    value: number;
    label: string;
}

export interface PackageOption extends SelectOption {
    description: string;
}

export const PACKAGE_LEVELS = [
    {
        value: 0,
        label: 'Core',
        description:
            'Launch your business online with a professionally designed website focused on performance, credibility, and generating new customer inquiries.'
    },
    {
        value: 1,
        label: 'Professional',
        description:
            'Grow your online presence with expanded content, advanced SEO, custom integrations, and features designed to convert visitors into customers.'
    },
    {
        value: 2,
        label: 'Premium',
        description:
            'Power your business with dynamic websites, secure content management, custom dashboards, automation, and advanced functionality tailored to your workflow.'
    },
    {
        value: 3,
        label: 'Bespoke',
        description:
            'Experience our highest level of web engineering with custom software, secure backends, client portals, advanced API integrations, and fully tailored digital solutions built around your business.'
    }
] as const satisfies readonly PackageOption[];

export const INDUSTRY_SECTORS = [
    { value: 0, label: 'General' },
    { value: 1, label: 'Construction' },
    { value: 2, label: 'Landscaping' },
    { value: 3, label: 'Restaurant' },
    { value: 4, label: 'Healthcare' },
    { value: 5, label: 'Law Firm' },
    { value: 6, label: 'Technology' }
] as const satisfies readonly SelectOption[];

export type PackageLevelLabel =
    (typeof PACKAGE_LEVELS)[number]['label'];

export type IndustrySectorLabel =
    (typeof INDUSTRY_SECTORS)[number]['label'];