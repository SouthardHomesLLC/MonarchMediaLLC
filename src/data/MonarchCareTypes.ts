// src/data/MonarchCareTypes.ts
import type { PackageLevelLabel } from '@data/ProjectOptions';

export const CARE_PLAN_CATEGORIES = [
    'Technical',
    'Content',
    'Growth',
    'Enterprise'
] as const;

export type CarePlanCategory =
    (typeof CARE_PLAN_CATEGORIES)[number];

export type CarePlanBillingCycle =
    | 'monthly'
    | 'custom';

export type CarePlanRequestType =
    | 'technical-support'
    | 'content-update'
    | 'analytics-review'
    | 'seo-improvement'
    | 'development';

export interface CarePlanAllowance {
    requestType: CarePlanRequestType;
    label: string;
    quantity?: number;
    unit?: 'requests' | 'hours' | 'reviews';
    unlimited?: boolean;
    rollover?: boolean;
    notes?: string;
}

export interface MonarchCarePlan {
    id: string;
    name: string;
    tagline: string;
    category: CarePlanCategory;
    monthlyPrice?: number;
    billingCycle: CarePlanBillingCycle;
    summary: string;
    idealFor: string;
    features: readonly string[];
    allowances: readonly CarePlanAllowance[];
    eligiblePackages: readonly PackageLevelLabel[];
    responseTime: string;
    minimumCommitmentMonths?: number;
    featured?: boolean;
    ctaLabel: string;
}

export interface ContentRequestExample {
    id: string;
    name: string;
    description: string;
    countsAs: number;
}