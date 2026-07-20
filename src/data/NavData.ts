export interface linkItem {
    linkText: string;
    href: string;
}

export const publicItems: linkItem[] = [
    { linkText: 'Home', href: '/' },
    { linkText: 'Portfolio', href: '/portfolio' },
    { linkText: 'Website Development', href: '/web-development' },
    { linkText: 'Care Plans', href: '/care-plans' }
];

export const adminItems: linkItem[] = [
    { linkText: 'Dashboard', href: '/admin/dashboard' },
    { linkText: 'Projects', href: '/admin/projects' },
    { linkText: 'Images', href: '/admin/images' },
    { linkText: 'Team', href: '/admin/team' }
];