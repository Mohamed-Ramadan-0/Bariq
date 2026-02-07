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

export interface Client {
    name: string;
    logo: string;
}

export const CLIENTS: Client[] = [
    { name: 'Client 1', logo: 'client-1.png' },
    { name: 'Client 2', logo: 'client-2.png' },
    { name: 'Client 3', logo: 'client-3.png' },
    { name: 'Client 4', logo: 'client-4.png' },
    { name: 'Client 5', logo: 'client-5.png' },
    { name: 'Client 6', logo: 'client-6.png' },
    { name: 'Client 7', logo: 'client-7.png' },
    { name: 'Client 8', logo: 'client-8.png' },
    { name: 'Client 9', logo: 'client-9.png' },
    { name: 'Client 10', logo: 'client-10.png' },
    { name: 'Client 11', logo: 'client-11.png' },
    { name: 'Client 12', logo: 'client-12.png' },
    { name: 'Client 13', logo: 'client-13.png' },
    { name: 'Client 14', logo: 'client-14.png' },
    { name: 'Client 15', logo: 'client-15.png' },
    { name: 'Client 16', logo: 'client-16.png' },
    { name: 'Client 17', logo: 'client-17.png' }

];

// Detailed Services for Service Details Page
export interface ServiceSpec {
    label_en: string;
    label_ar: string;
    value_en: string;
    value_ar: string;
}

export interface ServiceStep {
    step_num: string;
    title_en: string;
    title_ar: string;
    desc_en: string;
    desc_ar: string;
}

export interface DetailedService {
    id: number;
    slug: string;
    hero_img: string;
    title_en: string;
    title_ar: string;
    overview_en: string;
    overview_ar: string;
    overview_img: string;
    specs: ServiceSpec[];
    steps: ServiceStep[];
}

