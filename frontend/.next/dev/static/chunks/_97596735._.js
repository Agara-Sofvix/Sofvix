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
"[project]/lib/seo/metadata.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/JsonLd.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JsonLd",
    ()=>JsonLd,
    "LOCAL_BUSINESS_SCHEMA",
    ()=>LOCAL_BUSINESS_SCHEMA,
    "WEBSITE_SCHEMA",
    ()=>WEBSITE_SCHEMA,
    "generateBreadcrumbSchema",
    ()=>generateBreadcrumbSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/seo/metadata.ts [app-client] (ecmascript)");
;
;
function JsonLd({ type, data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
            __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": type,
                ...data
            })
        }
    }, void 0, false, {
        fileName: "[project]/components/JsonLd.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = JsonLd;
const WEBSITE_SCHEMA = {
    name: "Agara Sofvix",
    url: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_URL"],
    potentialAction: {
        "@type": "SearchAction",
        "target": `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_URL"]}/products?q={search_term_string}`,
        "query-input": "required name=search_term_string"
    }
};
const LOCAL_BUSINESS_SCHEMA = {
    "@type": "SoftwareCompany",
    "name": "Agara Sofvix",
    "image": `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_URL"]}/logo.png`,
    "@id": `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_URL"]}/#organization`,
    "url": __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_URL"],
    "telephone": "+91 98765 43210",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "123, 1st Cross Street",
        "addressLocality": "Velachery",
        "addressRegion": "Chennai",
        "postalCode": "600042",
        "addressCountry": "IN"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 12.9784,
        "longitude": 80.2184
    },
    "sameAs": [
        "https://linkedin.com/company/agara-sofvix",
        "https://twitter.com/agarasofvix"
    ]
};
function generateBreadcrumbSchema(items) {
    return {
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index)=>({
                "@type": "ListItem",
                "position": index + 1,
                "name": item.name,
                "item": `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_URL"]}${item.item}`
            }))
    };
}
var _c;
__turbopack_context__.k.register(_c, "JsonLd");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Breadcrumbs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Breadcrumbs",
    ()=>Breadcrumbs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$JsonLd$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/JsonLd.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function Breadcrumbs({ items }) {
    const schemaItems = [
        {
            name: "Home",
            item: "/"
        },
        ...items
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "flex items-center space-x-2 text-sm text-slate-500 mb-8",
        "aria-label": "Breadcrumb",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$JsonLd$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonLd"], {
                type: "BreadcrumbList",
                data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$JsonLd$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateBreadcrumbSchema"])(schemaItems)
            }, void 0, false, {
                fileName: "[project]/components/Breadcrumbs.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: "hover:text-orange-600 transition-colors flex items-center gap-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/components/Breadcrumbs.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Breadcrumbs.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "w-4 h-4 text-slate-300"
                        }, void 0, false, {
                            fileName: "[project]/components/Breadcrumbs.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: item.item,
                            className: `hover:text-orange-600 transition-colors ${index === items.length - 1 ? 'font-bold text-slate-900' : ''}`,
                            "aria-current": index === items.length - 1 ? 'page' : undefined,
                            children: item.name
                        }, void 0, false, {
                            fileName: "[project]/components/Breadcrumbs.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this)
                    ]
                }, index, true, {
                    fileName: "[project]/components/Breadcrumbs.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Breadcrumbs.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = Breadcrumbs;
var _c;
__turbopack_context__.k.register(_c, "Breadcrumbs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ServiceDetailClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServiceDetailClient",
    ()=>ServiceDetailClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rocket.js [app-client] (ecmascript) <export default as Rocket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$products$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/products/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Breadcrumbs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Breadcrumbs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/lucide-react.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
const ICON_MAP = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
};
const CATEGORY_MOCKUPS = {
    'cx-sales': '/images/service-mockups/sales-crm.png',
    'marketing': '/images/service-mockups/marketing-automation.png',
    'commerce': '/images/service-mockups/operations-portal.png',
    'finance-ops': '/images/service-mockups/operations-portal.png',
    'hr': '/images/service-mockups/operations-portal.png',
    'it-security': '/images/service-mockups/operations-portal.png',
    'data-ai': '/images/service-mockups/operations-portal.png',
    'productivity': '/images/service-mockups/operations-portal.png'
};
const SERVICE_MOCKUPS = {
    'crm-pipeline': '/images/service-mockups/crm-pipeline.png',
    'omnichannel-communication': '/images/service-mockups/omnichannel-communication.png',
    'appointment-scheduling': '/images/service-mockups/appointment-scheduling.png',
    'field-service': '/images/service-mockups/field-service.png',
    'customer-onboarding': '/images/service-mockups/customer-onboarding.png',
    'email-automation': '/images/service-mockups/email-automation.png',
    'social-media-management': '/images/service-mockups/social-media-management.png',
    'lead-capture': '/images/service-mockups/lead-capture.png',
    'event-webinar-systems': '/images/service-mockups/event-webinar-systems.png',
    'landing-page-optimization': '/images/service-mockups/landing-page-optimization.png',
    'retail-pos': '/images/service-mockups/retail-pos.png',
    'ecommerce-platform': '/images/service-mockups/ecommerce-platform.png',
    'payment-gateways': '/images/service-mockups/payment-gateways.png',
    'subscription-billing': '/images/service-mockups/subscription-billing.png',
    'accounting-reporting': '/images/service-mockups/accounting-reporting.png',
    'expense-payroll': '/images/service-mockups/expense-payroll.png',
    'inventory-procurement': '/images/service-mockups/inventory-procurement.png',
    'billing-invoicing': '/images/service-mockups/sales-crm.png',
    'erp-integration': '/images/service-mockups/operations-portal.png',
    'document-collaboration': '/images/service-mockups/marketing-automation.png',
    'internal-communication': '/images/service-mockups/omnichannel-communication.png',
    'task-calendar-management': '/images/service-mockups/appointment-scheduling.png',
    'shared-inbox': '/images/service-mockups/email-automation.png',
    'office-integration': '/images/service-mockups/operations-portal.png',
    'recruitment-ats': '/images/service-mockups/customer-onboarding.png',
    'payroll-compliance': '/images/service-mockups/expense-payroll.png',
    'attendance-scheduling': '/images/service-mockups/appointment-scheduling.png',
    'employee-expenses': '/images/service-mockups/crm-pipeline.png',
    'workforce-planning': '/images/service-mockups/accounting-reporting.png',
    'custom-app-dev': '/images/service-mockups/ecommerce-platform.png',
    'workflow-automation-rpa': '/images/service-mockups/marketing-automation.png',
    'iam-security': '/images/service-mockups/payment-gateways.png',
    'security-compliance': '/images/service-mockups/field-service.png',
    'performance-testing': '/images/service-mockups/landing-page-optimization.png',
    'bi-dashboards': '/images/service-mockups/retail-pos.png',
    'data-integration-etl': '/images/service-mockups/inventory-procurement.png',
    'embedded-analytics': '/images/service-mockups/accounting-reporting.png',
    'ai-reporting': '/images/service-mockups/marketing-automation.png',
    'iot-monitoring': '/images/service-mockups/field-service.png'
};
const STEPS = [
    {
        title: "Define",
        desc: "Collaborative discovery to map your unique business logic and requirements.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"]
    },
    {
        title: "Configure",
        desc: "Expert implementation and deep integration with your existing tech stack.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
    },
    {
        title: "Validate",
        desc: "Rigorous testing and user-acceptance to ensure seamless performance.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"]
    },
    {
        title: "Scale",
        desc: "Continuous optimization and proactive support for your global growth.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"]
    }
];
function ServiceDetailClient({ category, service, categorySlug, serviceSlug }) {
    const MockupImage = SERVICE_MOCKUPS[service.slug] || CATEGORY_MOCKUPS[category.id] || CATEGORY_MOCKUPS['finance-ops'];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full text-slate-900 selection:bg-orange-500/10 bg-white min-h-screen overflow-x-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative pt-8 pb-32 lg:pb-40 border-b border-slate-100 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -z-10 hidden lg:block"
                    }, void 0, false, {
                        fileName: "[project]/components/ServiceDetailClient.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Breadcrumbs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Breadcrumbs"], {
                                items: [
                                    {
                                        name: "Services",
                                        item: "/services"
                                    },
                                    {
                                        name: category.name,
                                        item: `/products?category=${category.id}`
                                    },
                                    {
                                        name: service.name,
                                        item: `/services/${categorySlug}/${serviceSlug}`
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/ServiceDetailClient.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid lg:grid-cols-2 gap-10 md:gap-20 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            x: -20
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        transition: {
                                            duration: 0.8
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-4xl md:text-5xl lg:text-7xl font-black mb-8 leading-[1.1] text-slate-900 tracking-tight",
                                                children: service.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/ServiceDetailClient.tsx",
                                                lineNumber: 102,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xl lg:text-2xl text-slate-600 leading-relaxed mb-10 font-medium max-w-xl",
                                                children: service.description
                                            }, void 0, false, {
                                                fileName: "[project]/components/ServiceDetailClient.tsx",
                                                lineNumber: 103,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col sm:flex-row gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        href: `/get-started?service=${encodeURIComponent(service.name)}&category=${categorySlug}&slug=${serviceSlug}`,
                                                        size: "lg",
                                                        className: "w-full sm:w-72 whitespace-nowrap h-[64px] rounded-2xl shadow-xl shadow-[#F97316]/10",
                                                        children: "Get Started"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ServiceDetailClient.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        href: "#features",
                                                        size: "lg",
                                                        variant: "outline",
                                                        className: "w-full sm:w-72 whitespace-nowrap h-[64px] rounded-2xl border-slate-200 text-slate-700 transition-all",
                                                        children: "View Documentation"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ServiceDetailClient.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ServiceDetailClient.tsx",
                                                lineNumber: 104,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ServiceDetailClient.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            scale: 0.95,
                                            y: 30
                                        },
                                        animate: {
                                            opacity: 1,
                                            scale: 1,
                                            y: 0
                                        },
                                        transition: {
                                            duration: 1,
                                            delay: 0.2
                                        },
                                        className: "relative lg:h-[600px] flex items-center justify-center pt-8 lg:pt-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-blue-500/5 blur-[120px] rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ServiceDetailClient.tsx",
                                                lineNumber: 110,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative z-10 w-full group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute -inset-4 bg-gradient-to-tr from-orange-500 to-blue-500 rounded-[32px] opacity-10 blur-2xl group-hover:opacity-15 transition-opacity"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ServiceDetailClient.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 18
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative bg-white p-2 rounded-[32px] border border-slate-200 shadow-2xl overflow-hidden shadow-slate-200/50 aspect-video",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: MockupImage,
                                                            alt: service.name,
                                                            fill: true,
                                                            className: "object-cover rounded-[24px]",
                                                            priority: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ServiceDetailClient.tsx",
                                                            lineNumber: 114,
                                                            columnNumber: 22
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ServiceDetailClient.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ServiceDetailClient.tsx",
                                                lineNumber: 111,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ServiceDetailClient.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ServiceDetailClient.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ServiceDetailClient.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ServiceDetailClient.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-24 lg:py-32 bg-white border-b border-slate-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid lg:grid-cols-2 gap-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl font-black text-slate-900 mb-10 tracking-tight",
                                        children: "Who Needs This Solution"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ServiceDetailClient.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl text-slate-600 leading-relaxed mb-12 font-medium",
                                        children: service.whoNeeds || "Scale-up enterprises and digital-first organizations looking to automate complex business workflows and eliminate operational silos."
                                    }, void 0, false, {
                                        fileName: "[project]/components/ServiceDetailClient.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-slate-50 p-10 rounded-[40px] border border-slate-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-bold text-slate-900 mb-6 flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                                        className: "w-6 h-6 text-orange-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ServiceDetailClient.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 19
                                                    }, this),
                                                    " Problems This Solves"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ServiceDetailClient.tsx",
                                                lineNumber: 133,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-4",
                                                children: (service.problemsSolved || [
                                                    "Manual process inefficiencies",
                                                    "Broken data flows",
                                                    "Operational scale blocks"
                                                ]).map((problem, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex gap-3 text-slate-600 font-medium",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-orange-600 font-bold",
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ServiceDetailClient.tsx",
                                                                lineNumber: 139,
                                                                columnNumber: 23
                                                            }, this),
                                                            " ",
                                                            problem
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/components/ServiceDetailClient.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/ServiceDetailClient.tsx",
                                                lineNumber: 136,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ServiceDetailClient.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ServiceDetailClient.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl font-black text-slate-900 mb-6",
                                                    children: "Strategic Use Cases"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ServiceDetailClient.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid gap-4",
                                                    children: (service.useCases || [
                                                        "Enterprise automation",
                                                        "Process orchestration",
                                                        "Outcome-driven scaling"
                                                    ]).map((useCase, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-6 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center gap-4 transition-all hover:border-orange-200",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-2 h-2 rounded-full bg-orange-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/ServiceDetailClient.tsx",
                                                                    lineNumber: 153,
                                                                    columnNumber: 26
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold text-slate-800",
                                                                    children: useCase
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/ServiceDetailClient.tsx",
                                                                    lineNumber: 154,
                                                                    columnNumber: 26
                                                                }, this)
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/components/ServiceDetailClient.tsx",
                                                            lineNumber: 152,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ServiceDetailClient.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ServiceDetailClient.tsx",
                                            lineNumber: 148,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-10 rounded-[40px] bg-slate-900 text-white shadow-2xl shadow-slate-900/40",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl font-black mb-4",
                                                    children: "Expected Outcomes"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ServiceDetailClient.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-400 font-medium leading-relaxed",
                                                    children: service.outcomes || "Measurable increase in operational velocity, significant reduction in overhead, and a resilient foundation for global system growth."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ServiceDetailClient.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ServiceDetailClient.tsx",
                                            lineNumber: 160,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ServiceDetailClient.tsx",
                                    lineNumber: 147,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ServiceDetailClient.tsx",
                                lineNumber: 146,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ServiceDetailClient.tsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ServiceDetailClient.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ServiceDetailClient.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-24 lg:py-32 bg-slate-50/50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-2xl md:text-3xl lg:text-5xl font-black text-slate-900 max-w-3xl leading-tight mb-20",
                            children: "Designed to eliminate operational friction and accelerate measurable outcomes."
                        }, void 0, false, {
                            fileName: "[project]/components/ServiceDetailClient.tsx",
                            lineNumber: 174,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-3 gap-8",
                            children: service.benefits.map((benefit, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        delay: i * 0.1
                                    },
                                    className: "bg-white border border-slate-100 p-10 rounded-[32px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-14 h-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-8 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-500",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                className: "w-7 h-7"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ServiceDetailClient.tsx",
                                                lineNumber: 178,
                                                columnNumber: 203
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ServiceDetailClient.tsx",
                                            lineNumber: 178,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold mb-4 text-slate-900 tracking-tight",
                                            children: "Core Strategic Advantage"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ServiceDetailClient.tsx",
                                            lineNumber: 179,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-600 leading-relaxed font-medium",
                                            children: benefit
                                        }, void 0, false, {
                                            fileName: "[project]/components/ServiceDetailClient.tsx",
                                            lineNumber: 180,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/components/ServiceDetailClient.tsx",
                                    lineNumber: 177,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/ServiceDetailClient.tsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ServiceDetailClient.tsx",
                    lineNumber: 173,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ServiceDetailClient.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this),
            service.faqs && service.faqs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-24 lg:py-32 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl md:text-5xl font-black text-slate-900 text-center mb-16 tracking-tight",
                            children: "Frequently Asked Questions"
                        }, void 0, false, {
                            fileName: "[project]/components/ServiceDetailClient.tsx",
                            lineNumber: 191,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: service.faqs.map((faq, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                    className: "group bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden transition-all duration-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                            className: "flex items-center justify-between p-8 cursor-pointer list-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-lg font-bold text-slate-900 pr-10",
                                                    children: faq.q
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ServiceDetailClient.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-8 h-8 rounded-full bg-white flex items-center justify-center border border-slate-200 group-open:rotate-180 transition-transform",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: "w-4 h-4 text-slate-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ServiceDetailClient.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 24
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ServiceDetailClient.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ServiceDetailClient.tsx",
                                            lineNumber: 195,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-8 pt-0 text-slate-600 font-medium leading-relaxed border-t border-slate-100 bg-white/50",
                                            children: faq.a
                                        }, void 0, false, {
                                            fileName: "[project]/components/ServiceDetailClient.tsx",
                                            lineNumber: 201,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/components/ServiceDetailClient.tsx",
                                    lineNumber: 194,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/ServiceDetailClient.tsx",
                            lineNumber: 192,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ServiceDetailClient.tsx",
                    lineNumber: 190,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ServiceDetailClient.tsx",
                lineNumber: 189,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "features",
                className: "py-24 lg:py-32 bg-slate-900 text-white relative overflow-hidden scroll-mt-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6 relative z-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid lg:grid-cols-12 gap-10 md:gap-20 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl md:text-3xl lg:text-4xl font-black mb-8 leading-tight tracking-tight",
                                        children: "Modular capabilities built for scale and flexibility."
                                    }, void 0, false, {
                                        fileName: "[project]/components/ServiceDetailClient.tsx",
                                        lineNumber: 215,
                                        columnNumber: 18
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        href: `/get-started?service=${encodeURIComponent(service.name)}&category=${categorySlug}&slug=${serviceSlug}`,
                                        size: "lg",
                                        variant: "outline",
                                        className: "rounded-2xl px-10 bg-white border-white !text-slate-900 hover:!bg-slate-100 transition-all shadow-lg border-2",
                                        children: "Request Feature Demo"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ServiceDetailClient.tsx",
                                        lineNumber: 216,
                                        columnNumber: 18
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ServiceDetailClient.tsx",
                                lineNumber: 214,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid sm:grid-cols-2 gap-4",
                                    children: service.features.map((feature, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            whileHover: {
                                                x: 10
                                            },
                                            className: "p-6 rounded-3xl bg-white/5 border border-white/10 flex items-start gap-4 transition-all hover:bg-white/10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                    className: "w-4 h-4 text-orange-500 mt-1 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ServiceDetailClient.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 26
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-bold text-lg mb-1",
                                                            children: feature
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ServiceDetailClient.tsx",
                                                            lineNumber: 224,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-slate-500 text-xs leading-relaxed uppercase tracking-widest font-bold",
                                                            children: "Standard Integrated Capability"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ServiceDetailClient.tsx",
                                                            lineNumber: 225,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/ServiceDetailClient.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 26
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/components/ServiceDetailClient.tsx",
                                            lineNumber: 221,
                                            columnNumber: 23
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/ServiceDetailClient.tsx",
                                    lineNumber: 219,
                                    columnNumber: 18
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ServiceDetailClient.tsx",
                                lineNumber: 218,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ServiceDetailClient.tsx",
                        lineNumber: 213,
                        columnNumber: 12
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ServiceDetailClient.tsx",
                    lineNumber: 212,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ServiceDetailClient.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-24 lg:py-40 border-t border-slate-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid lg:grid-cols-2 gap-10 md:gap-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-3xl font-black text-slate-900 mb-8 leading-tight",
                                        children: "Related Solutions"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ServiceDetailClient.tsx",
                                        lineNumber: 239,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-3 mb-12",
                                        children: [
                                            category.capabilities?.filter((c)=>c.slug !== serviceSlug).slice(0, 2).map((cap, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/services/${category.slug}/${cap.slug}`,
                                                    className: "group flex items-center justify-between p-6 rounded-3xl border border-slate-100 bg-white hover:border-orange-300 transition-all shadow-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-5",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-slate-800",
                                                                children: cap.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ServiceDetailClient.tsx",
                                                                lineNumber: 245,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ServiceDetailClient.tsx",
                                                            lineNumber: 244,
                                                            columnNumber: 28
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            className: "w-5 h-5 text-slate-300 group-hover:text-orange-600 transition-all"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ServiceDetailClient.tsx",
                                                            lineNumber: 247,
                                                            columnNumber: 28
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/components/ServiceDetailClient.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 25
                                                }, this)),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$products$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORIES"].filter((c)=>c.id !== category.id).slice(0, 1).map((crossCat)=>crossCat.capabilities?.slice(0, 1).map((cap, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/services/${crossCat.slug}/${cap.slug}`,
                                                        className: "group flex items-center justify-between p-6 rounded-3xl border border-slate-100 bg-white hover:border-blue-300 transition-all shadow-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-bold text-slate-800",
                                                                        children: cap.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/ServiceDetailClient.tsx",
                                                                        lineNumber: 255,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] uppercase tracking-widest font-black text-slate-400",
                                                                        children: "Collaborative Layer"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/ServiceDetailClient.tsx",
                                                                        lineNumber: 256,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/ServiceDetailClient.tsx",
                                                                lineNumber: 254,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                className: "w-5 h-5 text-slate-300 group-hover:text-blue-600 transition-all"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ServiceDetailClient.tsx",
                                                                lineNumber: 258,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/components/ServiceDetailClient.tsx",
                                                        lineNumber: 253,
                                                        columnNumber: 27
                                                    }, this))),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/get-started",
                                                className: "group flex items-center justify-between p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-all",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-slate-900",
                                                        children: "Request Custom Architecture"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ServiceDetailClient.tsx",
                                                        lineNumber: 263,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "w-5 h-5 text-slate-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ServiceDetailClient.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ServiceDetailClient.tsx",
                                                lineNumber: 262,
                                                columnNumber: 22
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ServiceDetailClient.tsx",
                                        lineNumber: 240,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ServiceDetailClient.tsx",
                                lineNumber: 238,
                                columnNumber: 16
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full bg-slate-900 rounded-[32px] p-8 md:p-12 lg:p-20 text-center relative overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-3xl md:text-5xl font-black text-white mb-8",
                                            children: "Ready to integrate?"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ServiceDetailClient.tsx",
                                            lineNumber: 270,
                                            columnNumber: 22
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            href: `/get-started?service=${encodeURIComponent(service.name)}&category=${categorySlug}&slug=${serviceSlug}`,
                                            size: "lg",
                                            className: "px-12 rounded-3xl text-lg font-bold",
                                            children: "Get Started Now"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ServiceDetailClient.tsx",
                                            lineNumber: 271,
                                            columnNumber: 22
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ServiceDetailClient.tsx",
                                    lineNumber: 269,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ServiceDetailClient.tsx",
                                lineNumber: 268,
                                columnNumber: 16
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ServiceDetailClient.tsx",
                        lineNumber: 237,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ServiceDetailClient.tsx",
                    lineNumber: 236,
                    columnNumber: 10
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ServiceDetailClient.tsx",
                lineNumber: 235,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ServiceDetailClient.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
_c = ServiceDetailClient;
var _c;
__turbopack_context__.k.register(_c, "ServiceDetailClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_97596735._.js.map