module.exports = [
"[project]/lib/seo/metadata.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BASE_URL",
    ()=>BASE_URL,
    "seo",
    ()=>seo
]);
const BASE_URL = "https://agara-sofvix.com";
function seo({ title, description, path, keywords = [], ogImage = "/og.png" }) {
    const url = `${BASE_URL}${path}`;
    return {
        title: `${title} | Agara Sofvix`,
        description,
        keywords: keywords.join(", "),
        alternates: {
            canonical: url
        },
        openGraph: {
            title: `${title} | Agara Sofvix`,
            description,
            url,
            siteName: "Agara Sofvix",
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630
                }
            ],
            type: 'website'
        },
        twitter: {
            card: "summary_large_image",
            title: `${title} | Agara Sofvix`,
            description,
            images: [
                ogImage
            ]
        },
        robots: {
            index: true,
            follow: true
        }
    };
}
}),
"[project]/lib/seo/keywords.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AI_KEYWORDS",
    ()=>AI_KEYWORDS,
    "BUSINESS_KEYWORDS",
    ()=>BUSINESS_KEYWORDS,
    "CLOUD_KEYWORDS",
    ()=>CLOUD_KEYWORDS,
    "CORE_KEYWORDS",
    ()=>CORE_KEYWORDS,
    "HIGH_INTENT_KEYWORDS",
    ()=>HIGH_INTENT_KEYWORDS,
    "WEB_APP_KEYWORDS",
    ()=>WEB_APP_KEYWORDS
]);
const CORE_KEYWORDS = [
    "enterprise software development",
    "custom software development",
    "enterprise application development",
    "software engineering services",
    "SaaS development company",
    "business automation solutions",
    "enterprise IT solutions",
    "digital transformation services",
    "software consulting services",
    "scalable software systems",
    "enterprise web applications",
    "full stack development services",
    "backend API development",
    "frontend engineering services",
    "enterprise platform development",
    "distributed systems engineering",
    "architecture design services",
    "system integration solutions",
    "corporate software solutions",
    "enterprise technology partner"
];
const AI_KEYWORDS = [
    "AI development services",
    "AI automation solutions",
    "intelligent automation systems",
    "AI agent development",
    "machine learning solutions",
    "AI chatbot development",
    "conversational AI platforms",
    "predictive analytics systems",
    "workflow automation software",
    "AI SaaS platforms",
    "generative AI development",
    "AI integration services",
    "AI for business automation",
    "deep learning solutions",
    "AI-driven analytics",
    "cognitive computing services",
    "natural language processing development",
    "AI strategy consulting",
    "autonomous agents for business",
    "neural network implementations"
];
const CLOUD_KEYWORDS = [
    "cloud infrastructure services",
    "DevOps automation services",
    "Kubernetes deployment",
    "CI/CD pipeline setup",
    "microservices architecture",
    "cloud migration services",
    "serverless applications",
    "cloud security solutions",
    "AWS cloud services",
    "Azure cloud solutions",
    "Google Cloud Platform services",
    "containerization services",
    "cloud native development",
    "infrastructure as code",
    "hybrid cloud solutions"
];
const WEB_APP_KEYWORDS = [
    "web application development",
    "React development services",
    "Next.js development",
    "full stack development",
    "mobile app development",
    "frontend development",
    "backend development",
    "progressive web apps",
    "UI UX design services",
    "enterprise web platforms",
    "SPA development",
    "headless CMS development",
    "performance optimization services",
    "secure web development",
    "responsive web design"
];
const BUSINESS_KEYWORDS = [
    "CRM development",
    "ERP software development",
    "sales automation systems",
    "HR management systems",
    "inventory management software",
    "workflow management tools",
    "finance automation software",
    "project management systems",
    "data visualization tools",
    "enterprise resource planning"
];
const HIGH_INTENT_KEYWORDS = [
    "hire software developers",
    "hire AI engineers",
    "software company for startups",
    "enterprise software solutions provider",
    "request software demo",
    "book consultation",
    "build SaaS product",
    "outsource development",
    "software development partnership",
    "top rated software agency"
];
}),
"[project]/lib/seo/locationKeywords.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALL_LOCATION_KEYWORDS",
    ()=>ALL_LOCATION_KEYWORDS,
    "VELACHERY_AI",
    ()=>VELACHERY_AI,
    "VELACHERY_BASE_SET",
    ()=>VELACHERY_BASE_SET,
    "VELACHERY_BUSINESS",
    ()=>VELACHERY_BUSINESS,
    "VELACHERY_CLOUD",
    ()=>VELACHERY_CLOUD,
    "VELACHERY_CORE",
    ()=>VELACHERY_CORE,
    "VELACHERY_HIGH_INTENT",
    ()=>VELACHERY_HIGH_INTENT,
    "VELACHERY_WEB",
    ()=>VELACHERY_WEB,
    "expandKeywords",
    ()=>expandKeywords
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2f$keywords$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/seo/keywords.ts [app-ssr] (ecmascript)");
;
const LOCATION_SUFFIXES = [
    "Velachery",
    "Velachery Chennai",
    "Chennai",
    "Tamil Nadu",
    "Chennai IT services",
    "Tamil Nadu software company",
    "near me",
    "in Velachery",
    "Velachery area",
    "Chennai south",
    "Tamil Nadu India",
    "service center Velachery",
    "agency in Velachery",
    "company near Velachery"
];
function expandKeywords(baseKeywords) {
    return baseKeywords.flatMap((b)=>LOCATION_SUFFIXES.map((s)=>`${b} ${s}`));
}
const VELACHERY_BASE_SET = [
    "software company Velachery",
    "software company in Velachery",
    "software company Velachery Chennai",
    "IT company Velachery",
    "IT services Velachery Chennai",
    "custom software Velachery",
    "enterprise software Velachery",
    "best software company Velachery",
    "top IT firms in Velachery",
    "software development Velachery Chennai",
    "Velachery tech companies",
    "IT outsourcing Velachery",
    "software solutions Velachery",
    "web development Velachery",
    "mobile app development Velachery",
    "AI services Velachery Chennai"
];
const VELACHERY_CORE = expandKeywords(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2f$keywords$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORE_KEYWORDS"]);
const VELACHERY_AI = expandKeywords(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2f$keywords$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AI_KEYWORDS"]);
const VELACHERY_WEB = expandKeywords(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2f$keywords$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEB_APP_KEYWORDS"]);
const VELACHERY_CLOUD = expandKeywords(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2f$keywords$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CLOUD_KEYWORDS"]);
const VELACHERY_BUSINESS = expandKeywords(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2f$keywords$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUSINESS_KEYWORDS"]);
const VELACHERY_HIGH_INTENT = expandKeywords(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2f$keywords$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HIGH_INTENT_KEYWORDS"]);
const ALL_LOCATION_KEYWORDS = [
    ...VELACHERY_BASE_SET,
    ...VELACHERY_CORE,
    ...VELACHERY_AI,
    ...VELACHERY_WEB,
    ...VELACHERY_CLOUD,
    ...VELACHERY_BUSINESS,
    ...VELACHERY_HIGH_INTENT
];
}),
"[project]/lib/seo/pageMapping.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PAGE_SEO",
    ()=>PAGE_SEO
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2f$metadata$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/seo/metadata.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2f$keywords$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/seo/keywords.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2f$locationKeywords$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/seo/locationKeywords.ts [app-ssr] (ecmascript)");
;
;
;
const PAGE_SEO = {
    home: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2f$metadata$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seo"])({
        title: "Enterprise Software Development Company | Build Scalable Systems Faster",
        description: "Agara Sofvix builds AI-powered enterprise systems that reduce cost, automate workflows, and scale your business faster. Specialized in custom software and digital transformation in Chennai.",
        path: "/",
        keywords: [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2f$keywords$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORE_KEYWORDS"].slice(0, 5),
            ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2f$keywords$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AI_KEYWORDS"].slice(0, 5),
            ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2f$locationKeywords$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VELACHERY_BASE_SET"].slice(0, 5)
        ]
    }),
    services: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2f$metadata$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seo"])({
        title: "Enterprise Solutions & Digital Transformation Services | Scale Your Operations",
        description: "Modernize your business with AI-powered automation, custom CRM systems, and scalable cloud infrastructure. Explore our enterprise-grade digital services.",
        path: "/services",
        keywords: [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2f$keywords$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORE_KEYWORDS"],
            ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2f$keywords$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AI_KEYWORDS"],
            ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2f$locationKeywords$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ALL_LOCATION_KEYWORDS"].slice(0, 10)
        ]
    }),
    products: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2f$metadata$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seo"])({
        title: "Custom SaaS & Enterprise Product Ecosystem | High-Performance Systems",
        description: "Discover our suite of business systems including CRM, Marketing Automation, and Finance Ops. Built for high-performance and seamless scalability.",
        path: "/products",
        keywords: [
            "SaaS products",
            "enterprise software tools",
            "business software Velachery",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2f$keywords$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUSINESS_KEYWORDS"]
        ]
    }),
    about: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2f$metadata$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seo"])({
        title: "About Agara Sofvix | Engineering Excellence & Innovation Culture",
        description: "Learn about our journey, our engineering-first culture, and how we help businesses globally through strategic software architecture and purpose-driven design.",
        path: "/about",
        keywords: [
            "software engineering company",
            "enterprise technology partner",
            "IT company Velachery",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2f$keywords$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HIGH_INTENT_KEYWORDS"]
        ]
    }),
    careers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2f$metadata$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seo"])({
        title: "Career Opportunities for Elite Engineers | Join Agara Sofvix",
        description: "Build the future of enterprise software. We are looking for talented developers, architects, and designers to join our high-performance engineering team.",
        path: "/careers",
        keywords: [
            "software jobs",
            "developer careers",
            "IT jobs Velachery",
            "hiring software engineers Velachery"
        ]
    }),
    getStarted: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2f$metadata$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seo"])({
        title: "Get Started | Contact Agara Sofvix for Custom Software Solutions",
        description: "Ready to transform your business? Contact our team for a free consultation on enterprise systems, AI automation, and scalable digital products.",
        path: "/get-started",
        keywords: [
            "contact software company",
            "hire developers Chennai",
            "software consultation Velachery"
        ]
    })
};
}),
"[project]/app/(admin)/admin/seo/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminSEOPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen.js [app-ssr] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-ssr] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panels-top-left.js [app-ssr] (ecmascript) <export default as Layout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-ssr] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2f$pageMapping$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/seo/pageMapping.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function AdminSEOPage() {
    const [pages, setPages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2f$pageMapping$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PAGE_SEO"]).map(([id, data])=>({
            id,
            title: data.title,
            description: data.description,
            path: data.openGraph?.url || (id === 'home' ? '/' : `/${id}`),
            status: 'optimized',
            lastModified: 'Oct 24, 2023'
        })));
    const [editingPage, setEditingPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeDropdown, setActiveDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const getPageIcon = (id)=>{
        switch(id){
            case 'home':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                    lineNumber: 41,
                    columnNumber: 27
                }, this);
            case 'about':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                    lineNumber: 42,
                    columnNumber: 28
                }, this);
            case 'services':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                    lineNumber: 43,
                    columnNumber: 31
                }, this);
            case 'products':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                    lineNumber: 44,
                    columnNumber: 31
                }, this);
            case 'careers':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                    lineNumber: 45,
                    columnNumber: 30
                }, this);
            case 'get-started':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                    lineNumber: 46,
                    columnNumber: 34
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                    lineNumber: 47,
                    columnNumber: 23
                }, this);
        }
    };
    const handleSave = (e)=>{
        e.preventDefault();
        setPages(pages.map((p)=>p.id === editingPage.id ? editingPage : p));
        setEditingPage(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-black/5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-black text-gray-900 tracking-tight mb-2",
                                children: "Global SEO Control"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 font-medium max-w-xl",
                                children: "Centralized metadata management for search engine visibility and social media appearance across all core platform pages."
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-emerald-50 text-emerald-600 px-6 py-3 rounded-2xl border border-emerald-100 flex items-center gap-3 shadow-sm scale-95 origin-right",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-2 h-2 bg-emerald-500 rounded-full animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-black uppercase tracking-widest",
                                    children: "Health Index: 94%"
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                            lineNumber: 66,
                            columnNumber: 12
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6",
                children: pages.map((page, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: i * 0.05
                        },
                        className: "group bg-white rounded-[40px] border border-black/5 shadow-sm hover:shadow-xl hover:border-[#F97316]/20 transition-all p-8 relative overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 right-0 w-32 h-32 bg-gray-50 -mr-16 -mt-16 rounded-full group-hover:bg-[#F97316]/5 transition-colors"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col xl:flex-row gap-10 items-start xl:items-center relative z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-14 h-14 bg-gray-50 border border-black/5 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-[#F97316] group-hover:text-white group-hover:border-[#F97316] transition-all duration-300",
                                                children: getPageIcon(page.id)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                                lineNumber: 89,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-black uppercase tracking-widest text-gray-400",
                                                        children: "Page ID"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-lg font-black text-gray-900",
                                                        children: page.id
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                                lineNumber: 92,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-grow min-w-0 max-w-2xl bg-gray-50/50 p-6 rounded-3xl border border-black/5 space-y-1 group-hover:bg-white transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-4 h-4 bg-white rounded-full border border-black/5 flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                            className: "w-2 h-2 text-gray-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                                            lineNumber: 102,
                                                            columnNumber: 24
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] text-gray-600 truncate",
                                                        children: page.path
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                                lineNumber: 100,
                                                columnNumber: 18
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-bold text-[#1a0dab] group-hover:underline cursor-pointer transition-all line-clamp-1",
                                                children: page.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                                lineNumber: 106,
                                                columnNumber: 18
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600 leading-relaxed font-normal line-clamp-2",
                                                children: page.description
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                                lineNumber: 107,
                                                columnNumber: 18
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex xl:flex-col items-center xl:items-end gap-6 xl:gap-2 ml-auto shrink-0 w-full xl:w-auto pt-6 xl:pt-0 border-t xl:border-0 border-black/5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full ${page.status === 'optimized' ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-amber-50 text-amber-600 border border-amber-100"}`,
                                                    children: page.status
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 20
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                                lineNumber: 112,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setEditingPage(page),
                                                        className: "flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl text-sm font-black hover:bg-black transition-all shadow-xl hover:-translate-y-0.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                                                lineNumber: 124,
                                                                columnNumber: 22
                                                            }, this),
                                                            "Manage Meta"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 20
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setActiveDropdown(activeDropdown === page.id ? null : page.id),
                                                                className: `p-4 bg-white border border-black/5 rounded-2xl text-gray-400 hover:text-gray-900 transition-all hover:bg-gray-50 ${activeDropdown === page.id ? 'border-[#F97316] text-[#F97316]' : ''}`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                                                                    className: "w-5 h-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                                                    lineNumber: 132,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                                                lineNumber: 128,
                                                                columnNumber: 23
                                                            }, this),
                                                            activeDropdown === page.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "fixed inset-0 z-40",
                                                                        onClick: ()=>setActiveDropdown(null)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                                                        lineNumber: 137,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "absolute right-0 bottom-full mb-2 w-48 bg-white rounded-2xl shadow-2xl border border-black/5 p-2 z-50 overflow-hidden",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>{
                                                                                    window.open(page.path, '_blank');
                                                                                    setActiveDropdown(null);
                                                                                },
                                                                                className: "w-full text-left px-4 py-2.5 hover:bg-gray-50 rounded-xl text-xs font-bold text-gray-700 flex items-center gap-2 group transition-colors",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                                        className: "w-3.5 h-3.5 text-gray-400 group-hover:text-gray-900"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                                                                        lineNumber: 146,
                                                                                        columnNumber: 32
                                                                                    }, this),
                                                                                    "View Live Page"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                                                                lineNumber: 139,
                                                                                columnNumber: 30
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>{
                                                                                    navigator.clipboard.writeText(page.title);
                                                                                    setActiveDropdown(null);
                                                                                },
                                                                                className: "w-full text-left px-4 py-2.5 hover:bg-gray-50 rounded-xl text-xs font-bold text-gray-700 flex items-center gap-2 group transition-colors",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                                        className: "w-3.5 h-3.5 text-gray-400 group-hover:text-gray-900"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                                                                        lineNumber: 156,
                                                                                        columnNumber: 32
                                                                                    }, this),
                                                                                    "Copy Meta Title"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                                                                lineNumber: 149,
                                                                                columnNumber: 30
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "my-1 border-t border-black/5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                                                                lineNumber: 159,
                                                                                columnNumber: 30
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>setActiveDropdown(null),
                                                                                className: "w-full text-left px-4 py-2.5 hover:bg-rose-50 rounded-xl text-xs font-bold text-rose-500 flex items-center gap-2 group transition-colors",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                                                        className: "w-3.5 h-3.5 opacity-50"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                                                                        lineNumber: 164,
                                                                                        columnNumber: 32
                                                                                    }, this),
                                                                                    "SEO Audit"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                                                                lineNumber: 160,
                                                                                columnNumber: 30
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                                                        lineNumber: 138,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                                lineNumber: 119,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this)
                        ]
                    }, page.id, true, {
                        fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: editingPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 z-50 flex items-center justify-center p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            onClick: ()=>setEditingPage(null),
                            className: "absolute inset-0 bg-black/60 backdrop-blur-sm"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                            lineNumber: 182,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                scale: 0.9,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                scale: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                scale: 0.9,
                                y: 20
                            },
                            className: "relative w-full max-w-2xl bg-white rounded-[40px] shadow-2xl overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-8 md:p-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-black text-gray-900",
                                                children: "Edit Page SEO"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                                lineNumber: 186,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setEditingPage(null),
                                                className: "p-2 text-gray-400 hover:text-gray-900 transition-colors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    className: "w-6 h-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 132
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                                lineNumber: 187,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                        lineNumber: 185,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleSave,
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1",
                                                        children: "Meta Title"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        type: "text",
                                                        value: editingPage.title,
                                                        onChange: (e)=>setEditingPage({
                                                                ...editingPage,
                                                                title: e.target.value
                                                            }),
                                                        className: "w-full bg-gray-50 border border-black/5 rounded-2xl px-6 py-4 text-sm font-bold text-gray-900 focus:outline-none focus:border-[#F97316]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] text-gray-400 font-medium px-1",
                                                        children: [
                                                            "Character count: ",
                                                            editingPage.title.length,
                                                            " (Recommended: 50-60)"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                                        lineNumber: 194,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                                lineNumber: 191,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1",
                                                        children: "Meta Description"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        required: true,
                                                        rows: 4,
                                                        value: editingPage.description,
                                                        onChange: (e)=>setEditingPage({
                                                                ...editingPage,
                                                                description: e.target.value
                                                            }),
                                                        className: "w-full bg-gray-50 border border-black/5 rounded-2xl px-6 py-4 text-sm font-medium text-gray-600 focus:outline-none focus:border-[#F97316] resize-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                                        lineNumber: 199,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] text-gray-400 font-medium px-1",
                                                        children: [
                                                            "Character count: ",
                                                            editingPage.description.length,
                                                            " (Recommended: 120-158)"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                                lineNumber: 197,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-4 pt-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setEditingPage(null),
                                                        className: "flex-1 px-8 py-4 bg-gray-100 text-gray-500 rounded-2xl text-sm font-black hover:bg-gray-200 transition-all",
                                                        children: "Cancel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        className: "flex-1 px-8 py-4 bg-[#F97316] text-white rounded-2xl text-sm font-black hover:bg-[#EA580C] transition-all shadow-xl flex items-center justify-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                                className: "w-5 h-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                                                lineNumber: 206,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Save Changes"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                                lineNumber: 203,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                        lineNumber: 190,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                                lineNumber: 184,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                            lineNumber: 183,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                    lineNumber: 181,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/seo/page.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/seo/page.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_9651c1ac._.js.map