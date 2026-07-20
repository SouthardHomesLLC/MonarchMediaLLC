// src/data/ServicePackages.ts

import type { PackageLevelLabel } from '@data/ProjectOptions';

export type ServicePackageBillingType =
    | 'starting-at'
    | 'custom';

export interface ServicePackage {
    id: string;
    packageLevel: PackageLevelLabel;
    name: string;
    tagline: string;
    basePrice?: number;
    billingType: ServicePackageBillingType;
    priceSuffix?: string;
    summary: string;
    idealFor: string;
    features: readonly string[];
    featured?: boolean;
    ctaLabel: string;
}

const servicePackages = [
    {
        id: 'core',
        packageLevel: 'Core',
        name: 'Core',
        tagline: 'Build a professional foundation.',
        basePrice: 1800,
        billingType: 'starting-at',
        summary:
            'A focused, high-performance website designed to establish credibility and help customers connect with your business.',
        idealFor:
            'Startups, independent professionals, contractors, and small local businesses.',
        features: [
            'Up to 3 custom pages',
            'Contact form integration',
            'Responsive custom design',
            'Foundational on-page SEO',
            'Local business schema',
            'Performance and image optimization',
            'Analytics setup',
            'Domain and deployment configuration',
            'Two revision rounds'
        ],
        ctaLabel: 'Start Your Project'
    },
    {
        id: 'professional',
        packageLevel: 'Professional',
        name: 'Professional',
        tagline: 'Expand your reach and generate leads.',
        basePrice: 3500,
        billingType: 'starting-at',
        summary:
            'An expanded business website with dedicated service content, lead-generation features, and a stronger search presence.',
        idealFor:
            'Established businesses with multiple services, locations, or portfolio needs.',
        features: [
            'Up to 7 custom pages',
            'Everything included in Core',
            'Dedicated service pages',
            'Static gallery or portfolio',
            'Expanded SEO structure',
            'Advanced contact or quote form',
            'Review and social integrations',
            'Three revision rounds'
        ],
        featured: true,
        ctaLabel: 'Grow Your Business'
    },
    {
        id: 'premium',
        packageLevel: 'Premium',
        name: 'Premium',
        tagline: 'Turn your website into a business tool.',
        basePrice: 6500,
        billingType: 'starting-at',
        summary:
            'A dynamic website with content management, advanced functionality, and integrations tailored to your daily operations.',
        idealFor:
            'Growing businesses that regularly update content or need automated digital workflows.',
        features: [
            'Everything included in Professional',
            'Dynamic content collections',
            'CMS or administrative dashboard',
            'Secure administrator authentication',
            'Database integration',
            'Advanced forms and workflows',
            'Third-party integrations',
            'Custom interactive elements',
            'Four revision rounds'
        ],
        ctaLabel: 'Explore Premium'
    },
    {
        id: 'bespoke',
        packageLevel: 'Bespoke',
        name: 'Bespoke',
        tagline: 'Software engineered around your business.',
        basePrice: 10000,
        billingType: 'starting-at',
        priceSuffix: '+',
        summary:
            'A fully tailored digital platform featuring custom software, secure infrastructure, and functionality built around your requirements.',
        idealFor:
            'Organizations requiring client portals, custom applications, APIs, automation, or proprietary systems.',
        features: [
            'Custom solution architecture',
            'Secure API backend',
            'Custom database design',
            'Client or customer portals',
            'Authentication and permissions',
            'Custom administrative systems',
            'Advanced API integrations',
            'Workflow automation',
            'Cloud deployment architecture',
            'Testing and documentation'
        ],
        ctaLabel: 'Request a Proposal'
    }
] as const satisfies readonly ServicePackage[];

export const SERVICE_PACKAGES:
    readonly ServicePackage[] = servicePackages;

export type ServicePackageId =
    (typeof servicePackages)[number]['id'];

export type ServicePackageName =
    (typeof servicePackages)[number]['name'];

export function formatServicePackagePrice(
    servicePackage: ServicePackage
): string {
    if (
        servicePackage.billingType === 'custom' ||
        servicePackage.basePrice === undefined
    ) {
        return 'Custom pricing';
    }

    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    }).format(servicePackage.basePrice);

    return `Starting at ${formattedPrice}${servicePackage.priceSuffix ?? ''}`;
}