import {
    useEffect,
    useRef,
    useState,
} from 'react';

import {
    ArrowDown,
    ArrowUpRight,
    BriefcaseBusiness,
    Bot,
    BrainCircuit,
    Code2,
    Database,
    Download,
    FileCode2,
    FileText,
    Github,
    Linkedin,
    Mail,
    MapPin,
    Minus,
    Plus,
    Monitor,
    type LucideIcon,
    RotateCcw,
    Server,
    Terminal,
} from 'lucide-react';

import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
} from 'react-leaflet';

import { divIcon } from 'leaflet';

import {
    Document,
    Page,
    pdfjs,
} from 'react-pdf';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import {
    Badge,
    Button,
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    Separator,
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/shared/ui/shadcn/new-york';

import profilePhoto from '@/shared/assets/images/cesar-cordero-retro.jpg';
import cvPdf from '@/shared/assets/documents/Cesar-Daniel-Cordero-Jimenez-Full-Stack-AI-Web-Developer-Resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const technologyIcons: Record<string, string> = {
    Django: 'devicon-django-plain',
    FastAPI: 'devicon-fastapi-plain',
    React: 'devicon-react-original',
    TypeScript: 'devicon-typescript-plain',
    PostgreSQL: 'devicon-postgresql-plain',
    Docker: 'devicon-docker-plain',
    'GitLab CI/CD': 'devicon-gitlab-plain',
    Prometheus: 'devicon-prometheus-original',
    Grafana: 'devicon-grafana-plain',

    'Next.js': 'devicon-nextjs-plain',
    NestJS: 'devicon-nestjs-original',
    GraphQL: 'devicon-graphql-plain',
    AWS: 'devicon-amazonwebservices-plain-wordmark',

    Laravel: 'devicon-laravel-original',
    CodeIgniter: 'devicon-codeigniter-plain',
    CakePHP: 'devicon-cakephp-plain',
    Bootstrap: 'devicon-bootstrap-plain',
    JavaScript: 'devicon-javascript-plain',

    AngularJS: 'devicon-angularjs-plain',
    PHP: 'devicon-php-plain',
    MySQL: 'devicon-mysql-original',
    jQuery: 'devicon-jquery-plain',
    Go: 'devicon-go-original-wordmark',
    DigitalOcean: 'devicon-digitalocean-original',
    Playwright: 'devicon-playwright-plain',
    SQLAlchemy: 'devicon-sqlalchemy-plain',
};

// Lucide symbols for AI tooling (no additional icon dependency).
// These are representative icons rather than the vendors' official brand logos.
const aiToolIcons: Record<string, LucideIcon> = {
    'OpenAI Codex': Bot,
    'Anthropic Claude': BrainCircuit,
    'Spec-Driven Development (SDD)': FileCode2,
};

