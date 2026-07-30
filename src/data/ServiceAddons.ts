// src/data/ServiceAddOns.ts

import type { PackageLevelLabel } from '@data/ProjectOptions';

export const ADD_ON_CATEGORIES = ['Content', 'Design', 'Marketing', 'Integration', 'Support'] as const;

export type AddOnCategory = (typeof ADD_ON_CATEGORIES)[number];

export type AddOnBillingType = 'fixed' | 'starting-at' | 'per-page' | 'percentage' | 'custom';

export interface ServiceAddOn {
    id: string;
    name: string;
    description: string;
    category: AddOnCategory;
    startingAt?: number;
    billingType: AddOnBillingType;
    priceSuffix?: string;
    minimumPrice?: number;
    eligiblePackages: readonly PackageLevelLabel[];
}

const serviceAddOns = [
    {
        id: 'additional-page',
        name: 'Additional Standard Page',
        description: 'Add another informational page using the established website design system and client-provided content.',
        category: 'Content',
        startingAt: 250,
        billingType: 'per-page',
        eligiblePackages: ['Core', 'Professional', 'Premium']
    },
    {
        id: 'content-migration',
        name: 'Content Migration',
        description: 'Transfer and format approved text, images, articles, or other content from an existing website or supplied source.',
        category: 'Content',
        startingAt: 500,
        billingType: 'starting-at',
        eligiblePackages: ['Core', 'Professional', 'Premium']
    },
    {
        id: 'advanced-gallery',
        name: 'Advanced Gallery',
        description: 'A filterable or categorized gallery with expanded previews and optimized media handling.',
        category: 'Content',
        startingAt: 750,
        billingType: 'starting-at',
        eligiblePackages: ['Core', 'Professional', 'Premium']
    },
    {
        id: 'self-managed-blog',
        name: 'Self-Managed Blog or News System',
        description:
            "Add a dedicated database-powered publishing system with archive pages, article templates, administrative content management, and media handling beyond the package's primary content scope.",
        category: 'Content',
        startingAt: 2000,
        billingType: 'starting-at',
        eligiblePackages: ['Professional', 'Premium']
    },
    {
        id: 'animated-background',
        name: 'Animated Background',
        description: 'A branded animated canvas, particle system, gradient, or ambient motion treatment created around the established website design.',
        category: 'Design',
        startingAt: 500,
        billingType: 'starting-at',
        eligiblePackages: ['Core', 'Professional', 'Premium']
    },
    {
        id: 'custom-interactive-experience',
        name: 'Custom Interactive Experience',
        description:
            'A custom canvas, WebGL, or 3D experience with project-specific interaction, animation, responsive behavior, and performance optimization.',
        category: 'Design',
        startingAt: 2500,
        billingType: 'starting-at',
        eligiblePackages: ['Professional', 'Premium', 'Bespoke']
    },
    {
        id: 'scroll-animations',
        name: 'Scroll Animations',
        description: 'Coordinated reveal effects, transitions, and motion sequences applied to selected sections throughout the website.',
        category: 'Design',
        startingAt: 600,
        billingType: 'starting-at',
        eligiblePackages: ['Core', 'Professional', 'Premium']
    },
    {
        id: 'advanced-landing-page',
        name: 'Advanced Landing Page',
        description: 'A conversion-focused page with a custom layout, campaign-specific messaging structure, and dedicated call to action.',
        category: 'Marketing',
        startingAt: 650,
        billingType: 'per-page',
        eligiblePackages: ['Core', 'Professional', 'Premium']
    },
    {
        id: 'google-business-profile',
        name: 'Google Business Profile Setup & Optimization',
        description: 'Initial profile setup or optimization using consistent business information, services, categories, and imagery.',
        category: 'Marketing',
        startingAt: 400,
        billingType: 'fixed',
        eligiblePackages: ['Core', 'Professional', 'Premium']
    },
    {
        id: 'local-seo-expansion',
        name: 'Local SEO Expansion',
        description:
            'Additional service-area or location targeting with dedicated metadata, internal linking, localized content structure, and supporting schema beyond the package’s included SEO foundation.',
        category: 'Marketing',
        startingAt: 750,
        billingType: 'starting-at',
        eligiblePackages: ['Core', 'Professional', 'Premium']
    },
    {
        id: 'advanced-form',
        name: 'Advanced Form',
        description:
            'Upgrade the included form or add another multi-step, conditional, file-upload, application, or detailed request form with customized notifications.',
        category: 'Integration',
        startingAt: 600,
        billingType: 'starting-at',
        eligiblePackages: ['Core', 'Professional', 'Premium']
    },
    {
        id: 'booking-integration',
        name: 'Appointment Booking',
        description: 'Integration and styling of an existing third-party appointment-booking platform. Platform subscription fees are not included.',
        category: 'Integration',
        startingAt: 400,
        billingType: 'starting-at',
        eligiblePackages: ['Core', 'Professional', 'Premium']
    },
    {
        id: 'crm-lead-integration',
        name: 'CRM Lead Integration',
        description: 'Connect website inquiries to an existing CRM using a supported native integration, webhook, or straightforward one-way API workflow.',
        category: 'Integration',
        startingAt: 900,
        billingType: 'starting-at',
        eligiblePackages: ['Professional', 'Premium']
    },
    {
        id: 'advanced-crm-integration',
        name: 'Advanced CRM Integration',
        description: 'A custom CRM workflow involving field mapping, automation, bidirectional synchronization, or project-specific API development.',
        category: 'Integration',
        billingType: 'custom',
        eligiblePackages: ['Premium', 'Bespoke']
    },
    {
        id: 'newsletter-integration',
        name: 'Newsletter Integration',
        description: 'Connect signup forms with an existing email marketing platform. Platform subscription fees are not included.',
        category: 'Integration',
        startingAt: 300,
        billingType: 'starting-at',
        eligiblePackages: ['Core', 'Professional', 'Premium']
    },
    {
        id: 'additional-revisions',
        name: 'Additional Revision Round',
        description:
            'One additional coordinated revision round based on a consolidated list of design and content changes. New pages or functionality are scoped separately.',
        category: 'Support',
        startingAt: 250,
        billingType: 'fixed',
        eligiblePackages: ['Core', 'Professional', 'Premium', 'Bespoke']
    },
    {
        id: 'rush-delivery',
        name: 'Priority Delivery',
        description: 'Expedited project scheduling when the requested launch timeline is feasible. A $500 minimum applies.',
        category: 'Support',
        startingAt: 20,
        billingType: 'percentage',
        priceSuffix: ' of project total',
        minimumPrice: 500,
        eligiblePackages: ['Core', 'Professional', 'Premium']
    }
] as const satisfies readonly ServiceAddOn[];

export const SERVICE_ADD_ONS: readonly ServiceAddOn[] = serviceAddOns;

export type ServiceAddOnId = (typeof serviceAddOns)[number]['id'];

export function formatAddOnPrice(addOn: ServiceAddOn): string {
    if (addOn.billingType === 'custom' || addOn.startingAt === undefined) {
        return 'Custom pricing';
    }

    if (addOn.billingType === 'percentage') {
        const percentagePrice = `${addOn.startingAt}%${addOn.priceSuffix ?? ''}`;

        if (addOn.minimumPrice === undefined) {
            return percentagePrice;
        }

        const formattedMinimum = formatCurrency(addOn.minimumPrice);

        return `${percentagePrice} (${formattedMinimum} minimum)`;
    }

    const formattedPrice = formatCurrency(addOn.startingAt);

    if (addOn.billingType === 'per-page') {
        return `${formattedPrice} / page`;
    }

    if (addOn.billingType === 'starting-at') {
        return `Starting at ${formattedPrice}${addOn.priceSuffix ?? ''}`;
    }

    return `${formattedPrice}${addOn.priceSuffix ?? ''}`;
}

function formatCurrency(value: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    }).format(value);
}
