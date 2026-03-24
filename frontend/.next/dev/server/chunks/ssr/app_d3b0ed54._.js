module.exports = [
"[project]/app/(main)/products/data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/app/(admin)/admin/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminDashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-ssr] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down-right.js [app-ssr] (ecmascript) <export default as ArrowDownRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-ssr] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$products$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/products/data.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function AdminDashboardPage() {
    const [inquiries, setInquiries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [applications, setApplications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const urlSearch = searchParams.get('search') || '';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (urlSearch) {
            setSearchQuery(urlSearch);
        } else {
            setSearchQuery('');
        }
    }, [
        urlSearch
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchData = async ()=>{
            try {
                const apiUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiUrl"])();
                const [inquiriesRes, applicationsRes] = await Promise.all([
                    fetch(`${apiUrl}/api/inquiries`),
                    fetch(`${apiUrl}/api/applications`)
                ]);
                if (!inquiriesRes.ok || !applicationsRes.ok) throw new Error('Failed to fetch data');
                const inquiriesData = await inquiriesRes.json();
                const applicationsData = await applicationsRes.json();
                setInquiries(inquiriesData);
                setApplications(applicationsData);
            } catch (error) {
                console.error(error);
            } finally{
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    const filteredInquiries = inquiries.filter((inq)=>inq.name.toLowerCase().includes(searchQuery.toLowerCase()) || inq.email.toLowerCase().includes(searchQuery.toLowerCase()) || inq.service.toLowerCase().includes(searchQuery.toLowerCase()) || inq.message.toLowerCase().includes(searchQuery.toLowerCase()));
    const filteredApplications = applications.filter((app)=>app.name.toLowerCase().includes(searchQuery.toLowerCase()) || app.email.toLowerCase().includes(searchQuery.toLowerCase()) || app.roleTitle.toLowerCase().includes(searchQuery.toLowerCase()));
    const stats = [
        {
            label: "Total Inquiries",
            value: filteredInquiries.length.toString(),
            change: "+12.5%",
            trend: "up",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            label: "Active Services",
            value: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$products$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SERVICES"].length.toString(),
            change: "+2 new",
            trend: "up",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
            color: "text-[#F97316]",
            bg: "bg-[#F97316]/5"
        },
        {
            label: "Talent Pipeline",
            value: filteredApplications.length.toString(),
            change: "+3 new",
            trend: "up",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
            color: "text-emerald-600",
            bg: "bg-emerald-50"
        },
        {
            label: "System Health",
            value: "98%",
            change: "Stable",
            trend: "neutral",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
            color: "text-amber-600",
            bg: "bg-amber-50"
        }
    ];
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8",
        children: "Loading Dashboard..."
    }, void 0, false, {
        fileName: "[project]/app/(admin)/admin/page.tsx",
        lineNumber: 122,
        columnNumber: 23
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-black text-gray-900 tracking-tight",
                        children: "System Overview"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/page.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500 font-medium",
                        children: "Welcome back, Admin. Here is what is happening across your platforms today."
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/page.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/page.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                children: stats.map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: i * 0.1
                        },
                        className: "bg-white p-6 rounded-3xl border border-black/5 shadow-sm flex flex-col gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(stat.icon, {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/admin/page.tsx",
                                            lineNumber: 143,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/page.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${stat.trend === 'up' ? "text-emerald-600 bg-emerald-50" : stat.trend === 'down' ? "text-rose-600 bg-rose-50" : "text-gray-500 bg-gray-50"}`,
                                        children: [
                                            stat.trend === 'up' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/admin/page.tsx",
                                                lineNumber: 150,
                                                columnNumber: 41
                                            }, this),
                                            stat.trend === 'down' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownRight$3e$__["ArrowDownRight"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/admin/page.tsx",
                                                lineNumber: 151,
                                                columnNumber: 43
                                            }, this),
                                            stat.change
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/admin/page.tsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/admin/page.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-bold text-gray-400 uppercase tracking-widest",
                                        children: stat.label
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/page.tsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-4xl font-black text-gray-900 mt-1",
                                        children: stat.value
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/page.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/admin/page.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/app/(admin)/admin/page.tsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/page.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-3 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: -20
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        className: "lg:col-span-2 bg-white rounded-[32px] border border-black/5 shadow-sm overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-8 border-b border-black/5 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold text-gray-900",
                                        children: "Recent Customer Inquiries"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/page.tsx",
                                        lineNumber: 171,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "text-[#F97316] text-sm font-bold flex items-center gap-1 hover:underline",
                                        children: [
                                            "View All ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/admin/page.tsx",
                                                lineNumber: 173,
                                                columnNumber: 24
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/admin/page.tsx",
                                        lineNumber: 172,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/admin/page.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "bg-gray-50/50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-8 py-4 text-left text-[10px] font-black uppercase tracking-widest text-gray-400",
                                                        children: "Customer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/admin/page.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-8 py-4 text-left text-[10px] font-black uppercase tracking-widest text-gray-400",
                                                        children: "Service Interest"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/admin/page.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-8 py-4 text-left text-[10px] font-black uppercase tracking-widest text-gray-400",
                                                        children: "Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/admin/page.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-8 py-4 text-left text-[10px] font-black uppercase tracking-widest text-gray-400",
                                                        children: "Received"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/admin/page.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/admin/page.tsx",
                                                lineNumber: 179,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/admin/page.tsx",
                                            lineNumber: 178,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            className: "divide-y divide-black/5",
                                            children: filteredInquiries.slice(0, 5).map((inquiry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "hover:bg-gray-50/50 transition-colors cursor-pointer group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-8 py-6",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-xs uppercase",
                                                                        children: inquiry.name.split(' ').map((n)=>n[0]).join('')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/admin/page.tsx",
                                                                        lineNumber: 193,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm font-bold text-gray-900 group-hover:text-[#F97316] transition-colors",
                                                                                children: inquiry.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(admin)/admin/page.tsx",
                                                                                lineNumber: 197,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs text-gray-400 italic font-medium",
                                                                                children: inquiry.email
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(admin)/admin/page.tsx",
                                                                                lineNumber: 198,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/(admin)/admin/page.tsx",
                                                                        lineNumber: 196,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(admin)/admin/page.tsx",
                                                                lineNumber: 192,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/admin/page.tsx",
                                                            lineNumber: 191,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-8 py-6",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-bold text-gray-700",
                                                                children: inquiry.service
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/admin/page.tsx",
                                                                lineNumber: 203,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/admin/page.tsx",
                                                            lineNumber: 202,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-8 py-6",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-lg ${inquiry.status === 'High Priority' ? "bg-rose-50 text-rose-600" : inquiry.status === 'New' ? "bg-[#F97316]/10 text-[#F97316]" : "bg-emerald-50 text-emerald-600"}`,
                                                                children: inquiry.status
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/admin/page.tsx",
                                                                lineNumber: 206,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/admin/page.tsx",
                                                            lineNumber: 205,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-8 py-6",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 text-xs font-bold text-gray-400",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                        className: "w-3.5 h-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/admin/page.tsx",
                                                                        lineNumber: 216,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    new Date(inquiry.createdAt).toLocaleDateString()
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(admin)/admin/page.tsx",
                                                                lineNumber: 215,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/admin/page.tsx",
                                                            lineNumber: 214,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, inquiry._id.toString(), true, {
                                                    fileName: "[project]/app/(admin)/admin/page.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/admin/page.tsx",
                                            lineNumber: 186,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/admin/page.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/page.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/page.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: 20
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        className: "space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-0 right-0 w-32 h-32 bg-[#F97316]/20 blur-3xl rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/page.tsx",
                                        lineNumber: 234,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold mb-6 relative z-10 font-display",
                                        children: "Optimization Score"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/page.tsx",
                                        lineNumber: 235,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-end gap-2 mb-8 relative z-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-6xl font-black",
                                                children: "94"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/admin/page.tsx",
                                                lineNumber: 237,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl font-bold text-[#F97316] mb-1.5 font-display",
                                                children: "/100"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/admin/page.tsx",
                                                lineNumber: 238,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/admin/page.tsx",
                                        lineNumber: 236,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-400 text-sm leading-relaxed mb-6 font-medium",
                                        children: "Your platform performance is optimal. SEO health is excellent across all service categories."
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/page.tsx",
                                        lineNumber: 240,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            {
                                                label: "Page Load Speed",
                                                value: 98,
                                                color: "bg-[#F97316]"
                                            },
                                            {
                                                label: "Mobile Optimization",
                                                value: 92,
                                                color: "bg-blue-500"
                                            },
                                            {
                                                label: "SEO Score",
                                                value: 94,
                                                color: "bg-emerald-500"
                                            }
                                        ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-[10px] font-black uppercase tracking-widest",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: item.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/admin/page.tsx",
                                                                lineNumber: 249,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    item.value,
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(admin)/admin/page.tsx",
                                                                lineNumber: 250,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/admin/page.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-1.5 bg-white/10 rounded-full overflow-hidden",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                            initial: {
                                                                width: 0
                                                            },
                                                            animate: {
                                                                width: `${item.value}%`
                                                            },
                                                            transition: {
                                                                duration: 1,
                                                                delay: 0.5 + i * 0.1
                                                            },
                                                            className: `h-full ${item.color}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/admin/page.tsx",
                                                            lineNumber: 253,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/admin/page.tsx",
                                                        lineNumber: 252,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/app/(admin)/admin/page.tsx",
                                                lineNumber: 247,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/page.tsx",
                                        lineNumber: 241,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/admin/page.tsx",
                                lineNumber: 233,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-[32px] border border-black/5 p-8 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-gray-900 mb-6",
                                        children: "Quick Actions"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/page.tsx",
                                        lineNumber: 266,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-4",
                                        children: [
                                            {
                                                label: "Add Service",
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
                                                color: "text-[#F97316]",
                                                bg: "bg-[#F97316]/5",
                                                href: "/admin/services?add=true"
                                            },
                                            {
                                                label: "New Product",
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
                                                color: "text-blue-600",
                                                bg: "bg-blue-50",
                                                href: "/admin/products?add=true"
                                            },
                                            {
                                                label: "Global SEO",
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
                                                color: "text-emerald-600",
                                                bg: "bg-emerald-50",
                                                href: "/admin/seo"
                                            },
                                            {
                                                label: "Logs",
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
                                                color: "text-slate-600",
                                                bg: "bg-slate-50",
                                                href: "/admin/logs"
                                            }
                                        ].map((action, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: action.href,
                                                className: "flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-black/5 transition-all group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `w-12 h-12 ${action.bg} ${action.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(action.icon, {
                                                            className: "w-6 h-6"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/admin/page.tsx",
                                                            lineNumber: 276,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/admin/page.tsx",
                                                        lineNumber: 275,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-bold text-gray-700",
                                                        children: action.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/admin/page.tsx",
                                                        lineNumber: 278,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/app/(admin)/admin/page.tsx",
                                                lineNumber: 274,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/page.tsx",
                                        lineNumber: 267,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/admin/page.tsx",
                                lineNumber: 265,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/page.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/page.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/page.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_d3b0ed54._.js.map