const experiences = [
    {
        company: 'CER Management Group',
        role: 'Full-Stack Developer',
        period: 'May 2024 — Present',
        location: 'Remote / Managua, Nicaragua',
        website: 'https://cermanagementgroup.com/',
        description:
            'Developing enterprise applications for staffing, time and attendance, payroll, field routes, and inventory, supported by secure multi-tenant architecture.',
        achievements: [
            'CER Staffing: Developed recruitment and employee onboarding workflows with company-scoped roles and permissions.',
            'CER Time: Built scheduling, timecards, pay periods, reporting, kiosk attendance, and mobile workflows.',
            'CER Route: Developed field-route workflows for geolocation, mileage tracking, and trip closure.',
            'CER Inventory: Developed warehouse stock management, inter-location transfers, and supplier invoicing.',
            'CER Payroll: Built payroll administration workflows and Paycor integration for W-2 and 1099 workers.',
            'Improved operational efficiency through software supporting recruiting, timekeeping, payroll, field routes, and inventory administration.',
            'Built asynchronous REST APIs with FastAPI, Django, SQLAlchemy, and PostgreSQL, including subdomain-based tenant resolution, RBAC, company-scoped permissions, and Alembic migrations.',
            'Applied OpenAI Codex and Anthropic Claude to Spec-Driven Development (SDD) and code reviews; used Playwright for browser-based end-to-end testing.',
            'Built responsive administration, scheduling, onboarding, kiosk, and mobile workflows with React, TypeScript, and Redux Toolkit.',
            'Instrumented API and database timings with Prometheus; used Grafana and PostgreSQL query analysis to investigate performance bottlenecks.',
            'Deployed development and production services on DigitalOcean App Platform with Managed PostgreSQL, SSL connections, Docker, and GitLab CI/CD.',
        ],
        technologies: [
            'FastAPI',
            'Django',
            'React',
            'TypeScript',
            'PostgreSQL',
            'SQLAlchemy',
            'Docker',
            'DigitalOcean',
            'GitLab CI/CD',
            'Prometheus',
            'Grafana',
            'Playwright',
            'OpenAI Codex',
            'Anthropic Claude',
        ],
    },
    {
        company: 'Nicasource',
        role: 'Full-Stack Developer',
        period: 'Nov 2019 — Jan 2024',
        location: 'Remote / Managua, Nicaragua',
        website: 'https://nicasource.com/',
        description:
            'Developed multi-tenant SaaS applications and web products, including EdThrive, with cloud deployment and automated delivery pipelines.',
        achievements: [
            'Architected and built EdThrive, a multi-tenant SaaS platform for educators with meeting scheduling, task management, and collaboration tools.',
            'Deployed EdThrive on AWS using S3, RDS for PostgreSQL, Elastic Beanstalk, load balancers, and Route 53.',
            'Implemented GitLab CI/CD pipelines and Git Flow for automated testing and deployment across development, staging, and production.',
            'Designed and implemented GraphQL APIs using NestJS for efficient, flexible frontend data access.',
            'Built responsive interfaces with Next.js and React for meeting organization, action-item tracking, and team collaboration.',
            'Integrated third-party services and APIs to extend platform functionality.',
            'Delivered more than 10 projects for internal and external customers.',
        ],
        technologies: [
            'Next.js',
            'React',
            'NestJS',
            'GraphQL',
            'PostgreSQL',
            'AWS',
            'GitLab CI/CD',
        ],
    },
    {
        company: 'Sunpyramid Health',
        role: 'Full-Stack Developer',
        period: 'Nov 2015 — Jul 2019',
        location: 'Remote / Managua, Nicaragua',
        website: 'https://www.linkedin.com/company/sunpyramid-health/',
        description:
            'Developed and maintained international e-commerce platforms, subscription billing integrations, and responsive customer experiences.',
        achievements: [
            'Developed and maintained e-commerce sites using Laravel, CodeIgniter, and CakePHP for a worldwide health and wellness brand.',
            'Integrated Sticky.io for subscription billing, recurring payments, and automated payment recovery.',
            'Implemented UltraCart for online checkout, payment processing, and order management.',
            'Converted Adobe XD designs into responsive interfaces using Bootstrap and JavaScript.',
            'Integrated Mailchimp and CRM services for marketing and customer relationship management.',
            'Maintained PostgreSQL databases and improved backend stability and performance for high-volume e-commerce operations.',
        ],
        technologies: [
            'Laravel',
            'CodeIgniter',
            'CakePHP',
            'PostgreSQL',
            'Bootstrap',
            'JavaScript',
        ],
    },
    {
        company: 'OOQIA',
        role: 'Web Developer',
        period: 'Feb 2014 — Oct 2015',
        location: 'Remote / Managua, Nicaragua',
        website: 'https://ooqia.com/',
        description:
            'Contributed to interactive educational experiences for museums and schools, including web applications, games, and map integrations.',
        achievements: [
            'Contributed to a web platform enabling museums and schools to create interactive educational experiences.',
            'Developed web applications and interactive games using AngularJS, PHP, MySQL, and jQuery.',
            'Integrated Google Maps API to deliver interactive map functionality.',
            'Collaborated with designers and business stakeholders to deliver features, resolve defects, and improve database schemas.',
        ],
        technologies: [
            'AngularJS',
            'PHP',
            'MySQL',
            'JavaScript',
            'jQuery',
        ],
    },
];

const skillGroups = [
    {
        title: 'Frontend',
        icon: Code2,
        description: 'React, Next.js, TypeScript, Redux Toolkit, React Hook Form, Zod, Tailwind CSS, and shadcn/ui for responsive web applications.',
        skills: [
            {
                name: 'React',
                icon: 'devicon-react-original',
            },
            {
                name: 'Next.js',
                icon: 'devicon-nextjs-plain',
            },
            {
                name: 'TypeScript',
                icon: 'devicon-typescript-plain',
            },
            {
                name: 'JavaScript',
                icon: 'devicon-javascript-plain',
            },
            {
                name: 'Redux Toolkit',
                icon: 'devicon-redux-original',
            },
            {
                name: 'Tailwind CSS',
                icon: 'devicon-tailwindcss-original',
            },
            {
                name: 'SCSS',
                icon: 'devicon-sass-original',
            },
            {
                name: 'HTML5',
                icon: 'devicon-html5-plain',
            },
            {
                name: 'CSS3',
                icon: 'devicon-css3-plain',
            },
        ],
    },
    {
        title: 'Backend',
        icon: Server,
        description: 'FastAPI, Django REST Framework, NestJS, REST/GraphQL APIs, async SQLAlchemy, asyncpg, and Pydantic.',
        skills: [
            {
                name: 'Python',
                icon: 'devicon-python-plain',
            },
            {
                name: 'Go',
                icon: 'devicon-go-original-wordmark',
            },
            {
                name: 'Django',
                icon: 'devicon-django-plain',
            },
            {
                name: 'FastAPI',
                icon: 'devicon-fastapi-plain',
            },
            {
                name: 'Node.js',
                icon: 'devicon-nodejs-plain',
            },
            {
                name: 'NestJS',
                icon: 'devicon-nestjs-original',
            },
            {
                name: 'Laravel',
                icon: 'devicon-laravel-original',
            },
            {
                name: 'CakePHP',
                icon: 'devicon-cakephp-plain',
            },
            {
                name: 'PHP',
                icon: 'devicon-php-plain',
            },
            {
                name: 'GraphQL',
                icon: 'devicon-graphql-plain',
            },
        ],
    },
    {
        title: 'Databases',
        icon: Database,
        description: 'PostgreSQL, MySQL, SQLAlchemy, Alembic, SQL optimization, pg_stat_statements, JWT, RBAC, and tenant-scoped data access.',
        skills: [
            {
                name: 'PostgreSQL',
                icon: 'devicon-postgresql-plain',
            },
            {
                name: 'MySQL',
                icon: 'devicon-mysql-original',
            },
            {
                name: 'SQLAlchemy',
                icon: 'devicon-sqlalchemy-plain',
            },
        ],
    },
    {
        title: 'DevOps & Tooling',
        icon: Terminal,
        description: 'Cloud deployments, observability, Playwright E2E testing, and Spec-Driven Development (SDD) assisted by Anthropic Claude and OpenAI Codex.',
        skills: [
            {
                name: 'Docker',
                icon: 'devicon-docker-plain',
            },
            {
                name: 'Git',
                icon: 'devicon-git-plain',
            },
            {
                name: 'GitHub',
                icon: 'devicon-github-original',
            },
            {
                name: 'GitLab',
                icon: 'devicon-gitlab-plain',
            },
            {
                name: 'Webpack',
                icon: 'devicon-webpack-plain',
            },
            {
                name: 'Babel',
                icon: 'devicon-babel-plain',
            },
            {
                name: 'ESLint',
                icon: 'devicon-eslint-plain',
            },
            {
                name: 'AWS',
                icon: 'devicon-amazonwebservices-plain-wordmark',
            },
            {
                name: 'DigitalOcean',
                icon: 'devicon-digitalocean-original',
            },
            {
                name: 'Google Cloud',
                icon: 'devicon-googlecloud-plain',
            },
            {
                name: 'Prometheus',
                icon: 'devicon-prometheus-original',
            },
            {
                name: 'Grafana',
                icon: 'devicon-grafana-plain',
            },
            {
                name: 'Playwright',
                icon: 'devicon-playwright-plain',
            },
            {
                name: 'OpenAI Codex',
                icon: '', // Rendered by aiToolIcons
            },
            {
                name: 'Anthropic Claude',
                icon: '', // Rendered by aiToolIcons
            },
            {
                name: 'Spec-Driven Development (SDD)',
                icon: '', // Rendered by aiToolIcons
            },
            {
                name: 'VS Code',
                icon: 'devicon-vscode-plain',
            },
            {
                name: 'Postman',
                icon: 'devicon-postman-plain',
            },
            {
                name: 'npm',
                icon: 'devicon-npm-original-wordmark',
            },
        ],
    },
];

