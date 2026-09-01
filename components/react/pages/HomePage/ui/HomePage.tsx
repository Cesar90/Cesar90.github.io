import {
    useEffect,
    useRef,
    useState,
} from 'react';

import {
    ArrowDown,
    ArrowUpRight,
    BriefcaseBusiness,
    Code2,
    Database,
    Download,
    FileText,
    Github,
    Linkedin,
    Mail,
    MapPin,
    Minus,
    Plus,
    Monitor,
    RotateCcw,
    Server,
    Terminal,
} from 'lucide-react';

import {
    CircleMarker,
    MapContainer,
    Popup,
    TileLayer,
} from 'react-leaflet';

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
import cvPdf from '@/shared/assets/documents/Cesar-Daniel-Cordero-Jimenez-Resume.pdf';

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
};

const experiences = [
    {
        company: 'CER Management Group',
        role: 'Full-Stack Developer',
        period: 'May 2024 — Present',
        location: 'Remote / Managua',
        website: 'https://cermanagementgroup.com',
        description:
            'Building multi-company business platforms, including payroll, recruitment, and inventory management systems.',
        achievements: [
            'Developed a multi-company payroll tracking system with Django and Django REST Framework, including Paycor integration.',
            'Built a multi-tenant inventory management platform with FastAPI, React, TypeScript, and PostgreSQL.',
            'Developed asynchronous REST APIs for invoices, suppliers, warehouses, products, and multi-branch operations.',
            'Configured Docker environments and GitLab CI/CD pipelines for development and deployment.',
            'Implemented application monitoring with Prometheus and Grafana.',
        ],
        technologies: [
            'Django',
            'FastAPI',
            'React',
            'TypeScript',
            'PostgreSQL',
            'Docker',
            'GitLab CI/CD',
            'Prometheus',
            'Grafana',
        ],
    },
    {
        company: 'Nicasource',
        role: 'Full-Stack Developer',
        period: 'Nov 2019 — Jan 2024',
        location: 'Remote / Managua',
        website: 'https://nicasource.com/',
        description:
            'Designed and delivered SaaS platforms and web applications using modern JavaScript, cloud, and API technologies.',
        achievements: [
            'Architected and built EdThrive, a multi-tenant SaaS platform designed to improve team meeting efficiency for educators.',
            'Designed GraphQL APIs using NestJS for flexible and efficient frontend data access.',
            'Built responsive user interfaces with Next.js and React.',
            'Deployed and managed cloud infrastructure using AWS S3, RDS, Elastic Beanstalk, Load Balancers, and Route 53.',
            'Delivered more than 10 web projects for external and internal customers.',
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
        location: 'Remote / Managua',
        website: 'https://www.linkedin.com/company/sunpyramid-health/',
        description:
            'Developed and maintained eCommerce platforms and third-party integrations for a health and wellness brand.',
        achievements: [
            'Developed and maintained multiple eCommerce applications using Laravel, CodeIgniter, and CakePHP.',
            'Integrated Sticky.io for subscription billing, recurring payments, and payment recovery.',
            'Implemented UltraCart integrations for checkout, payment processing, and order management.',
            'Integrated Mailchimp and CRM systems.',
            'Maintained PostgreSQL databases and improved backend stability and performance.',
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
        company: 'Ooqia',
        role: 'Web Developer',
        period: 'Feb 2014 — Oct 2015',
        location: 'Remote / Managua',
        website: 'https://www.ooqia.com/services',
        description:
            'Developed web applications and interactive features while contributing across the full software development lifecycle.',
        achievements: [
            'Developed web applications and interactive gaming features using AngularJS, PHP, MySQL, and jQuery.',
            'Worked with stakeholders to translate business requirements into technical solutions.',
            'Designed and optimized database schemas.',
            'Implemented bug fixes, performance improvements, and new functionality.',
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
        description: 'Modern, responsive web interfaces.',
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
        description: 'APIs, business logic, and scalable services.',
        skills: [
            {
                name: 'Python',
                icon: 'devicon-python-plain',
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
        description: 'Relational data modeling and optimization.',
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
        description: 'Build systems, deployments, and observability.',
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
        title: 'Multi-Tenant Inventory Platform',
        description:
            'A centralized inventory platform for managing companies, warehouses, products, invoices, suppliers, transfers, and multi-branch operations.',
        technologies: [
            'FastAPI',
            'React',
            'TypeScript',
            'PostgreSQL',
            'Docker',
        ],
    },
    {
        title: 'Payroll Management Platform',
        description:
            'A multi-company payroll and employee-hours tracking system with workflows for W-2 employees and 1099 contractors and integration with Paycor.',
        technologies: [
            'Django',
            'React',
            'TypeScript',
            'PostgreSQL',
        ],
    },
    {
        title: 'EdThrive',
        description:
            'A multi-tenant SaaS platform for educators focused on meeting scheduling, collaboration, task management, and action-item tracking.',
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

                            <DialogDescription className="mt-1">
                                Full-Stack Developer
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
                    <div className="text-xs text-muted-foreground sm:text-sm">
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
                                text-muted-foreground
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

                                <p className="text-sm">
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
                                    Full-Stack Developer
                                </p>

                                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                                    César Daniel
                                    <br />
                                    Cordero Jiménez
                                </h1>

                                <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
                                    I design and build scalable web applications,
                                    SaaS platforms, APIs, and modern user
                                    interfaces — from database architecture to
                                    production deployment.
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
                                    Building software from UI to infrastructure.
                                </h2>
                            </div>

                            <div className="space-y-6 text-lg leading-8 text-muted-foreground">
                                <p>
                                    I&apos;m a full-stack web developer with
                                    more than a decade of experience building
                                    web applications, SaaS platforms,
                                    eCommerce systems, and business software.
                                </p>

                                <p>
                                    My work spans React and TypeScript on the
                                    frontend; Django, FastAPI, Node.js and
                                    NestJS on the backend; and PostgreSQL for
                                    data-intensive applications.
                                </p>

                                <p>
                                    I also enjoy working beyond application
                                    code: Webpack configuration, database
                                    architecture, Docker, CI/CD, cloud
                                    infrastructure, monitoring, and
                                    performance optimization.
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

                            <p className="mt-4 max-w-2xl text-muted-foreground">
                                Building web applications and digital
                                products across SaaS, payroll, inventory,
                                eCommerce, and cloud platforms.
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

                                        <p className="mt-1 text-sm text-muted-foreground">
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

                                        <p className="mt-5 max-w-3xl leading-7 text-muted-foreground">
                                            {experience.description}
                                        </p>

                                        <ul className="mt-5 max-w-4xl space-y-3 text-sm leading-6 text-muted-foreground">
                                            {experience.achievements.map(
                                                (achievement) => (
                                                    <li
                                                        key={achievement}
                                                        className="flex gap-3"
                                                    >
                                                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />

                                                        <span>
                                                            {achievement}
                                                        </span>
                                                    </li>
                                                ),
                                            )}
                                        </ul>

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

                            <p className="mt-4 max-w-2xl text-muted-foreground">
                                Technologies and tools I use to build,
                                deploy, and maintain modern web applications.
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

                                            <CardDescription>
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

                            <p className="mt-4 max-w-2xl text-muted-foreground">
                                A selection of systems and products I&apos;ve
                                worked on throughout my career.
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

                                        <CardDescription className="leading-6">
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

                            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
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

                                <p className="mt-2 text-sm text-muted-foreground">
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

                                    <CircleMarker
                                        center={MANAGUA_POSITION}
                                        radius={10}
                                        pathOptions={{
                                            fillOpacity: 0.8,
                                        }}
                                    >
                                        <Popup>
                                            <div>
                                                <strong>
                                                    Managua, Nicaragua
                                                </strong>

                                                <br />

                                                Full-Stack Developer
                                            </div>
                                        </Popup>
                                    </CircleMarker>
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
