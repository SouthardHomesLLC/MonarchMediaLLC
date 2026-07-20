// src/data/MonarchCarePlans.ts

import type {
    ContentRequestExample,
    MonarchCarePlan
} from '@data/MonarchCareTypes';

const monarchCarePlans = [
    {
        id: 'essential-care',
        name: 'Essential Care',
        tagline: 'Reliable technical care for your website.',
        category: 'Technical',
        monthlyPrice: 75,
        billingCycle: 'monthly',
        summary:
            'Ongoing monitoring and technical maintenance for businesses that manage their own website content.',
        idealFor:
            'Static websites that require dependable monitoring but only occasional content changes.',
        features: [
            'Managed hosting oversight',
            'SSL certificate monitoring',
            'Website uptime monitoring',
            'Routine dependency updates',
            'Security and configuration checks',
            'Scheduled website backups',
            'Technical issue support'
        ],
        allowances: [
            {
                requestType: 'technical-support',
                label: 'Technical support',
                quantity: 1,
                unit: 'hours',
                rollover: false,
                notes:
                    'For troubleshooting and minor technical corrections. New functionality is quoted separately.'
            }
        ],
        eligiblePackages: [
            'Core',
            'Professional'
        ],
        responseTime: 'Within 3 business days',
        minimumCommitmentMonths: 3,
        ctaLabel: 'Choose Essential Care'
    },
    {
        id: 'managed-care',
        name: 'Managed Care',
        tagline: 'Technical care plus routine content updates.',
        category: 'Content',
        monthlyPrice: 150,
        billingCycle: 'monthly',
        summary:
            'A managed website plan for businesses that prefer Monarch Media to handle routine content changes.',
        idealFor:
            'Businesses that periodically update galleries, staff members, testimonials, services, or company information.',
        features: [
            'Everything included in Essential Care',
            'Routine text and image updates',
            'Gallery and portfolio updates',
            'Team member additions or removals',
            'Service and business information changes',
            'Quarterly website health review',
            'Basic analytics summary'
        ],
        allowances: [
            {
                requestType: 'content-update',
                label: 'Content update requests',
                quantity: 3,
                unit: 'requests',
                rollover: false,
                notes:
                    'Each request covers one coordinated update to an existing page or content area.'
            },
            {
                requestType: 'technical-support',
                label: 'Technical support',
                quantity: 1,
                unit: 'hours',
                rollover: false
            },
            {
                requestType: 'analytics-review',
                label: 'Website health and analytics review',
                quantity: 1,
                unit: 'reviews',
                rollover: false,
                notes: 'Provided once per quarter.'
            }
        ],
        eligiblePackages: [
            'Core',
            'Professional',
            'Premium'
        ],
        responseTime: 'Within 2 business days',
        minimumCommitmentMonths: 3,
        featured: true,
        ctaLabel: 'Choose Managed Care'
    },
    {
        id: 'growth-care',
        name: 'Growth Care',
        tagline: 'Ongoing content, optimization, and improvements.',
        category: 'Growth',
        monthlyPrice: 300,
        billingCycle: 'monthly',
        summary:
            'A proactive partnership combining technical maintenance, frequent content support, analytics, and ongoing website improvements.',
        idealFor:
            'Active businesses that regularly publish projects, promotions, articles, properties, team updates, or service changes.',
        features: [
            'Everything included in Managed Care',
            'Priority content updates',
            'Landing-page and campaign support',
            'Blog or news publishing assistance',
            'Ongoing on-page SEO improvements',
            'Monthly analytics review',
            'Conversion and performance recommendations',
            'Priority technical support'
        ],
        allowances: [
            {
                requestType: 'content-update',
                label: 'Content update requests',
                quantity: 8,
                unit: 'requests',
                rollover: false
            },
            {
                requestType: 'development',
                label: 'Website improvement time',
                quantity: 2,
                unit: 'hours',
                rollover: false,
                notes:
                    'For small layout improvements, new sections, or minor enhancements. Larger features are quoted separately.'
            },
            {
                requestType: 'seo-improvement',
                label: 'SEO improvement cycle',
                quantity: 1,
                unit: 'reviews',
                rollover: false
            },
            {
                requestType: 'analytics-review',
                label: 'Analytics review',
                quantity: 1,
                unit: 'reviews',
                rollover: false
            }
        ],
        eligiblePackages: [
            'Professional',
            'Premium',
            'Bespoke'
        ],
        responseTime: 'Within 1–2 business days',
        minimumCommitmentMonths: 3,
        ctaLabel: 'Choose Growth Care'
    },
    {
        id: 'bespoke-support',
        name: 'Bespoke Support',
        tagline: 'Dedicated support for custom digital systems.',
        category: 'Enterprise',
        billingCycle: 'custom',
        summary:
            'A tailored support agreement for websites and applications with custom backends, databases, APIs, portals, or business-critical workflows.',
        idealFor:
            'Organizations operating custom platforms that require ongoing technical oversight, development capacity, or response-time commitments.',
        features: [
            'Custom infrastructure monitoring',
            'API and integration monitoring',
            'Database maintenance',
            'Application security updates',
            'Priority bug resolution',
            'Reserved development capacity',
            'Custom backup and recovery planning',
            'Service-level response options',
            'Scheduled technical reviews'
        ],
        allowances: [
            {
                requestType: 'technical-support',
                label: 'Technical support',
                unlimited: true,
                notes:
                    'Scoped through a custom support agreement and reasonable-use policy.'
            },
            {
                requestType: 'development',
                label: 'Reserved development hours',
                notes:
                    'Monthly hours are selected according to the supported system and business requirements.'
            }
        ],
        eligiblePackages: [
            'Premium',
            'Bespoke'
        ],
        responseTime: 'Defined in the support agreement',
        minimumCommitmentMonths: 6,
        ctaLabel: 'Request a Support Proposal'
    }
] as const satisfies readonly MonarchCarePlan[];