const projects = [
    {
        title: 'CER Staffing',
        description:
            'Recruitment and employee onboarding workflows with company-scoped roles, permissions, and multi-tenant access controls.',
        technologies: [
            'FastAPI',
            'React',
            'TypeScript',
            'PostgreSQL',
            'RBAC',
        ],
    },
    {
        title: 'CER Time',
        description:
            'Scheduling, timecards, pay periods, reports, kiosk attendance, and mobile workflows for workforce time management.',
        technologies: [
            'FastAPI',
            'React',
            'TypeScript',
            'PostgreSQL',
        ],
    },
    {
        title: 'CER Route',
        description:
            'Field-route workflows for geolocation, mileage tracking, and trip closure across business operations.',
        technologies: [
            'FastAPI',
            'React',
            'TypeScript',
            'PostgreSQL',
        ],
    },
    {
        title: 'CER Inventory',
        description:
            'Multi-tenant inventory management for warehouses, branch stock, inter-location transfers, products, and supplier invoices.',
        technologies: [
            'FastAPI',
            'React',
            'TypeScript',
            'PostgreSQL',
            'Docker',
        ],
    },
    {
        title: 'CER Payroll',
        description:
            'Payroll administration workflows and Paycor integration supporting W-2 employees and 1099 contractors.',
        technologies: [
            'Django',
            'React',
            'TypeScript',
            'PostgreSQL',
            'Paycor',
        ],
    },
    {
        title: 'EdThrive',
        description:
            'Multi-tenant education SaaS for team meetings, scheduling, collaboration, tasks, and action-item tracking, deployed on AWS.',
        technologies: [
            'Next.js',
            'React',
            'NestJS',
            'GraphQL',
            'PostgreSQL',
            'AWS',
        ],
    },
];

type TechnologyIconProps = {
    name: string;
    icon: string;
};

const TechnologyIcon = ({
    name,
    icon,
}: TechnologyIconProps) => {
    const useBrandColor = name !== 'Next.js';
    const AiIcon = aiToolIcons[name];

    return (
        <div
            title={name}
            className="
                group
                flex
                size-16
                cursor-default
                items-center
                justify-center
                rounded-xl
                border
                bg-background
                shadow-sm
                transition-all
                duration-200
                hover:-translate-y-1
                hover:border-primary/30
                hover:shadow-md
            "
        >
            {AiIcon ? (
                <AiIcon
                    className="size-9 text-foreground transition-transform duration-200 group-hover:scale-110"
                    aria-hidden="true"
                />
            ) : (
                <i
                    className={`
                        ${icon}
                        ${useBrandColor ? 'colored' : ''}
                        text-4xl
                        text-foreground
                        transition-transform
                        duration-200
                        group-hover:scale-110
                    `}
                    aria-hidden="true"
                />
            )}

            <span className="sr-only">
                {name}
            </span>
        </div>
    );
};

type ExperienceTechnologyIconProps = {
    technology: string;
};

