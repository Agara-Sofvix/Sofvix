(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/(main)/products/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CATEGORIES",
    ()=>CATEGORIES,
    "SERVICES",
    ()=>SERVICES
]);
const CATEGORIES = [
    {
        id: "cx-sales",
        name: "Customer Experience & Sales Systems",
        slug: "customer-experience-sales",
        icon: "Users",
        overview: "We unify your entire customer lifecycle — from lead generation to post-sales support — into a single intelligent system.",
        approach: "API-driven CRM ecosystem, Workflow automation engines, Real-time customer data synchronization",
        outcomes: [
            "Faster lead conversion cycles",
            "Improved customer retention",
            "Increased lifetime value"
        ],
        capabilities: [
            {
                name: "Centralized CRM & pipeline management",
                slug: "crm-pipeline",
                icon: "Users",
                description: "A unified platform to manage every stage of your sales funnel, from lead capture to closing deals. Our CRM systems are engineered for high-velocity sales teams who require real-time visibility and automated precision. We eliminate the friction between marketing leads and sales closures by creating a single source of truth for every customer interaction.",
                features: [
                    "Lead Scoring",
                    "Automated Follow-ups",
                    "Real-time Sales Tracking",
                    "Pipeline Visualization"
                ],
                benefits: [
                    "Improved conversion rates",
                    "Clearer sales visibility",
                    "Reduced manual data entry"
                ],
                whoNeeds: "B2B enterprises and high-growth startups experiencing lead leakage or fragmented customer data across multiple spreadsheets.",
                problemsSolved: [
                    "Fragmented customer data",
                    "Slow lead response times",
                    "Inaccurate sales forecasting",
                    "Manual data entry bottlenecks"
                ],
                useCases: [
                    "High-volume lead management",
                    "Enterprise sales pipeline tracking",
                    "Customer lifecycle automation"
                ],
                outcomes: "Average 40% increase in sales team productivity and 25% improvement in lead-to-close conversion rates within the first 6 months.",
                faqs: [
                    {
                        q: "How long does the CRM integration take?",
                        a: "Standard enterprise implementations typically take 4-6 weeks depending on data volume and custom workflow complexity."
                    },
                    {
                        q: "Can it sync with my existing email tools?",
                        a: "Yes, our CRM architecture provides native bi-directional sync with Gmail, Outlook, and major enterprise communication suites."
                    }
                ]
            },
            {
                name: "Omnichannel communication",
                slug: "omnichannel-communication",
                icon: "MessageSquare",
                description: "Engage customers across email, chat, social messaging, and phone — all from a single interface. Modern consumers expect immediate responses on their preferred platform. Our omnichannel solutions unify these disparate streams into a cohesive conversation thread, allowing your agents to provide superior support without switching apps.",
                features: [
                    "Unified Inbox",
                    "Chatbots & AI Assistants",
                    "Cross-channel History",
                    "Automated Ticketing"
                ],
                benefits: [
                    "Seamless customer experience",
                    "Faster response times",
                    "Reduced agent fatigue"
                ],
                whoNeeds: "Support and sales teams struggling to manage high volumes of inquiries across multiple social and digital platforms.",
                problemsSolved: [
                    "Disconnected customer conversations",
                    "Increasing response time SLAs",
                    "Agent burnout from app-switching",
                    "High volume support costs"
                ],
                useCases: [
                    "24/7 AI-driven support",
                    "Social media sales engagement",
                    "Internal cross-department communication"
                ],
                outcomes: "Significant reduction in first-response time (FRT) and up to 50% decrease in overall support ticket volume through AI self-service.",
                faqs: [
                    {
                        q: "Which platforms are supported?",
                        a: "We support WhatsApp, Facebook Messenger, Instagram, LinkedIn, Email, Live Chat, and Voice integrations."
                    },
                    {
                        q: "Is the AI assistant customizable?",
                        a: "Absolutely. We train the AI on your specific business knowledge base and brand voice for accurate, human-like interactions."
                    }
                ]
            },
            {
                name: "Appointment scheduling",
                slug: "appointment-scheduling",
                icon: "Calendar",
                description: "Intelligent booking systems that eliminate back-and-forth emails and maximize your team's availability. Our scheduling architecture handles complex resource allocation, multi-time zone coordination, and automated reminder cascades to ensure your calendar stays optimized and your show-up rates remain high.",
                features: [
                    "Self-service Booking",
                    "Automated Reminders",
                    "Calendar Sync",
                    "Resource Allocation"
                ],
                benefits: [
                    "Zero double-bookings",
                    "Higher show-up rates",
                    "Improved client satisfaction"
                ],
                whoNeeds: "Professional service providers, medical clinics, and sales teams managing high-volume consultation schedules.",
                problemsSolved: [
                    "Manual booking overhead",
                    "Missed appointments (No-shows)",
                    "Time-zone scheduling errors",
                    "Calendar fragmentation"
                ],
                useCases: [
                    "Client consultation booking",
                    "Service technician dispatch",
                    "Internal meeting orchestration"
                ],
                outcomes: "Average 40% reduction in admin overhead and 30% increase in billable hours through optimized scheduling.",
                faqs: [
                    {
                        q: "Is it mobile friendly?",
                        a: "Yes, the booking interface is fully responsive and optimized for mobile devices."
                    },
                    {
                        q: "Can we collect payments?",
                        a: "We can integrate Stripe or PayPal for upfront payments at the time of booking."
                    }
                ]
            },
            {
                name: "Field service systems",
                slug: "field-service",
                icon: "MapPin",
                description: "Empower your mobile workforce with real-time job tracking, offline access, and integrated billing. Our field service solutions bridge the gap between dispatch and the job site, providing technicians with historical customer data and managers with real-time fleet visibility.",
                features: [
                    "Job Dispatching",
                    "Router Optimization",
                    "Mobile App Access",
                    "Digital Job Sign-off"
                ],
                benefits: [
                    "Optimized travel time",
                    "Faster service delivery",
                    "Error-free field operations"
                ],
                whoNeeds: "Home service companies, telecommunications providers, and enterprise maintenance departments.",
                problemsSolved: [
                    "Paper-based job tracking errors",
                    "Inefficient technician routing",
                    "Delayed billing cycles",
                    "Lack of real-time job visibility"
                ],
                useCases: [
                    "HVAC/Plumbing dispatch",
                    "Telecom infrastructure maintenance",
                    "Property management inspections"
                ],
                outcomes: "Up to 25% reduction in fuel costs and 50% faster invoicing through digital field completion.",
                faqs: [
                    {
                        q: "Does it work without internet?",
                        a: "Yes, our mobile apps support full offline mode with background sync when reconnected."
                    },
                    {
                        q: "Can customers track technicians?",
                        a: "We provide Uber-style real-time tracking links for customers via SMS."
                    }
                ]
            },
            {
                name: "Customer onboarding",
                slug: "customer-onboarding",
                icon: "UserPlus",
                description: "Streamline the post-sale transition with automated welcome flows and structured project management. First impressions are critical; our onboarding systems ensure every new client feels supported through automated milestones and transparent progress tracking.",
                features: [
                    "Automated Welcome Emails",
                    "Onboarding Checklists",
                    "Resource Delivery",
                    "Client Portal Access"
                ],
                benefits: [
                    "Faster time-to-value",
                    "Consistent client experience",
                    "Scalable onboarding process"
                ],
                whoNeeds: "SaaS companies and service agencies with complex implementation processes following a sale.",
                problemsSolved: [
                    "Lack of post-sale momentum",
                    "Manual client data collection",
                    "Unclear project milestones",
                    "High early-churn risk"
                ],
                useCases: [
                    "Software implementation tracking",
                    "Client document collection",
                    "Structured training delivery"
                ],
                outcomes: "Significant improvement in 'Time to First Value' and higher long-term customer retention rates.",
                faqs: [
                    {
                        q: "How many phases can we add?",
                        a: "The system is infinitely customizable to your specific project lifecycle."
                    },
                    {
                        q: "Can clients upload documents?",
                        a: "Yes, we provide a secure portal with encrypted document storage and verification."
                    }
                ]
            }
        ]
    },
    {
        id: "marketing",
        name: "Marketing & Growth Automation",
        slug: "marketing-growth",
        icon: "Megaphone",
        overview: "We build performance-driven marketing systems that automate engagement and maximize conversion.",
        approach: "Behavior-based automation flows, Multi-channel campaign orchestration, Data-driven optimization frameworks",
        outcomes: [
            "Increased lead generation",
            "Higher engagement rates",
            "Improved ROI on marketing spend"
        ],
        capabilities: [
            {
                name: "Email & campaign automation",
                slug: "email-automation",
                icon: "Mail",
                description: "Scale your reach with personalized, behavior-driven email sequences that nurture leads automatically. Our automation engines handle the complexity of segmenting your audience based on real-time behavior, ensuring the right message reaches the right person at the exact moment of highest interest.",
                features: [
                    "Dynamic Content",
                    "Drip Campaigns",
                    "A/B Testing",
                    "Behavioral Triggers"
                ],
                benefits: [
                    "Higher engagement",
                    "Consistent nurturing",
                    "Scalable communication"
                ],
                whoNeeds: "Marketing teams looking to scale lead nurturing without increasing headcount or compromising on personalization.",
                problemsSolved: [
                    "Low email engagement rates",
                    "Manual campaign execution overhead",
                    "Static one-size-fits-all messaging",
                    "Lack of behavioral insights"
                ],
                useCases: [
                    "SaaS onboarding flows",
                    "E-commerce abandoned cart recovery",
                    "B2B lead nurturing sequences"
                ],
                outcomes: "Average 3x increase in click-through rates and 60% reduction in manual marketing campaign deployment time.",
                faqs: [
                    {
                        q: "Do you provide email templates?",
                        a: "Yes, we build a custom library of high-performance, mobile-responsive templates tailored to your brand."
                    },
                    {
                        q: "How do you ensure deliverability?",
                        a: "We implement advanced SPF/DKIM/DMARC configurations and behavioral throttles to maintain elite sender reputation."
                    }
                ]
            },
            {
                name: "Social media management",
                slug: "social-media-management",
                icon: "Share2",
                description: "Manage multiple social platforms from one place, schedule posts, and track engagement in real-time. Our enterprise-grade social suite provides a unified command center for global brands to maintain consistency across every channel while empowering local teams to engage authentically.",
                features: [
                    "Unified Calendar",
                    "Post Scheduling",
                    "Social Listening",
                    "Engagement Analytics"
                ],
                benefits: [
                    "Consistent brand voice",
                    "Saved time on posting",
                    "Better performance tracking"
                ],
                whoNeeds: "Digital marketing agencies and large organizations managing complex social presence across decentralized teams.",
                problemsSolved: [
                    "Inconsistent brand messaging",
                    "Manual social posting inefficiencies",
                    "Lack of cross-platform reporting",
                    "Slow social response times"
                ],
                useCases: [
                    "Global brand orchestration",
                    "Crisis management monitoring",
                    "Customer advocacy tracking"
                ],
                outcomes: "Up to 70% time saved on social operations and more professional, data-driven content strategy execution.",
                faqs: [
                    {
                        q: "Can we manage direct messages here?",
                        a: "Yes, all DMs across platforms are unified into a single priority inbox for your social team."
                    },
                    {
                        q: "Does it support video scheduling?",
                        a: "Fully supported across Reels, TikTok, YouTube Shorts, and LinkedIn video content."
                    }
                ]
            },
            {
                name: "Lead capture workflows",
                slug: "lead-capture",
                icon: "Zap",
                description: "Turn website visitors into leads with intelligent forms, popups, and automated capture systems. We reduce friction at the point of entry and ensure every hot lead is processed instantly by your sales team using real-time routing and lead scoring metrics.",
                features: [
                    "Smart Forms",
                    "Exit-intent Popups",
                    "Immediate Auto-responses",
                    "Lead Scoring Integration"
                ],
                benefits: [
                    "Increased capture rates",
                    "Cleaner lead data",
                    "Faster initial contact"
                ],
                whoNeeds: "E-commerce and SaaS sites with high traffic but low conversion-to-lead ratios.",
                problemsSolved: [
                    "Missed website opportunities",
                    "Slow lead follow-up",
                    "Low identity resolution",
                    "Messy CRM data"
                ],
                useCases: [
                    "Gated content capture",
                    "Exit-intent discounts",
                    "Newsletter growth"
                ],
                outcomes: "Average 40% increase in lead volume and significant improvement in lead quality through smart validation.",
                faqs: [
                    {
                        q: "Do the popups disrupt SEO?",
                        a: "No, we follow Google's best practices for non-intrusive interstitials."
                    },
                    {
                        q: "Can we A/B test forms?",
                        a: "Yes, built-in multivariate testing comes standard."
                    }
                ]
            },
            {
                name: "Webinar & event systems",
                slug: "event-webinar-systems",
                icon: "Video",
                description: "Host engaging virtual events and webinars with automated registration and follow-up flows. Our event architecture is designed for lead generation, providing high-fidelity engagement tools and deep analytics into attendee behavior during and after the live session.",
                features: [
                    "Registration Portals",
                    "Live Q&A & Polls",
                    "Pre-recorded Playback",
                    "Attendee Analytics"
                ],
                benefits: [
                    "Broader audience reach",
                    "Higher attendee engagement",
                    "Easy follow-up management"
                ],
                whoNeeds: "B2B marketing teams using education-based marketing as a primary lead generator.",
                problemsSolved: [
                    "Low webinar attendance",
                    "Disconnected follow-up workflows",
                    "Manual event management fatigue",
                    "Lack of attendee engagement data"
                ],
                useCases: [
                    "Product launch events",
                    "Customer training workshops",
                    "Thought leadership series"
                ],
                outcomes: "Higher conversion to qualified meetings post-event and professional attendee experience.",
                faqs: [
                    {
                        q: "Is registration automated?",
                        a: "Yes, from landing page to calendar invite and reminder SMS."
                    },
                    {
                        q: "Can we record the session?",
                        a: "Automatically recorded and delivered as an evergreen asset to those who missed it."
                    }
                ]
            },
            {
                name: "Conversion-focused landing pages",
                slug: "landing-page-optimization",
                icon: "Layout",
                description: "Design and deploy high-converting landing pages that are perfectly aligned with your ad campaigns. We combine psychological triggers with lightning-fast performance to ensure your ad spend results in measurable pipeline growth and superior user experience.",
                features: [
                    "Drag-and-drop Builder",
                    "Mobile Optimization",
                    "A/B Testing",
                    "SEO Best Practices"
                ],
                benefits: [
                    "Better ad ROI",
                    "Improved user experience",
                    "Clearer conversion paths"
                ],
                whoNeeds: "Performance marketers scaling Google Ads or Meta campaigns who need rapid page deployment.",
                problemsSolved: [
                    "High bounce rates on ads",
                    "Slow IT deployment for marketing",
                    "Inconsistent brand styling",
                    "Poor mobile conversion"
                ],
                useCases: [
                    "PPC landing pages",
                    "New product launches",
                    "Campaign-specific capture"
                ],
                outcomes: "Up to 100% improvement in conversion rates compared to generic website pages.",
                faqs: [
                    {
                        q: "Are the pages fast?",
                        a: "Optimized for sub-second load times and 100/100 Google Lighthouse scores."
                    },
                    {
                        q: "Can we host on our subdomain?",
                        a: "Yes, we handle the SSL and DNS configuration for you."
                    }
                ]
            }
        ]
    },
    {
        id: "commerce",
        name: "Commerce & Revenue Systems",
        slug: "commerce-revenue",
        icon: "ShoppingCart",
        overview: "We enable seamless selling experiences across both digital and physical channels.",
        approach: "Omnichannel commerce integration, Secure payment infrastructure, Real-time transaction tracking",
        outcomes: [
            "Faster checkout experiences",
            "Increased revenue streams",
            "Scalable commerce operations"
        ],
        capabilities: [
            {
                name: "Retail POS systems",
                slug: "retail-pos",
                icon: "ShoppingCart",
                description: "Modern point-of-sale systems that sync inventory and sales data across physical and digital stores.",
                features: [
                    "Offline Mode",
                    "Inventory Sync",
                    "Customer Loyalty Integration",
                    "Multi-store Management"
                ],
                benefits: [
                    "Unified sales data",
                    "Improved checkout speed",
                    "Better inventory control"
                ]
            },
            {
                name: "eCommerce platform development",
                slug: "ecommerce-platform",
                icon: "Globe",
                description: "Custom, high-performance online stores designed for maximum conversion and lightning-fast speed.",
                features: [
                    "PWA Capabilities",
                    "Custom Checkout Flows",
                    "Headless Architecture",
                    "Mobile-first Design"
                ],
                benefits: [
                    "Higher conversion rates",
                    "Faster page loads",
                    "Infinite scalability"
                ]
            },
            {
                name: "Payment gateway integrations",
                slug: "payment-gateways",
                icon: "CreditCard",
                description: "Secure, global payment processing supporting multiple currencies, local methods, and fraud protection.",
                features: [
                    "Global Payouts",
                    "Fraud Prevention",
                    "Multi-currency Support",
                    "One-click Checkout"
                ],
                benefits: [
                    "Reduced cart abandonment",
                    "Secure transactions",
                    "Global reach"
                ]
            },
            {
                name: "Subscription & billing systems",
                slug: "subscription-billing",
                icon: "BarChart3",
                description: "Automate recurring revenue, manage trials, upgrades, and cancellations with intelligent billing engines.",
                features: [
                    "Automated Invoicing",
                    "Dunning Management",
                    "Usage-based Billing",
                    "Revenue Recognition"
                ],
                benefits: [
                    "Reduced churn",
                    "Automated revenue ops",
                    "Clearer MRR/ARR tracking"
                ]
            }
        ]
    },
    {
        id: "finance-ops",
        name: "Finance & Business Operations",
        slug: "finance-operations",
        icon: "BarChart3",
        overview: "We provide complete financial visibility and operational control through integrated systems.",
        approach: "Centralized financial data systems, Automated reconciliation workflows, Real-time reporting dashboards",
        outcomes: [
            "Reduced financial errors",
            "Better decision-making insights",
            "Improved operational efficiency"
        ],
        capabilities: [
            {
                name: "Accounting & financial reporting",
                slug: "accounting-reporting",
                icon: "BarChart3",
                description: "Automate your bookkeeping and generate real-time financial statements with integrated accounting systems.",
                features: [
                    "Automated Reconciliation",
                    "Financial Dashboards",
                    "Tax Compliance",
                    "Multi-entity Reporting"
                ],
                benefits: [
                    "Faster month-end close",
                    "Real-time financial health",
                    "Reduced manual errors"
                ]
            },
            {
                name: "Expense and payroll management",
                slug: "expense-payroll",
                icon: "DollarSign",
                description: "Streamline employee payments and expense reimbursements with automated approval workflows.",
                features: [
                    "One-click Payroll",
                    "Automated Expense Tracking",
                    "Compliance Guardrails",
                    "Direct Deposit Integration"
                ],
                benefits: [
                    "Reduced admin overhead",
                    "Happier employees",
                    "Guaranteed compliance"
                ]
            },
            {
                name: "Inventory & procurement systems",
                slug: "inventory-procurement",
                icon: "Box",
                description: "Master your supply chain with intelligent stock tracking, purchase order automation, and vendor management.",
                features: [
                    "Low-stock Alerts",
                    "Vendor Portals",
                    "Batch & Serial Tracking",
                    "Procurement Workflows"
                ],
                benefits: [
                    "Reduced stockouts",
                    "Optimized capital",
                    "Better vendor relations"
                ]
            },
            {
                name: "Billing & invoicing",
                slug: "billing-invoicing",
                icon: "FileText",
                description: "Create professional invoices automatically and get paid faster with integrated payment reminders.",
                features: [
                    "Custom Invoice Templates",
                    "Automated Reminders",
                    "Online Payment Portals",
                    "Recurring Invoices"
                ],
                benefits: [
                    "Improved cash flow",
                    "Reduced AR aging",
                    "Professional brand image"
                ]
            },
            {
                name: "ERP integration",
                slug: "erp-integration",
                icon: "Building",
                description: "Connect your core business functions into a single, unified ERP system for true operational synergy.",
                features: [
                    "Cross-department Data",
                    "Unified Workflows",
                    "Master Data Management",
                    "Legacy System Bridge"
                ],
                benefits: [
                    "Single source of truth",
                    "Breaking departmental silos",
                    "Streamlined operations"
                ]
            }
        ]
    },
    {
        id: "productivity",
        name: "Workplace Productivity & Collaboration",
        slug: "productivity-collaboration",
        icon: "Mail",
        overview: "We create a unified digital workplace where teams collaborate efficiently and execute faster.",
        approach: "Cloud-based collaboration systems, Role-based access control, Real-time synchronization",
        outcomes: [
            "Improved team productivity",
            "Faster internal communication",
            "Better project coordination"
        ],
        capabilities: [
            {
                name: "Document collaboration tools",
                slug: "document-collaboration",
                icon: "Files",
                description: "Create, share, and edit documents in real-time with your team, strictly controlled by enterprise security.",
                features: [
                    "Real-time Co-editing",
                    "Version Control",
                    "External Sharing Controls",
                    "AI Content Assistant"
                ],
                benefits: [
                    "Reduced email clutter",
                    "Faster document cycles",
                    "Always the latest version"
                ]
            },
            {
                name: "Internal communication platforms",
                slug: "internal-communication",
                icon: "MessageSquare",
                description: "Connect your team with instant messaging, channels, and video calls designed for business focus.",
                features: [
                    "Threaded Channels",
                    "Guest Access",
                    "Deep App Integrations",
                    "Searchable History"
                ],
                benefits: [
                    "Breaking communication barriers",
                    "Faster decision making",
                    "Preserved context"
                ]
            },
            {
                name: "Task and calendar management",
                slug: "task-calendar-management",
                icon: "Calendar",
                description: "Organize your team's work with integrated task boards and shared calendars that keep everyone aligned.",
                features: [
                    "Kanban & List Views",
                    "Recurring Tasks",
                    "Team Calendar Sync",
                    "Time Tracking"
                ],
                benefits: [
                    "Clear accountability",
                    "Proper resource planning",
                    "Reduced missed deadlines"
                ]
            },
            {
                name: "Shared inbox systems",
                slug: "shared-inbox",
                icon: "Inbox",
                description: "Transform support and sales email addresses into collaborative workspaces for your whole team.",
                features: [
                    "Email Assignments",
                    "Internal Comments",
                    "Shared Drafts",
                    "SLA Tracking"
                ],
                benefits: [
                    "Zero missed emails",
                    "Faster team responses",
                    "Eliminated duplicate work"
                ]
            },
            {
                name: "Office productivity integration",
                slug: "office-integration",
                icon: "Layout",
                description: "Deeply integrate your core office suite with your custom business applications and workflows.",
                features: [
                    "Outlook/Google Sync",
                    "Widget Embedding",
                    "Automated Data Push",
                    "Single Sign-on"
                ],
                benefits: [
                    "Seamless user experience",
                    "Eliminated app switching",
                    "Better data consistency"
                ]
            }
        ]
    },
    {
        id: "hr",
        name: "Human Resources & Workforce Management",
        slug: "hr-workforce",
        icon: "Users",
        overview: "We streamline the entire employee lifecycle from hiring to performance management.",
        approach: "Automated HR workflows, Employee data centralization, Compliance-ready systems",
        outcomes: [
            "Reduced HR workload",
            "Improved employee experience",
            "Efficient workforce management"
        ],
        capabilities: [
            {
                name: "Recruitment & applicant tracking",
                slug: "recruitment-ats",
                icon: "Briefcase",
                description: "Modernize your hiring process with automated job postings, resume parsing, and interview scheduling.",
                features: [
                    "Job Board Multi-posting",
                    "AI Resume Screening",
                    "Interview Scorecards",
                    "Offer Letter Automation"
                ],
                benefits: [
                    "Faster time-to-hire",
                    "Higher quality candidates",
                    "Better candidate experience"
                ]
            },
            {
                name: "Payroll & compliance",
                slug: "payroll-compliance",
                icon: "ShieldCheck",
                description: "Ensure error-free payroll processing and stay compliant with ever-changing labor laws automatically.",
                features: [
                    "Tax Filing Automation",
                    "Statutory Compliance",
                    "Direct Deposit Integration",
                    "Payroll Reports"
                ],
                benefits: [
                    "Eliminated payroll errors",
                    "Guaranteed legal compliance",
                    "Reduced administrative burden"
                ]
            },
            {
                name: "Attendance & shift scheduling",
                slug: "attendance-scheduling",
                icon: "Clock",
                description: "Manage workforce time-tracking and complex shift rotations with ease through a unified portal.",
                features: [
                    "Biometric Integration",
                    "Geo-fenced Clock-ins",
                    "Automated Shift Swaps",
                    "Overtime Tracking"
                ],
                benefits: [
                    "Reduced labor costs",
                    "Fair shift allocation",
                    "Accurate time records"
                ]
            },
            {
                name: "Employee expense tracking",
                slug: "employee-expenses",
                icon: "DollarSign",
                description: "Simplify how employees submit expenses and get reimbursed with automated approval chains.",
                features: [
                    "Receipt Scanning (OCR)",
                    "Policy Enforcement",
                    "Automatic Category Tagging",
                    "ERP Accounting Sync"
                ],
                benefits: [
                    "Zero paper receipts",
                    "Faster reimbursements",
                    "Controlled spending"
                ]
            },
            {
                name: "Workforce planning systems",
                slug: "workforce-planning",
                icon: "PieChart",
                description: "Predict future hiring needs and optimize your current talent pool with data-driven workforce analytics.",
                features: [
                    "Gap Analysis",
                    "Succession Planning",
                    "Skills Inventory",
                    "Budget Forecasting"
                ],
                benefits: [
                    "Reduced talent gaps",
                    "Better talent retention",
                    "Aligned growth strategy"
                ]
            }
        ]
    },
    {
        id: "it-security",
        name: "IT, Security & Developer Ecosystem",
        slug: "it-security-development",
        icon: "Lock",
        overview: "We build secure, scalable, and high-performance digital infrastructure tailored for modern businesses.",
        approach: "Microservices & modular architecture, Secure authentication frameworks, DevOps & CI/CD pipelines",
        outcomes: [
            "Faster development cycles",
            "Strong data security",
            "Scalable infrastructure"
        ],
        capabilities: [
            {
                name: "Custom application development",
                slug: "custom-app-dev",
                icon: "Code2",
                description: "Build bespoke web and mobile applications designed to solve your unique business challenges at scale.",
                features: [
                    "React/Next.js Architecture",
                    "Scalable Microservices",
                    "API-first Design",
                    "Cloud-native Deployment"
                ],
                benefits: [
                    "Unique competitive advantage",
                    "Infinite scalability",
                    "Better user experience"
                ]
            },
            {
                name: "Workflow automation (RPA)",
                slug: "workflow-automation-rpa",
                icon: "Cpu",
                description: "Eliminate repetitive tasks with intelligent robotic process automation that works across all your apps.",
                features: [
                    "No-code Bot Builder",
                    "Visual Workflow Designer",
                    "Error Handling Logic",
                    "Schedule-based Triggers"
                ],
                benefits: [
                    "Zero human errors",
                    "Massive time savings",
                    "Focus on high-value work"
                ]
            },
            {
                name: "Identity & access management",
                slug: "iam-security",
                icon: "Key",
                description: "Secure your business with single sign-on (SSO), multi-factor authentication, and granular access controls.",
                features: [
                    "SSO (SAML/OIDC)",
                    "MFA Enforced Policies",
                    "Role-based Access Control",
                    "User Lifecycle Logs"
                ],
                benefits: [
                    "Reduced breach risk",
                    "Seamless user login",
                    "Simplified IT auditing"
                ]
            },
            {
                name: "Security & compliance systems",
                slug: "security-compliance",
                icon: "Lock",
                description: "Implement continuous security monitoring and stay compliant with SOC2, GDPR, and ISO standards.",
                features: [
                    "Threat Detection",
                    "Automated Compliance Checks",
                    "Data Encryption at Rest",
                    "Vulnerability Scanning"
                ],
                benefits: [
                    "Protected company reputation",
                    "Customer data trust",
                    "Avoided legal fines"
                ]
            },
            {
                name: "Testing & optimization",
                slug: "performance-testing",
                icon: "LineChart",
                description: "Ensure your systems are always running at peak performance with automated testing and optimization suites.",
                features: [
                    "Load & Stress Testing",
                    "Automated Regression",
                    "Real-time Site Monitoring",
                    "Optimization Roadmaps"
                ],
                benefits: [
                    "Higher system uptime",
                    "Better site conversion",
                    "Early bug detection"
                ]
            }
        ]
    },
    {
        id: "data-ai",
        name: "Data, Analytics & IoT Intelligence",
        slug: "data-analytics-ai",
        icon: "PieChart",
        overview: "We transform raw data into actionable insights and intelligent decision-making systems.",
        approach: "Centralized data pipelines, AI-powered analytics layers, Real-time data visualization",
        outcomes: [
            "Data-driven decision making",
            "Predictive insights",
            "Competitive advantage"
        ],
        capabilities: [
            {
                name: "BI dashboards",
                slug: "bi-dashboards",
                icon: "BarChart3",
                description: "Visualize your core business metrics in real-time with beautiful, interactive business intelligence dashboards.",
                features: [
                    "Interactive Charting",
                    "Custom KPI Tracking",
                    "Drill-down Capabilities",
                    "Automated Data Refresh"
                ],
                benefits: [
                    "Faster decision making",
                    "Visible business trends",
                    "Unified reporting"
                ]
            },
            {
                name: "Data integration & transformation",
                slug: "data-integration-etl",
                icon: "Database",
                description: "Clean, normalize, and sync data from all your disparate sources into a single high-performance data warehouse.",
                features: [
                    "Automated ETL Pipelines",
                    "Data Cleaning Logic",
                    "Multi-source Connectors",
                    "Scheduled Syncing"
                ],
                benefits: [
                    "Accurate data insights",
                    "Reduced engineering time",
                    "Future-proof data stack"
                ]
            },
            {
                name: "Embedded analytics",
                slug: "embedded-analytics",
                icon: "PieChart",
                description: "Provide powerful analytical capabilities directly within your internal or customer-facing applications.",
                features: [
                    "White-label Reporting",
                    "Customer Facing Portals",
                    "Customizable Widgets",
                    "API-driven Data Viz"
                ],
                benefits: [
                    "Increased app value",
                    "Empowered end-users",
                    "Professional data delivery"
                ]
            },
            {
                name: "AI-driven reporting",
                slug: "ai-reporting",
                icon: "Cpu",
                description: "Leverage machine learning to automatically find patterns, anomalies, and insights in your datasets.",
                features: [
                    "Anomaly Detection",
                    "Natural Language Queries",
                    "Predictive Forecasting",
                    "Automated Insights"
                ],
                benefits: [
                    "Proactive issue resolution",
                    "Uncovered growth areas",
                    "Reduced manual analysis"
                ]
            },
            {
                name: "IoT-based monitoring",
                slug: "iot-monitoring",
                icon: "Activity",
                description: "Connect physical assets to your digital systems for real-time monitoring and predictive maintenance.",
                features: [
                    "Sensor Integration",
                    "Real-time Telemetry",
                    "Predictive Maintenance",
                    "Asset Utilization Tracking"
                ],
                benefits: [
                    "Reduced equipment downtime",
                    "Remote operational control",
                    "Extended asset life"
                ]
            }
        ]
    }
];
const SERVICES = [
    // 1. CX & Sales
    {
        name: "CRM",
        description: "Centralized CRM & pipeline management.",
        category: "cx-sales",
        href: "#",
        icon: "Users"
    },
    {
        name: "Bigin",
        description: "Streamlined sales for rising businesses.",
        category: "cx-sales",
        href: "#",
        icon: "Zap"
    },
    {
        name: "SalesIQ",
        description: "Omnichannel customer engagement & chat.",
        category: "cx-sales",
        href: "#",
        icon: "MessageSquare"
    },
    {
        name: "Bookings",
        description: "Unified appointment scheduling system.",
        category: "cx-sales",
        href: "#",
        icon: "Calendar"
    },
    {
        name: "Sign",
        description: "Digital signature & contract automation.",
        category: "cx-sales",
        href: "#",
        icon: "FileSignature"
    },
    // 2. Marketing
    {
        name: "Campaigns",
        description: "Multi-channel marketing orchestration.",
        category: "marketing",
        href: "#",
        icon: "Megaphone"
    },
    {
        name: "Social",
        description: "Enterprise social media management.",
        category: "marketing",
        href: "#",
        icon: "Share2"
    },
    {
        name: "Marketing Automation",
        description: "Behavior-based customer journeys.",
        category: "marketing",
        href: "#",
        icon: "Zap"
    },
    {
        name: "Webinar",
        description: "Engagement-focused virtual event platform.",
        category: "marketing",
        href: "#",
        icon: "Video"
    },
    // 3. Commerce
    {
        name: "Retail POS",
        description: "High-performance physical retail systems.",
        category: "commerce",
        href: "#",
        icon: "ShoppingCart"
    },
    {
        name: "eCommerce",
        description: "Scalable digital storefront architecture.",
        category: "commerce",
        href: "#",
        icon: "Globe"
    },
    {
        name: "Billing & Subscriptions",
        description: "Automated recurring revenue management.",
        category: "commerce",
        href: "#",
        icon: "CreditCard"
    },
    // 4. Finance & Ops
    {
        name: "Books & Accounting",
        description: "Complete financial visibility & reporting.",
        category: "finance-ops",
        href: "#",
        icon: "BarChart3"
    },
    {
        name: "Expense & Payroll",
        description: "Automated operational spend management.",
        category: "finance-ops",
        href: "#",
        icon: "DollarSign"
    },
    {
        name: "Inventory Ops",
        description: "Real-time supply chain & stock control.",
        category: "finance-ops",
        href: "#",
        icon: "Box"
    },
    {
        name: "ERP Enterprise",
        description: "Unified core business operations.",
        category: "finance-ops",
        href: "#",
        icon: "Building"
    },
    // 5. Productivity
    {
        name: "Workplace",
        description: "Unified digital collaboration environment.",
        category: "productivity",
        href: "#",
        icon: "Layout"
    },
    {
        name: "Projects",
        description: "Architecture-driven project delivery.",
        category: "productivity",
        href: "#",
        icon: "Trello"
    },
    {
        name: "Meeting",
        description: "Secure enterprise video communication.",
        category: "productivity",
        href: "#",
        icon: "Video"
    },
    // 6. HR
    {
        name: "People Management",
        description: "End-to-end employee lifecycle system.",
        category: "hr",
        href: "#",
        icon: "Users"
    },
    {
        name: "Recruitment",
        description: "Intelligent applicant tracking (ATS).",
        category: "hr",
        href: "#",
        icon: "Briefcase"
    },
    // 7. IT & Security
    {
        name: "Identity & Access",
        description: "Zero-trust security & MFA systems.",
        category: "it-security",
        href: "#",
        icon: "ShieldCheck"
    },
    {
        name: "App Development",
        description: "Scalable microservices & custom web apps.",
        category: "it-security",
        href: "#",
        icon: "Code2"
    },
    {
        name: "Cyber Security",
        description: "Enterprise-grade threat protection.",
        category: "it-security",
        href: "#",
        icon: "Lock"
    },
    // 8. Data & AI
    {
        name: "Analytics BI",
        description: "Data-driven decision support systems.",
        category: "data-ai",
        href: "#",
        icon: "PieChart"
    },
    {
        name: "Data Engineering",
        description: "Intelligent data pipelines & ETL.",
        category: "data-ai",
        href: "#",
        icon: "Database"
    },
    {
        name: "AI & IoT",
        description: "Predictive analytics & smart monitoring.",
        category: "data-ai",
        href: "#",
        icon: "Cpu"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/HomeClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HomeClient",
    ()=>HomeClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/terminal.js [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/monitor.js [app-client] (ecmascript) <export default as Monitor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/megaphone.js [app-client] (ecmascript) <export default as Megaphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PieChart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-pie.js [app-client] (ecmascript) <export default as PieChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$products$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/products/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const ICON_MAP = {
    Users: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    Megaphone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"],
    ShoppingCart: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"],
    BarChart3: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
    Mail: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
    Box: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
    Lock: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"],
    PieChart: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PieChart$3e$__["PieChart"],
    Globe: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
    Zap: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"]
};
function HomeClient() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const fadeInUp = {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.6
        }
    };
    const services = [
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                className: "w-8 h-8"
            }, void 0, false, {
                fileName: "[project]/components/HomeClient.tsx",
                lineNumber: 51,
                columnNumber: 13
            }, this),
            title: "Infrastructure",
            description: "Scalable cloud and local infrastructure solutions designed for maximum uptime and security."
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                className: "w-8 h-8"
            }, void 0, false, {
                fileName: "[project]/components/HomeClient.tsx",
                lineNumber: 56,
                columnNumber: 13
            }, this),
            title: "Automation",
            description: "Streamline your workflows with custom automation tools and intelligent process optimization."
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                className: "w-8 h-8"
            }, void 0, false, {
                fileName: "[project]/components/HomeClient.tsx",
                lineNumber: 61,
                columnNumber: 13
            }, this),
            title: "AI Agent & SaaS",
            description: "Next-gen AI agents and multi-tenant SaaS platforms built with cutting-edge technology."
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"], {
                className: "w-8 h-8"
            }, void 0, false, {
                fileName: "[project]/components/HomeClient.tsx",
                lineNumber: 66,
                columnNumber: 13
            }, this),
            title: "Web & App Dev",
            description: "High-performance web and mobile applications with premium user experiences."
        }
    ];
    const featuredCategories = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$products$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORIES"].slice(0, 3);
    const features = [
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                className: "w-6 h-6"
            }, void 0, false, {
                fileName: "[project]/components/HomeClient.tsx",
                lineNumber: 76,
                columnNumber: 13
            }, this),
            title: "Scalable Development Pipeline",
            description: "Agile methodology ensuring rapid delivery without compromising quality"
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                className: "w-6 h-6"
            }, void 0, false, {
                fileName: "[project]/components/HomeClient.tsx",
                lineNumber: 81,
                columnNumber: 13
            }, this),
            title: "Enterprise-Grade Security",
            description: "Bank-level security standards and compliance certifications"
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                className: "w-6 h-6"
            }, void 0, false, {
                fileName: "[project]/components/HomeClient.tsx",
                lineNumber: 86,
                columnNumber: 13
            }, this),
            title: "Expert Team",
            description: "200+ certified developers and architects with proven expertise"
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                className: "w-6 h-6"
            }, void 0, false, {
                fileName: "[project]/components/HomeClient.tsx",
                lineNumber: 91,
                columnNumber: 13
            }, this),
            title: "Results-Driven Delivery",
            description: "Consistent, measurable outcomes aligned with your business goals"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gemini-light min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-br from-[#F97316]/10 via-transparent to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/components/HomeClient.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid lg:grid-cols-2 gap-12 items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    ...fadeInUp,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-4xl md:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight",
                                            children: "Engineering Scalable Digital Products"
                                        }, void 0, false, {
                                            fileName: "[project]/components/HomeClient.tsx",
                                            lineNumber: 105,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xl text-gray-600 mb-8 leading-relaxed",
                                            children: "We build enterprise-grade software solutions that drive growth, enhance efficiency, and transform businesses globally."
                                        }, void 0, false, {
                                            fileName: "[project]/components/HomeClient.tsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col sm:flex-row gap-4 relative z-20 w-full sm:w-auto",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    href: "/services",
                                                    size: "lg",
                                                    className: "w-full sm:w-auto",
                                                    children: [
                                                        "Start a Project",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            className: "ml-2 w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/HomeClient.tsx",
                                                            lineNumber: 114,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/HomeClient.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    href: "/products",
                                                    variant: "outline",
                                                    size: "lg",
                                                    className: "w-full sm:w-auto",
                                                    children: "View Products"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HomeClient.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/HomeClient.tsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/HomeClient.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    transition: {
                                        duration: 1
                                    },
                                    className: "relative aspect-video",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/hero_card_banner.png",
                                        alt: "Infrastructure overview",
                                        fill: true,
                                        priority: true,
                                        className: "object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/components/HomeClient.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/HomeClient.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/HomeClient.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/HomeClient.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/HomeClient.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1280px] mx-auto px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4",
                                    children: "Our Services"
                                }, void 0, false, {
                                    fileName: "[project]/components/HomeClient.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl text-gray-600 max-w-2xl mx-auto",
                                    children: "End-to-end software development services tailored to your business needs"
                                }, void 0, false, {
                                    fileName: "[project]/components/HomeClient.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/HomeClient.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
                            children: services.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: index * 0.1
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    onClick: ()=>router.push('/get-started'),
                                    className: "group bg-white rounded-xl p-6 border border-black/5 hover:border-[#F97316]/50 transition-all duration-300 hover:transform hover:-translate-y-2 cursor-pointer shadow-sm hover:shadow-md",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-16 h-16 bg-[#F97316]/10 rounded-lg flex items-center justify-center text-[#F97316] mb-4 group-hover:bg-[#F97316] group-hover:text-white transition-all duration-300",
                                            children: service.icon
                                        }, void 0, false, {
                                            fileName: "[project]/components/HomeClient.tsx",
                                            lineNumber: 162,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold text-gray-900 mb-3",
                                            children: service.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/HomeClient.tsx",
                                            lineNumber: 165,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 text-sm leading-relaxed",
                                            children: service.description
                                        }, void 0, false, {
                                            fileName: "[project]/components/HomeClient.tsx",
                                            lineNumber: 166,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/components/HomeClient.tsx",
                                    lineNumber: 153,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/HomeClient.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/HomeClient.tsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/HomeClient.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-24 bg-black/20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1280px] mx-auto px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4",
                                    children: "Our Products"
                                }, void 0, false, {
                                    fileName: "[project]/components/HomeClient.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl text-gray-600 max-w-2xl mx-auto",
                                    children: "Innovative SaaS products designed for modern enterprises"
                                }, void 0, false, {
                                    fileName: "[project]/components/HomeClient.tsx",
                                    lineNumber: 178,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/HomeClient.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                            children: featuredCategories.map((category, index)=>{
                                const IconComponent = ICON_MAP[category.icon] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"];
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: index * 0.1
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    onClick: ()=>router.push(`/products?category=${category.id}`),
                                    className: "group bg-white rounded-xl overflow-hidden border border-black/5 hover:border-[#F97316]/50 transition-all duration-500 shadow-sm hover:shadow-xl flex flex-col h-full cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-48 bg-gradient-to-br from-[#F97316]/5 via-white to-orange-50/30 flex items-center justify-center border-b border-black/5 relative overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 from-[#F97316]/10"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HomeClient.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                                    className: "w-16 h-16 text-[#F97316] opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HomeClient.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/HomeClient.tsx",
                                            lineNumber: 196,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-8 flex flex-col flex-grow",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "inline-block bg-[#F97316]/10 text-[#F97316] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4 w-fit",
                                                    children: category.id.replace('-', ' ')
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HomeClient.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-gray-900 mb-3 group-hover:text-[#F97316] transition-colors",
                                                    children: category.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HomeClient.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-500 text-sm mb-8 line-clamp-2 leading-relaxed",
                                                    children: category.overview
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HomeClient.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-auto flex items-center justify-between pt-6 border-t border-black/5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#F97316] text-sm font-bold flex items-center gap-2 group/link",
                                                        children: [
                                                            "Explore System",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                className: "w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/HomeClient.tsx",
                                                                lineNumber: 209,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/HomeClient.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HomeClient.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/HomeClient.tsx",
                                            lineNumber: 200,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/components/HomeClient.tsx",
                                    lineNumber: 187,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/HomeClient.tsx",
                            lineNumber: 183,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mt-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                href: "/products",
                                variant: "primary",
                                children: [
                                    "Explore All Products",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "ml-2 w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/HomeClient.tsx",
                                        lineNumber: 221,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/HomeClient.tsx",
                                lineNumber: 219,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/HomeClient.tsx",
                            lineNumber: 218,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/HomeClient.tsx",
                    lineNumber: 175,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/HomeClient.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1280px] mx-auto px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-display",
                                    children: "Why Choose Agara-Sofvix"
                                }, void 0, false, {
                                    fileName: "[project]/components/HomeClient.tsx",
                                    lineNumber: 231,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl text-gray-600 max-w-2xl mx-auto",
                                    children: "We deliver excellence through innovation, expertise, and commitment"
                                }, void 0, false, {
                                    fileName: "[project]/components/HomeClient.tsx",
                                    lineNumber: 232,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/HomeClient.tsx",
                            lineNumber: 230,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8",
                            children: features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        scale: 0.95
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    transition: {
                                        delay: index * 0.1
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-16 h-16 bg-gradient-to-br from-[#F97316] to-[#FB923C] rounded-xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-[#F97316]/20",
                                            children: feature.icon
                                        }, void 0, false, {
                                            fileName: "[project]/components/HomeClient.tsx",
                                            lineNumber: 247,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-gray-900 mb-2",
                                            children: feature.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/HomeClient.tsx",
                                            lineNumber: 250,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 text-sm",
                                            children: feature.description
                                        }, void 0, false, {
                                            fileName: "[project]/components/HomeClient.tsx",
                                            lineNumber: 251,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/components/HomeClient.tsx",
                                    lineNumber: 239,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/HomeClient.tsx",
                            lineNumber: 237,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/HomeClient.tsx",
                    lineNumber: 229,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/HomeClient.tsx",
                lineNumber: 228,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-24 relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-[#F97316]/10 via-transparent to-[#22C55E]/10"
                    }, void 0, false, {
                        fileName: "[project]/components/HomeClient.tsx",
                        lineNumber: 261,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                scale: 0.95
                            },
                            whileInView: {
                                opacity: 1,
                                scale: 1
                            },
                            viewport: {
                                once: true
                            },
                            className: "bg-white/80 backdrop-blur-md rounded-2xl p-6 md:p-12 lg:p-16 border border-black/5 text-center shadow-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-display",
                                    children: "Ready to Transform Your Business?"
                                }, void 0, false, {
                                    fileName: "[project]/components/HomeClient.tsx",
                                    lineNumber: 269,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl text-gray-600 mb-8 max-w-2xl mx-auto",
                                    children: "Let's discuss how we can help you build the perfect solution for your needs."
                                }, void 0, false, {
                                    fileName: "[project]/components/HomeClient.tsx",
                                    lineNumber: 272,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap-4 justify-center sm:items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            href: "/get-started",
                                            size: "lg",
                                            className: "w-full sm:w-auto",
                                            children: [
                                                "Get Started",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "ml-2 w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HomeClient.tsx",
                                                    lineNumber: 278,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/HomeClient.tsx",
                                            lineNumber: 276,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            href: "/services",
                                            variant: "outline",
                                            size: "lg",
                                            className: "w-full sm:w-auto",
                                            children: "Learn More"
                                        }, void 0, false, {
                                            fileName: "[project]/components/HomeClient.tsx",
                                            lineNumber: 280,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/HomeClient.tsx",
                                    lineNumber: 275,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/HomeClient.tsx",
                            lineNumber: 263,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/HomeClient.tsx",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/HomeClient.tsx",
                lineNumber: 260,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/HomeClient.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
_s(HomeClient, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = HomeClient;
var _c;
__turbopack_context__.k.register(_c, "HomeClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_6cc465e1._.js.map