export const DETAILED_SERVICES: DetailedService[] = [
    {
        id: 1,
        slug: 'construction-hoarding',
        hero_img: 'service-hoarding-hero.jpg',
        title_en: 'Construction Hoarding',
        title_ar: 'أسوار المشاريع الإعلانية (Hoarding)',
        overview_en: 'Turn your construction site into a marketing asset. Our hoarding solutions combine structural integrity with high-impact graphics. We use heavy-duty steel structures clad with premium ACP or marine plywood, ensuring safety and brand visibility even in harsh weather conditions.',
        overview_ar: 'حول موقع الإنشاءات الخاص بك إلى واجهة تسويقية. نجمع بين المتانة الهيكلية وجودة الطباعة الفائقة. نستخدم هياكل حديدية مدعمة مع ألواح الألمنيوم (ACP) أو الخشب المعالج، لضمان السلامة ومقاومة الرياح مع إظهار هوية مشروعك بأفضل صورة.',
        overview_img: 'service-hoarding-overview.jpg',
        specs: [
            { label_en: 'Structure', label_ar: 'الهيكل', value_en: 'Galvanized Steel Tubes (40x40 / 80x40)', value_ar: 'تيوبات حديد مجلفن' },
            { label_en: 'Cladding', label_ar: 'التجاليد', value_en: 'ACP (4mm) or Marine Plywood (18mm)', value_ar: 'كلادينج 4مم أو خشب 18مم' },
            { label_en: 'Printing', label_ar: 'الطباعة', value_en: 'UV Flatbed (Weather Resistant)', value_ar: 'طباعة UV مقاومة للشمس' },
            { label_en: 'Wind Load', label_ar: 'مقاومة الرياح', value_en: 'Up to 120 km/h', value_ar: 'حتى 120 كم/ساعة' }
        ],
        steps: [
            { step_num: '01', title_en: 'Site Survey', title_ar: 'المسح الميداني', desc_en: 'Topographical survey to determine foundation requirements.', desc_ar: 'دراسة الموقع لتحديد نوع القواعد الخرسانية المطلوبة.' },
            { step_num: '02', title_en: 'Structural Fabrication', title_ar: 'تصنيع الهيكل', desc_en: 'Welding and assembling the steel frame on-site or off-site.', desc_ar: 'لحام وتجميع الهيكل الحديدي وتثبيت الدعامات الخلفية.' },
            { step_num: '03', title_en: 'Cladding & Branding', title_ar: 'التركيب والطباعة', desc_en: 'Fixing panels and applying high-resolution graphics.', desc_ar: 'تركيب الألواح وتطبيق الفينيل المطبوع بدقة عالية.' }
        ]
    },
    {
        id: 2,
        slug: 'site-fencing',
        hero_img: 'service-fencing-hero.jpg',
        title_en: 'Temporary Fencing',
        title_ar: 'الأسوار المؤقتة (Fencing)',
        overview_en: 'Secure your perimeter efficiently. We provide corrugated steel fencing (shinko) and chain-link fences designed for rapid deployment and maximum security. Our modular systems allow for easy relocation as site boundaries change.',
        overview_ar: 'قم بتأمين محيط موقعك بكفاءة. نوفر أسوار الشينكو (الصاج المعرج) والأسوار الشبكية المصممة للتركيب السريع وتوفير أقصى درجات الحماية. أنظمتنا معيارية (Modular) مما يسمح بنقل السور بسهولة مع تغير حدود العمل.',
        overview_img: 'service-fencing-overview.jpg',
        specs: [
            { label_en: 'Material', label_ar: 'الخامة', value_en: 'Corrugated Steel / Chain Link', value_ar: 'صاج معرج / شبك مجلفن' },
            { label_en: 'Height', label_ar: 'الارتفاع', value_en: 'Standard 2.0m - 3.0m', value_ar: 'قياسي 2.0م - 3.0م' },
            { label_en: 'Color', label_ar: 'اللون', value_en: 'White (RAL 9003) or Customized', value_ar: 'أبيض أو حسب الطلب' },
            { label_en: 'Foundation', label_ar: 'القواعد', value_en: 'Concrete Blocks (Movable)', value_ar: 'صبات خرسانية (متحركة)' }
        ],
        steps: [
            { step_num: '01', title_en: 'Layout Marking', title_ar: 'تخطيط المسار', desc_en: 'Defining the exact perimeter lines.', desc_ar: 'تحديد مسار السور ونقاط البوابات.' },
            { step_num: '02', title_en: 'Block Installation', title_ar: 'توزيع القواعد', desc_en: 'Placing concrete blocks at 2.5m intervals.', desc_ar: 'توزيع الصبات الخرسانية بمسافات 2.5 متر.' },
            { step_num: '03', title_en: 'Panel Fixing', title_ar: 'تثبيت الألواح', desc_en: 'Securing steel sheets to the vertical pipes.', desc_ar: 'تثبيت ألواح الصاج على القوائم وتأمين الوصلات.' }
        ]
    },
    {
        id: 3,
        slug: 'traffic-signs',
        hero_img: 'service-traffic-hero.jpg',
        title_en: 'Traffic Signage',
        title_ar: 'اللوحات المرورية والإرشادية',
        overview_en: 'Compliant, reflective, and durable. We manufacture traffic signs according to MOMRA and international ASTM standards. From highways to parking lots, our signs ensure safety and clear guidance using high-intensity prismatic sheeting.',
        overview_ar: 'مطابقة للمواصفات، عاكسة، وتدوم طويلاً. نقوم بتصنيع اللوحات المرورية وفقاً لمعايير وزارة النقل والمواصفات العالمية (ASTM). من الطرق السريعة إلى المواقف، نضمن السلامة والوضوح باستخدام أفلام عاكسة عالية الكثافة.',
        overview_img: 'service-traffic-overview.jpg',
        specs: [
            { label_en: 'Substrate', label_ar: 'السطح', value_en: 'Aluminum (2mm/3mm)', value_ar: 'ألومنيوم (2مم / 3مم)' },
            { label_en: 'Reflectivity', label_ar: 'العاكسية', value_en: 'Diamond Grade (Type XI)', value_ar: 'دايموند جريد (فئة XI)' },
            { label_en: 'Standard', label_ar: 'المواصفة', value_en: 'ASTM D4956', value_ar: 'ASTM D4956' },
            { label_en: 'Life Span', label_ar: 'العمر الافتراضي', value_en: '10+ Years', value_ar: 'أكثر من 10 سنوات' }
        ],
        steps: [
            { step_num: '01', title_en: 'Vector Design', title_ar: 'التصميم الهندسي', desc_en: 'Creating layout based on regulatory manuals.', desc_ar: 'إعداد التصميم وفقاً لدليل العلامات المرورية.' },
            { step_num: '02', title_en: 'Cutting & Lamination', title_ar: 'القص واللصق', desc_en: 'CNC cutting aluminum and applying reflective sheets.', desc_ar: 'قص الألومنيوم بالليزر ولصق الأفلام العاكسة.' },
            { step_num: '03', title_en: 'Assembly', title_ar: 'التجميع', desc_en: 'Mounting on galvanized posts with railings.', desc_ar: 'التركيب على أعمدة مجلفنة باستخدام مرابط خاصة.' }
        ]
    },
    {
        id: 4,
        slug: 'wayfinding-systems',
        hero_img: 'service-wayfinding-hero.jpg',
        title_en: 'Wayfinding Systems',
        title_ar: 'أنظمة التوجيه الداخلي (Wayfinding)',
        overview_en: 'Navigate spaces with elegance. We design and fabricate bespoke wayfinding solutions for malls, hospitals, and corporate offices. Combining materials like stainless steel, acrylic, and wood to create functional art that guides your visitors.',
        overview_ar: 'وجه زوارك بأناقة. نقوم بتصميم وتصنيع أنظمة توجيه مخصصة للمولات، المستشفيات، والشركات. ندمج خامات مثل الاستانلس ستيل، الأكريليك، والخشب لنخلق قطعاً فنية وظيفية تسهل حركة الزوار داخل منشأتك.',
        overview_img: 'service-wayfinding-overview.jpg',
        specs: [
            { label_en: 'Materials', label_ar: 'الخامات', value_en: 'Stainless Steel 304, Acrylic, Wood', value_ar: 'استانلس 304، أكريليك، خشب' },
            { label_en: 'Finish', label_ar: 'التشطيب', value_en: 'Brushed / Mirror / Matte', value_ar: 'مفرش / لامع / مطفي' },
            { label_en: 'Illumination', label_ar: 'الإضاءة', value_en: 'Internal LED (Optional)', value_ar: 'إضاءة LED داخلية (اختياري)' },
            { label_en: 'Accessibility', label_ar: 'سهولة الوصول', value_en: 'Braille Integration', value_ar: 'دعم لغة برايل' }
        ],
        steps: [
            { step_num: '01', title_en: 'Flow Analysis', title_ar: 'تحليل الحركة', desc_en: 'Studying visitor paths to determine sign locations.', desc_ar: 'دراسة مسارات الزوار لتحديد أماكن اللوحات الاستراتيجية.' },
            { step_num: '02', title_en: 'Prototyping', title_ar: 'النمذجة', desc_en: 'Creating a sample for material approval.', desc_ar: 'عمل عينة فعلية لاعتماد الخامات والألوان.' },
            { step_num: '03', title_en: 'Installation', title_ar: 'التركيب', desc_en: 'Precision mounting with hidden fixations.', desc_ar: 'التركيب بدقة عالية مع إخفاء مسامير التثبيت.' }
        ]
    },
    {
        id: 5,
        slug: 'demolition-works',
        hero_img: 'service-demolition-hero.jpg',
        title_en: 'Demolition Services',
        title_ar: 'أعمال الهدم والإزالة',
        overview_en: 'Safe, controlled, and efficient demolition. From interior strip-outs to total structural demolition. We prioritize safety and waste management, ensuring materials are sorted and recycled wherever possible, leaving your site clean for the next phase.',
        overview_ar: 'هدم آمن، محكم، وفعال. من الإزالات الداخلية للديكورات وحتى الهدم الانشائي الكامل للمباني. نضع السلامة وإدارة المخلفات كأولوية قصوى، مع ضمان فرز المواد وإعادة تدويرها حيثما أمكن، لتسليم موقعك نظيفاً وجاهزاً للمرحلة التالية.',
        overview_img: 'service-demolition-overview.jpg',
        specs: [
            { label_en: 'Equipment', label_ar: 'المعدات', value_en: 'Excavators, Jackhammers, Bobcats', value_ar: 'حفارات، جاك هامر، بوب كات' },
            { label_en: 'Safety', label_ar: 'السلامة', value_en: 'Full PPE & Perimeter Nets', value_ar: 'معدات وقاية كاملة وشباك حماية' },
            { label_en: 'Waste Mgmt', label_ar: 'المخلفات', value_en: 'Sorting & Authorized Dumping', value_ar: 'فرز ونقل للمدافن المعتمدة' },
            { label_en: 'Scope', label_ar: 'النطاق', value_en: 'Concrete, Steel, Interiors', value_ar: 'خرسانة، هياكل معدنية، تشطيبات' }
        ],
        steps: [
            { step_num: '01', title_en: 'Hazmat Survey', title_ar: 'فحص المواد الخطرة', desc_en: 'Checking for asbestos or hazardous materials.', desc_ar: 'فحص الموقع للتأكد من خلوه من أي مواد خطرة قبل البدء.' },
            { step_num: '02', title_en: 'Soft Strip', title_ar: 'الإزالة الخفيفة', desc_en: 'Removing fixtures, wood, and glass manually.', desc_ar: 'إزالة الأبواب، النوافذ، والديكورات يدوياً.' },
            { step_num: '03', title_en: 'Structural Demolition', title_ar: 'الهدم الإنشائي', desc_en: 'Mechanical demolition of the main structure.', desc_ar: 'استخدام المعدات الثقيلة لهدم الهيكل الخرساني.' }
        ]
    }
];