const ExperienceTechnologyIcon = ({
    technology,
}: ExperienceTechnologyIconProps) => {
    const icon = technologyIcons[technology];
    const AiIcon = aiToolIcons[technology];

    if (!icon && !AiIcon) {
        return (
            <Badge variant="secondary">
                {technology}
            </Badge>
        );
    }

    const useBrandColor = technology !== 'Next.js';

    return (
        <div
            title={technology}
            className="
                group
                flex
                size-10
                cursor-default
                items-center
                justify-center
                rounded-lg
                border
                bg-background
                shadow-sm
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:border-primary/30
                hover:shadow-md
            "
        >
            {AiIcon ? (
                <AiIcon
                    className="size-6 text-foreground transition-transform duration-200 group-hover:scale-110"
                    aria-hidden="true"
                />
            ) : (
                <i
                    className={`
                        ${icon}
                        ${useBrandColor ? 'colored' : ''}
                        text-2xl
                        text-foreground
                        transition-transform
                        duration-200
                        group-hover:scale-110
                    `}
                    aria-hidden="true"
                />
            )}

            <span className="sr-only">
                {technology}
            </span>
        </div>
    );
};

type ProjectTechnologyIconProps = {
    technology: string;
};

const ProjectTechnologyIcon = ({
    technology,
}: ProjectTechnologyIconProps) => {
    const icon = technologyIcons[technology];

    if (!icon) {
        return (
            <Badge variant="secondary">
                {technology}
            </Badge>
        );
    }

    const useBrandColor = technology !== 'Next.js';

    return (
        <div
            title={technology}
            className="
                group
                flex
                size-11
                cursor-default
                items-center
                justify-center
                rounded-lg
                border
                bg-background
                shadow-sm
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:border-primary/30
                hover:shadow-md
            "
        >
            <i
                className={`
                    ${icon}
                    ${useBrandColor ? 'colored' : ''}
                    text-2xl
                    text-foreground
                    transition-transform
                    duration-200
                    group-hover:scale-110
                `}
                aria-hidden="true"
            />

            <span className="sr-only">
                {technology}
            </span>
        </div>
    );
};