export const MONARCH_CARE_PLANS:
    readonly MonarchCarePlan[] = monarchCarePlans;

const contentRequestExamples = [
    {
        id: 'gallery-images',
        name: 'Update a Gallery',
        description:
            'Add, remove, reorder, or replace up to 20 supplied images within one existing gallery.',
        countsAs: 1
    },
    {
        id: 'team-member',
        name: 'Update a Team Member',
        description:
            'Add, remove, or revise one team member profile using supplied text and imagery.',
        countsAs: 1
    },
    {
        id: 'business-information',
        name: 'Update Business Information',
        description:
            'Change business hours, phone numbers, addresses, service areas, or other contact details across the website.',
        countsAs: 1
    },
    {
        id: 'testimonial',
        name: 'Add Testimonials',
        description:
            'Add or update up to five supplied testimonials within an existing testimonial section.',
        countsAs: 1
    },
    {
        id: 'service-content',
        name: 'Update Existing Service Content',
        description:
            'Revise supplied text, images, pricing, or calls to action on one existing service page.',
        countsAs: 1
    },
    {
        id: 'portfolio-entry',
        name: 'Add a Portfolio Entry',
        description:
            'Add one new project, property, case study, or portfolio entry using supplied content and imagery.',
        countsAs: 1
    },
    {
        id: 'promotion-banner',
        name: 'Update a Promotion',
        description:
            'Replace or revise one existing promotional banner, announcement, or seasonal message.',
        countsAs: 1
    },
    {
        id: 'blog-post',
        name: 'Publish a Supplied Article',
        description:
            'Format and publish one client-supplied article using an existing blog or news template.',
        countsAs: 1
    }
] as const satisfies readonly ContentRequestExample[];

export const CONTENT_REQUEST_EXAMPLES:
    readonly ContentRequestExample[] = contentRequestExamples;

export type MonarchCarePlanId =
    (typeof monarchCarePlans)[number]['id'];

export type ContentRequestExampleId =
    (typeof contentRequestExamples)[number]['id'];

export function formatCarePlanPrice(
    plan: MonarchCarePlan
): string {
    if (
        plan.billingCycle === 'custom' ||
        plan.monthlyPrice === undefined
    ) {
        return 'Custom pricing';
    }

    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    }).format(plan.monthlyPrice);

    return `${formattedPrice} / month`;
}

export function formatCarePlanAllowance(
    allowance: MonarchCarePlan['allowances'][number]
): string {
    if (allowance.unlimited) {
        return `Unlimited ${allowance.label.toLowerCase()}`;
    }

    if (
        allowance.quantity === undefined ||
        allowance.unit === undefined
    ) {
        return allowance.label;
    }

    return `${allowance.quantity} ${allowance.unit} — ${allowance.label}`;
}