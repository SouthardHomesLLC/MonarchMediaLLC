// src/data/ServiceAddOns.ts

import type { PackageLevelLabel } from '@data/ProjectOptions';

export const ADD_ON_CATEGORIES = [
    'Content',
    'Design',
    'Marketing',
    'Integration',
    'Support'
] as const;

export type AddOnCategory =
    (typeof ADD_ON_CATEGORIES)[number];

export type AddOnBillingType =
    | 'fixed'
    | 'starting-at'
    | 'per-page'
    | 'percentage'
    | 'custom';

export interface ServiceAddOn {
    id: string;
    name: string;
    description: string;
    category: AddOnCategory;
    startingAt?: number;
    billingType: AddOnBillingType;
    priceSuffix?: string;
    eligiblePackages: readonly PackageLevelLabel[];
}

const serviceAddOns = [
    {
        id: 'additional-page',
        name: 'Additional Standard Page',
        description:
            'Add another informational page using the established website design system.',
        category: 'Content',
        startingAt: 250,
        billingType: 'per-page',
        eligiblePackages: [
            'Core',
            'Professional',
            'Premium'
        ]
    },
    {
        id: 'advanced-landing-page',
        name: 'Advanced Landing Page',
        description:
            'A conversion-focused page with a custom layout, targeted messaging, and a dedicated call to action.',
        category: 'Marketing',
        startingAt: 400,
        billingType: 'per-page',
        eligiblePackages: [
            'Core',
            'Professional',
            'Premium'
        ]
    },
    {
        id: 'animated-background',
        name: 'Animated Background',
        description:
            'A branded animated canvas, particle system, gradient, or interactive background treatment.',
        category: 'Design',
        startingAt: 500,
        billingType: 'starting-at',
        eligiblePackages: [
            'Core',
            'Professional',
            'Premium'
        ]
    },
    {
        id: 'advanced-interactive-background',
        name: 'Custom Interactive Experience',
        description:
            'A fully custom canvas, WebGL, or 3D visual experience designed specifically for the brand.',
        category: 'Design',
        startingAt: 1200,
        billingType: 'starting-at',
        eligiblePackages: [
            'Professional',
            'Premium',
            'Bespoke'
        ]
    },
    {
        id: 'scroll-animations',
        name: 'Scroll Animations',
        description:
            'Custom reveal effects, transitions, and motion sequences triggered as visitors explore the website.',
        category: 'Design',
        startingAt: 600,
        billingType: 'starting-at',
        eligiblePackages: [
            'Core',
            'Professional',
            'Premium'
        ]
    },
    {
        id: 'advanced-gallery',
        name: 'Advanced Gallery',
        description:
            'A filterable or categorized gallery with expanded previews and optimized media handling.',
        category: 'Content',
        startingAt: 500,
        billingType: 'starting-at',
        eligiblePackages: [
            'Core',
            'Professional',
            'Premium'
        ]
    },
    {
        id: 'blog',
        name: 'Blog or News Section',
        description:
            'A structured article system with archive pages, individual posts, and reusable publishing layouts.',
        category: 'Content',
        startingAt: 900,
        billingType: 'starting-at',
        eligiblePackages: [
            'Core',
            'Professional',
            'Premium'
        ]
    },
    {
        id: 'copywriting',
        name: 'Professional Copywriting',
        description:
            'Business-focused page copy written to communicate services clearly and encourage customer action.',
        category: 'Content',
        startingAt: 175,
        billingType: 'per-page',
        eligiblePackages: [
            'Core',
            'Professional',
            'Premium',
            'Bespoke'
        ]
    },
    {
        id: 'booking-integration',
        name: 'Appointment Booking',
        description:
            'Integration with an existing scheduling or appointment-booking platform.',
        category: 'Integration',
        startingAt: 400,
        billingType: 'starting-at',
        eligiblePackages: [
            'Core',
            'Professional',
            'Premium'
        ]
    },
    {
        id: 'crm-integration',
        name: 'CRM Integration',
        description:
            'Connect website inquiries with an existing customer relationship management platform.',
        category: 'Integration',
        startingAt: 600,
        billingType: 'starting-at',
        eligiblePackages: [
            'Professional',
            'Premium',
            'Bespoke'
        ]
    },
    {
        id: 'newsletter-integration',
        name: 'Newsletter Integration',
        description:
            'Connect signup forms with an existing email marketing platform.',
        category: 'Integration',
        startingAt: 300,
        billingType: 'starting-at',
        eligiblePackages: [
            'Core',
            'Professional',
            'Premium'
        ]
    },
    {
        id: 'google-business-profile',
        name: 'Google Business Profile Setup',
        description:
            'Initial profile setup or optimization using consistent business information, services, and imagery.',
        category: 'Marketing',
        startingAt: 400,
        billingType: 'fixed',
        eligiblePackages: [
            'Core',
            'Professional',
            'Premium'
        ]
    },
    {
        id: 'additional-language',
        name: 'Additional Language',
        description:
            'Add localized page routing, translated content support, and international SEO metadata.',
        category: 'Content',
        startingAt: 1000,
        billingType: 'starting-at',
        eligiblePackages: [
            'Professional',
            'Premium',
            'Bespoke'
        ]
    },
    {
        id: 'additional-revisions',
        name: 'Additional Revision Round',
        description:
            'An additional coordinated round of design and content revisions beyond the included project allowance.',
        category: 'Support',
        startingAt: 250,
        billingType: 'fixed',
        eligiblePackages: [
            'Core',
            'Professional',
            'Premium',
            'Bespoke'
        ]
    },
    {
        id: 'rush-delivery',
        name: 'Priority Delivery',
        description:
            'Expedited project scheduling when the requested launch timeline is feasible.',
        category: 'Support',
        startingAt: 20,
        billingType: 'percentage',
        priceSuffix: ' of project total',
        eligiblePackages: [
            'Core',
            'Professional',
            'Premium'
        ]
    }
] as const satisfies readonly ServiceAddOn[];

export const SERVICE_ADD_ONS:
    readonly ServiceAddOn[] = serviceAddOns;

export type ServiceAddOnId =
    (typeof serviceAddOns)[number]['id'];

export function formatAddOnPrice(
    addOn: ServiceAddOn
): string {
    if (
        addOn.billingType === 'custom' ||
        addOn.startingAt === undefined
    ) {
        return 'Custom pricing';
    }

    if (addOn.billingType === 'percentage') {
        return `${addOn.startingAt}%${addOn.priceSuffix ?? ''}`;
    }

    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    }).format(addOn.startingAt);

    if (addOn.billingType === 'per-page') {
        return `${formattedPrice} / page`;
    }

    if (addOn.billingType === 'starting-at') {
        return `Starting at ${formattedPrice}${addOn.priceSuffix ?? ''}`;
    }

    return `${formattedPrice}${addOn.priceSuffix ?? ''}`;
}