const CvDialog = () => {
    const viewerRef = useRef<HTMLDivElement | null>(null);

    const [containerWidth, setContainerWidth] = useState(800);
    const [numPages, setNumPages] = useState(0);
    const [zoom, setZoom] = useState(1);

    useEffect(() => {
        const element = viewerRef.current;

        if (!element) {
            return undefined;
        }

        const updateWidth = () => {
            const availableWidth = element.clientWidth - 24;

            setContainerWidth(
                Math.max(
                    Math.min(availableWidth, 900),
                    260,
                ),
            );
        };

        updateWidth();

        const resizeObserver = new ResizeObserver(() => {
            updateWidth();
        });

        resizeObserver.observe(element);

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    const handleDocumentLoadSuccess = ({
        numPages: loadedPages,
    }: {
        numPages: number;
    }) => {
        setNumPages(loadedPages);
    };

    const handleZoomOut = () => {
        setZoom((currentZoom) => (
            Math.max(
                Number((currentZoom - 0.1).toFixed(1)),
                0.5,
            )
        ));
    };

    const handleZoomIn = () => {
        setZoom((currentZoom) => (
            Math.min(
                Number((currentZoom + 0.1).toFixed(1)),
                2,
            )
        ));
    };

    const handleResetZoom = () => {
        setZoom(1);
    };

    const pageWidth = containerWidth * zoom;

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    size="lg"
                    variant="outline"
                    className="
            w-full
            border-border
            bg-background/50
            transition-all
            hover:-translate-y-0.5
            hover:bg-accent
            hover:shadow-sm
            sm:w-auto
        "
                >
                    <FileText className="mr-2 size-4" />

                    View CV
                </Button>
            </DialogTrigger>

            <DialogContent
                className="
                    flex
                    h-[94dvh]
                    w-[96vw]
                    max-w-6xl
                    flex-col
                    gap-0
                    overflow-hidden
                    p-0
                    sm:h-[92vh]
                "
            >
                <DialogHeader
                    className="
                        shrink-0
                        border-b
                        px-4
                        py-3
                        sm:px-6
                        sm:py-4
                    "
                >
                    <div
                        className="
                            flex
                            flex-col
                            gap-3
                            pr-8
                            sm:flex-row
                            sm:items-center
                            sm:justify-between
                        "
                    >
                        <div className="min-w-0">
                            <DialogTitle>
                                César Cordero — CV
                            </DialogTitle>

                            <DialogDescription className="mt-1 text-neutral-700 dark:text-neutral-200">
                                Full-Stack AI Web Developer
                            </DialogDescription>
                        </div>

                        <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="
                                w-full
                                shrink-0
                                sm:w-auto
                            "
                        >
                            <a
                                href={cvPdf}
                                download="Cesar-Daniel-Cordero-Jimenez-Resume.pdf"
                            >
                                <Download className="mr-2 size-4" />

                                Download CV
                            </a>
                        </Button>
                    </div>
                </DialogHeader>

                {/* Toolbar */}
                <div
                    className="
                        flex
                        shrink-0
                        items-center
                        justify-between
                        gap-2
                        border-b
                        bg-muted/30
                        px-3
                        py-2
                        sm:px-4
                    "
                >
                    <div className="text-xs text-neutral-600 dark:text-neutral-300 sm:text-sm">
                        {numPages > 0
                            ? `${numPages} pages`
                            : 'Loading...'}
                    </div>

                    <div className="flex items-center gap-1">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    onClick={handleZoomOut}
                                    disabled={zoom <= 0.5}
                                    aria-label="Zoom out"
                                >
                                    <Minus className="size-4" />
                                </Button>
                            </TooltipTrigger>

                            <TooltipContent>
                                Zoom out
                            </TooltipContent>
                        </Tooltip>

                        <span
                            className="
                                min-w-[48px]
                                text-center
                                text-xs
                                text-neutral-700 dark:text-neutral-200
                                sm:text-sm
                            "
                        >
                            {Math.round(zoom * 100)}
                            %
                        </span>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    onClick={handleZoomIn}
                                    disabled={zoom >= 2}
                                    aria-label="Zoom in"
                                >
                                    <Plus className="size-4" />
                                </Button>
                            </TooltipTrigger>

                            <TooltipContent>
                                Zoom in
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    onClick={handleResetZoom}
                                    aria-label="Reset zoom"
                                >
                                    <RotateCcw className="size-4" />
                                </Button>
                            </TooltipTrigger>

                            <TooltipContent>
                                Reset zoom
                            </TooltipContent>
                        </Tooltip>
                    </div>
                </div>

                {/* PDF Viewer */}
                <div
                    ref={viewerRef}
                    className="
                        min-h-0
                        flex-1
                        overflow-auto
                        bg-muted/40
                        p-3
                        sm:p-4
                    "
                >
                    <Document
                        file={cvPdf}
                        onLoadSuccess={handleDocumentLoadSuccess}
                        loading={(
                            <div
                                className="
                                    flex
                                    min-h-[400px]
                                    flex-col
                                    items-center
                                    justify-center
                                    gap-4
                                    text-muted-foreground
                                "
                            >
                                <FileText className="size-10 animate-pulse" />

                                <p className="text-sm text-neutral-700 dark:text-neutral-200">
                                    Loading CV...
                                </p>
                            </div>
                        )}
                        error={(
                            <div
                                className="
                                    flex
                                    min-h-[400px]
                                    flex-col
                                    items-center
                                    justify-center
                                    gap-5
                                    px-4
                                    text-center
                                "
                            >
                                <FileText className="size-10 text-muted-foreground" />

                                <p className="font-semibold">
                                    Unable to display the CV
                                </p>

                                <Button asChild>
                                    <a
                                        href={cvPdf}
                                        download="Cesar-Daniel-Cordero-Jimenez-Resume.pdf"
                                    >
                                        <Download className="mr-2 size-4" />

                                        Download CV
                                    </a>
                                </Button>
                            </div>
                        )}
                    >
                        <div
                            className="
                                flex
                                min-w-full
                                flex-col
                                items-center
                                gap-6
                            "
                        >
                            {Array.from(
                                {
                                    length: numPages,
                                },
                                (_, index) => (
                                    <Page
                                        key={`cv-page-${index + 1}`}
                                        pageNumber={index + 1}
                                        width={pageWidth}
                                        renderTextLayer
                                        renderAnnotationLayer
                                        className="
                                            shrink-0
                                            overflow-hidden
                                            rounded-sm
                                            bg-white
                                            shadow-xl
                                        "
                                    />
                                ),
                            )}
                        </div>
                    </Document>
                </div>

                {/* Mobile Actions */}
                <div
                    className="
                        flex
                        shrink-0
                        items-center
                        justify-between
                        gap-2
                        border-t
                        bg-background
                        px-3
                        py-3
                        sm:hidden
                    "
                >
                    <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="flex-1"
                    >
                        <a
                            href={cvPdf}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FileText className="mr-2 size-4" />

                            Open
                        </a>
                    </Button>

                    <Button
                        size="sm"
                        asChild
                        className="flex-1"
                    >
                        <a
                            href={cvPdf}
                            download="Cesar-Daniel-Cordero-Jimenez-Resume.pdf"
                        >
                            <Download className="mr-2 size-4" />

                            Download
                        </a>
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

const MANAGUA_POSITION: [number, number] = [
    12.1149,
    -86.2362,
];

const NICARAGUA_BOUNDS: [
    [number, number],
    [number, number],
] = [
        [10.7, -87.8],
        [15.1, -82.5],
    ];

// Reuse the existing Google Maps-style pin and jumping animation in style.scss.
// className: '' avoids Leaflet's default white square icon background.
const MANAGUA_PIN_ICON = divIcon({
    className: '',
    html: `
        <span class="google-map-pin-wrapper" aria-hidden="true">
            <span class="google-map-pin">
                <span class="google-map-pin-center"></span>
            </span>
            <span class="google-map-pin-shadow"></span>
        </span>
    `,
    iconSize: [24, 28],
    iconAnchor: [12, 27],
    popupAnchor: [0, -27],
});

const HomePage = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <main>
                {/* Hero */}
                <section
                    id="home"
                    className="
                        relative
                        flex
                        min-h-[calc(100svh-3.5rem)]
                        items-center
                        overflow-hidden
                    "
                >
                    <div className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
                        <div className="grid items-center gap-16 lg:grid-cols-[1fr_420px]">
                            <div className="max-w-4xl">
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <a
                                            href="#map"
                                            className="
                                                inline-flex
                                                rounded-md
                                                transition-transform
                                                duration-200
                                                hover:-translate-y-0.5
                                                focus:outline-none
                                                focus-visible:ring-2
                                                focus-visible:ring-ring
                                                focus-visible:ring-offset-2
                                            "
                                            aria-label="Go to map"
                                        >
                                            <Badge
                                                variant="secondary"
                                                className="
                                                    mb-6
                                                    cursor-pointer
                                                    transition-colors
                                                    hover:bg-secondary/80
                                                "
                                            >
                                                <span
                                                    className="google-map-pin-wrapper"
                                                    aria-hidden="true"
                                                >
                                                    <span className="google-map-pin">
                                                        <span className="google-map-pin-center" />
                                                    </span>

                                                    <span className="google-map-pin-shadow" />
                                                </span>

                                                Managua, Nicaragua
                                            </Badge>
                                        </a>
                                    </TooltipTrigger>

                                    <TooltipContent>
                                        <p>
                                            Go to map
                                        </p>
                                    </TooltipContent>
                                </Tooltip>

                                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                                    Full-Stack AI Web Developer
                                </p>

                                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                                    César Daniel
                                    <br />
                                    Cordero Jiménez
                                </h1>

                                <p className="mt-8 max-w-3xl text-lg leading-7 text-neutral-700 dark:text-neutral-200 sm:text-xl">
                                    I design and build scalable SaaS and enterprise applications using Spec-Driven Development (SDD), supported by Anthropic Claude and OpenAI Codex for implementation and code review. My expertise spans software architecture, secure APIs, cloud infrastructure, and reliable production-ready systems.
                                </p>

                                <div
                                    className="
        mt-10
        flex
        w-full
        flex-col
        gap-3
        sm:w-auto
        sm:flex-row
        sm:flex-wrap
    "
                                >
                                    <Button
                                        size="lg"
                                        asChild
                                        className="
            w-full
            bg-foreground
            text-background
            shadow-sm
            transition-all
            hover:-translate-y-0.5
            hover:bg-foreground/90
            hover:shadow-md
            sm:w-auto
        "
                                    >
                                        <a href="#projects">
                                            View my work
                                            <ArrowDown className="ml-2 size-4" />
                                        </a>
                                    </Button>

                                    {/* Secondary */}
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        asChild
                                        className="
                                            w-full
                                            border-border
                                            bg-background/50
                                            transition-all
                                            hover:-translate-y-0.5
                                            hover:bg-accent
                                            hover:shadow-sm
                                            sm:w-auto
                                        "
                                    >
                                        <a href="#experience">
                                            <Monitor className="mr-2 size-4" />

                                            My experience
                                        </a>
                                    </Button>

                                    <CvDialog />
                                </div>
                            </div>

                            {/* Profile */}
                            <div className="flex flex-col items-center justify-center">
                                <div className="relative">
                                    <div className="absolute -inset-2 rounded-full bg-muted" />

                                    <img
                                        src={profilePhoto}
                                        alt="César Cordero"
                                        className="
                                            relative
                                            size-48
                                            rounded-full
                                            border-4
                                            border-background
                                            object-cover
                                            shadow-lg
                                            sm:size-56
                                            lg:size-64
                                        "
                                    />

                                    {/* Active status */}
                                    <div
                                        className="
                                            absolute
                                            bottom-3
                                            right-3
                                            z-10
                                            sm:bottom-4
                                            sm:right-4
                                            lg:bottom-5
                                            lg:right-5
                                        "
                                        title="Available"
                                        aria-label="Available"
                                    >
                                        <span
                                            className="
                                                absolute
                                                inline-flex
                                                size-full
                                                animate-ping
                                                rounded-full
                                                bg-green-500
                                                opacity-40
                                            "
                                        />

                                        <span
                                            className="
                                                relative
                                                block
                                                size-5
                                                rounded-full
                                                border-4
                                                border-background
                                                bg-green-500
                                                shadow-sm
                                                sm:size-6
                                                lg:size-7
                                            "
                                        />
                                    </div>
                                </div>

                                {/* Social links */}
                                <div className="mt-8 flex items-center justify-center gap-7">
                                    <a
                                        href="https://github.com/Cesar90"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="GitHub"
                                        title="GitHub"
                                        className="
                                            text-muted-foreground
                                            transition-all
                                            duration-200
                                            hover:-translate-y-1
                                            hover:text-foreground
                                        "
                                    >
                                        <Github className="size-6" />
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/in/c%C3%A9sar-cordero/"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="LinkedIn"
                                        title="LinkedIn"
                                        className="
                                            text-muted-foreground
                                            transition-all
                                            duration-200
                                            hover:-translate-y-1
                                            hover:text-foreground
                                        "
                                    >
                                        <Linkedin className="size-6" />
                                    </a>

                                    <a
                                        href="mailto:ccordero.007@gmail.com"
                                        aria-label="Email"
                                        title="Email"
                                        className="
                                            text-muted-foreground
                                            transition-all
                                            duration-200
                                            hover:-translate-y-1
                                            hover:text-foreground
                                        "
                                    >
                                        <Mail className="size-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Separator />

                {/* About */}
                <section
                    id="about"
                    className="scroll-mt-16 py-24 sm:py-32"
                >
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                                    About me
                                </p>

                                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                                    Engineering software from application workflows to cloud infrastructure.
                                </h2>
                            </div>

                            <div className="space-y-6 text-lg leading-7 text-neutral-700 dark:text-neutral-200">
                                <p>
                                    I am a full-stack AI web developer with
                                    years of experience building SaaS and
                                    enterprise software across staffing, time
                                    and attendance, payroll, field operations,
                                    inventory, education, and e-commerce.
                                </p>

                                <p>
                                    My stack includes React, Next.js, and
                                    TypeScript; Python, FastAPI, Django,
                                    Node.js, NestJS, and Go; and PostgreSQL
                                    with secure multi-tenant architecture,
                                    RBAC, and company-scoped data access.
                                </p>

                                <p>
                                    I work across DigitalOcean, AWS, and GCP;
                                    Docker and GitLab CI/CD; and observability
                                    with Prometheus, Grafana, and PostgreSQL
                                    query analysis. I use Anthropic Claude and
                                    OpenAI Codex for AI-assisted Spec-Driven
                                    Development (SDD), implementation, and code
                                    review, with Playwright for E2E testing.
                                    I hold a
                                    bachelor&apos;s degree in Computer Engineering
                                    from the National University of Engineering
                                    (UNI), Managua.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <Separator />

                {/* Experience */}
                <section
                    id="experience"
                    className="scroll-mt-16 py-24 sm:py-32"
                >
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mb-14">
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                                Career
                            </p>

                            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                                Work Experience
                            </h2>

                            <p className="mt-4 max-w-2xl text-neutral-700 dark:text-neutral-200">
                                Building SaaS and enterprise platforms across
                                staffing, timekeeping, payroll, field routes,
                                inventory, education, and e-commerce.
                            </p>
                        </div>

                        <div className="relative space-y-12">
                            {experiences.map((experience) => (
                                <div
                                    key={`${experience.company}-${experience.period}`}
                                    className="grid gap-5 md:grid-cols-[240px_1fr]"
                                >
                                    <div>
                                        <p className="font-medium">
                                            {experience.period}
                                        </p>

                                        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                                            {experience.location}
                                        </p>
                                    </div>

                                    <div className="border-l pl-6 md:pl-10">
                                        <div className="flex flex-wrap items-start justify-between gap-4">
                                            <div>
                                                <h3 className="text-xl font-semibold">
                                                    {experience.role}
                                                </h3>

                                                <a
                                                    href={experience.website}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="mt-1 inline-flex items-center text-primary hover:underline"
                                                >
                                                    {experience.company}

                                                    <ArrowUpRight className="ml-1 size-4" />
                                                </a>
                                            </div>

                                            <BriefcaseBusiness className="size-5 text-muted-foreground" />
                                        </div>

                                        <p className="mt-5 max-w-3xl leading-7 text-neutral-700 dark:text-neutral-200">
                                            {experience.description}
                                        </p>

                                        <div className="mt-5 max-w-4xl overflow-hidden rounded-md border border-neutral-200 dark:border-neutral-800">
                                            <div
                                                className="
                                                    flex
                                                    items-center
                                                    justify-between
                                                    gap-3
                                                    border-b
                                                    border-neutral-200
                                                    bg-neutral-50
                                                    px-4
                                                    py-3
                                                    font-mono
                                                    text-xs
                                                    dark:border-neutral-800
                                                    dark:bg-neutral-950
                                                "
                                            >
                                                <span className="flex min-w-0 items-center gap-2">
                                                    <span className="size-2 shrink-0 bg-green-600 dark:bg-green-500" aria-hidden="true" />

                                                    <span className="truncate text-neutral-700 dark:text-neutral-300">
                                                        career/{experience.company.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.md
                                                    </span>
                                                </span>

                                                <span className="shrink-0 font-semibold text-green-700 dark:text-green-400">
                                                    +{experience.achievements.length}
                                                </span>
                                            </div>

                                            <ol
                                                aria-label={`${experience.company} achievements`}
                                                className="divide-y divide-green-100/70 dark:divide-green-900/30"
                                            >
                                                {experience.achievements.map(
                                                    (achievement, index) => (
                                                        <li
                                                            key={achievement}
                                                            className="
                                                                grid
                                                                grid-cols-[2rem_1rem_minmax(0,1fr)]
                                                                items-start
                                                                gap-2
                                                                bg-green-50/70
                                                                px-3
                                                                py-3
                                                                text-sm
                                                                leading-6
                                                                sm:grid-cols-[2.5rem_1rem_minmax(0,1fr)]
                                                                sm:px-4
                                                                dark:bg-green-950/20
                                                            "
                                                        >
                                                            <span
                                                                aria-hidden="true"
                                                                className="flex h-6 items-center justify-end select-none font-mono text-xs leading-none tabular-nums text-neutral-500 dark:text-neutral-500"
                                                            >
                                                                {String(index + 1).padStart(2, '0')}
                                                            </span>

                                                            <span
                                                                aria-hidden="true"
                                                                className="flex h-6 items-center justify-center select-none font-mono text-sm font-semibold leading-none text-green-700 dark:text-green-400"
                                                            >
                                                                +
                                                            </span>

                                                            <span className="min-w-0 break-words text-neutral-700 dark:text-neutral-200">
                                                                {achievement}
                                                            </span>
                                                        </li>
                                                    ),
                                                )}
                                            </ol>
                                        </div>

                                        <div className="mt-6 flex flex-wrap gap-2">
                                            {experience.technologies.map(
                                                (technology) => (
                                                    <ExperienceTechnologyIcon
                                                        key={technology}
                                                        technology={technology}
                                                    />
                                                ),
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <Separator />

                {/* Skills */}
                <section
                    id="skills"
                    className="scroll-mt-16 py-24 sm:py-32"
                >
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mb-14">
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                                Technologies
                            </p>

                            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                                Technical Skills
                            </h2>

                            <p className="mt-4 max-w-2xl text-neutral-700 dark:text-neutral-200">
                                Languages, frameworks, cloud platforms,
                                security, testing, and AI-assisted engineering
                                tools I use to deliver production software.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            {skillGroups.map((group) => {
                                const Icon = group.icon;

                                return (
                                    <Card key={group.title}>
                                        <CardHeader>
                                            <div className="mb-3 flex size-10 items-center justify-center rounded-lg border bg-muted">
                                                <Icon className="size-5" />
                                            </div>

                                            <CardTitle>
                                                {group.title}
                                            </CardTitle>

                                            <CardDescription className="text-neutral-700 dark:text-neutral-200">
                                                {group.description}
                                            </CardDescription>
                                        </CardHeader>

                                        <CardContent>
                                            <div className="flex flex-wrap gap-3">
                                                {group.skills.map((skill) => (
                                                    <TechnologyIcon
                                                        key={skill.name}
                                                        name={skill.name}
                                                        icon={skill.icon}
                                                    />
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <Separator />

                {/* Projects */}
                <section
                    id="projects"
                    className="scroll-mt-16 py-24 sm:py-32"
                >
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mb-14">
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                                Selected work
                            </p>

                            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                                Featured Projects
                            </h2>

                            <p className="mt-4 max-w-2xl text-neutral-700 dark:text-neutral-200">
                                Selected enterprise platforms and SaaS products
                                I have worked on, from workforce operations
                                to inventory and education.
                            </p>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-3">
                            {projects.map((project) => (
                                <Card
                                    key={project.title}
                                    className="
                                        flex
                                        flex-col
                                        transition-all
                                        duration-200
                                        hover:-translate-y-1
                                        hover:shadow-lg
                                    "
                                >
                                    <CardHeader>
                                        <CardTitle className="text-xl">
                                            {project.title}
                                        </CardTitle>

                                        <CardDescription className="leading-6 text-neutral-700 dark:text-neutral-200">
                                            {project.description}
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent className="mt-auto">
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map(
                                                (technology) => (
                                                    <ProjectTechnologyIcon
                                                        key={technology}
                                                        technology={technology}
                                                    />
                                                ),
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                <Separator />

                {/* Contact */}
                <section
                    id="contact"
                    className="scroll-mt-16 py-24 sm:py-32"
                >
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl text-center">
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                                Get in touch
                            </p>

                            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                                Let&apos;s build something useful.
                            </h2>

                            <p className="mx-auto mt-6 max-w-2xl text-lg leading-7 text-neutral-700 dark:text-neutral-200">
                                Interested in working together or discussing
                                a software project? Feel free to reach out.
                            </p>

                            <div className="mt-10 flex flex-wrap justify-center gap-3">
                                <Button
                                    size="lg"
                                    asChild
                                >
                                    <a href="mailto:ccordero.007@gmail.com">
                                        <Mail className="mr-2 size-4" />

                                        Send me an email
                                    </a>
                                </Button>

                                <Button
                                    size="lg"
                                    variant="outline"
                                    asChild
                                >
                                    <a
                                        href="https://github.com/Cesar90"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <Github className="mr-2 size-4" />

                                        GitHub
                                    </a>
                                </Button>

                                <Button
                                    size="lg"
                                    variant="outline"
                                    asChild
                                >
                                    <a
                                        href="https://www.linkedin.com/in/c%C3%A9sar-cordero/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <Linkedin className="mr-2 size-4" />

                                        LinkedIn
                                    </a>
                                </Button>
                            </div>
                        </div>

                        <div className="mt-16">
                            <div className="mb-6">
                                <div className="flex items-center gap-2">
                                    <MapPin className="size-5 text-primary" />

                                    <h3 className="text-xl font-semibold">
                                        Based in Managua, Nicaragua
                                    </h3>
                                </div>

                                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                                    Available for remote collaboration and
                                    software development opportunities.
                                </p>
                            </div>

                            <div
                                id="map"
                                className="
                                    relative
                                    z-0
                                    scroll-mt-20
                                    overflow-hidden
                                    rounded-xl
                                    border
                                    bg-card
                                    shadow-sm
                                "
                            >
                                <MapContainer
                                    bounds={NICARAGUA_BOUNDS}
                                    boundsOptions={{
                                        padding: [20, 20],
                                    }}
                                    scrollWheelZoom
                                    className="h-[400px] w-full sm:h-[500px]"
                                >
                                    <TileLayer
                                        attribution="&copy; OpenStreetMap contributors"
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />

                                    <Marker
                                        position={MANAGUA_POSITION}
                                        icon={MANAGUA_PIN_ICON}
                                        title="Managua, Nicaragua"
                                    >
                                        <Popup>
                                            <div>
                                                <strong>
                                                    Managua, Nicaragua
                                                </strong>

                                                <br />

                                                Full-Stack AI Web Developer
                                            </div>
                                        </Popup>
                                    </Marker>
                                </MapContainer>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default HomePage;
