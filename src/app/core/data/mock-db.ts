// Mock Database - Centralized data for all Home Page sections
// All images are paths for ImageKit (use with <app-img [path]="...">)

export interface Stat {
    value: string;
    labelAr: string;
    labelEn: string;
    icon: string; // Inline SVG path
}

export interface Service {
    id: number;
    titleAr: string;
    titleEn: string;
    descAr: string;
    descEn: string;
    img: string;
    icon: string; // Inline SVG path
}

export interface Project {
    id: number;
    clientAr: string;
    clientEn: string;
    category: string;
    img: string;
}

export const STATS: Stat[] = [
    {
        value: '150+',
        labelAr: 'مشروع تم تسليمه',
        labelEn: 'Projects Delivered',
        icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' // Checkmark circle
    },
    {
        value: '10,000',
        labelAr: 'متر مربع كلادينج',
        labelEn: 'Sqm Cladding',
        icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' // Building
    },
    {
        value: '26+',
        labelAr: 'عميل مميز',
        labelEn: 'Happy Clients',
        icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' // Users
    },
    {
        value: '0',
        labelAr: 'إصابات عمل',
        labelEn: 'Work Injuries',
        icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' // Shield check
    }
];

export const SERVICES: Service[] = [
    {
        id: 1,
        titleAr: 'كلادينج وواجهات',
        titleEn: 'Cladding & Facades',
        descAr: 'حلول واجهات مقاومة للحريق بأعلى معايير الجودة. نستخدم مواد معتمدة عالمياً تضمن السلامة والمتانة لسنوات طويلة.',
        descEn: 'Fire-resistant facade solutions with the highest quality standards. We use globally certified materials that ensure safety and durability for years.',
        img: 'service-cladding.jpg',
        icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
    },
    {
        id: 2,
        titleAr: 'حروف بارزة',
        titleEn: '3D Letters',
        descAr: 'دقة قص ليزر 0.1 مم مع تشطيبات متعددة: ستانلس ستيل، أكريليك مضيء، نحاس. تصميم وتنفيذ احترافي.',
        descEn: '0.1mm laser precision with multiple finishes: stainless steel, illuminated acrylic, brass. Professional design and execution.',
        img: 'service-letters.jpg',
        icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
    },
    {
        id: 3,
        titleAr: 'أنظمة توجيه',
        titleEn: 'Wayfinding Systems',
        descAr: 'لافتات داخلية وخارجية متكاملة. تصميم يراعي تجربة المستخدم ويسهل التنقل في المنشآت الكبيرة.',
        descEn: 'Integrated indoor & outdoor signage. User-experience focused design that facilitates navigation in large facilities.',
        img: 'service-wayfinding.jpg',
        icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7'
    }
];

export const PROJECTS: Project[] = [
    {
        id: 1,
        clientAr: 'البنك الأهلي',
        clientEn: 'NBE Bank',
        category: 'Facades',
        img: 'project-1.jpg'
    },
    {
        id: 2,
        clientAr: 'مستشفى السعودي الألماني',
        clientEn: 'SGH Hospital',
        category: 'Wayfinding',
        img: 'project-2.jpg'
    },
    {
        id: 3,
        clientAr: 'مول الرياض بارك',
        clientEn: 'Riyadh Park Mall',
        category: '3D Letters',
        img: 'project-3.jpg'
    },
    {
        id: 4,
        clientAr: 'فندق الفيصلية',
        clientEn: 'Al Faisaliah Hotel',
        category: 'Facades',
        img: 'project-4.jpg'
    }
];
