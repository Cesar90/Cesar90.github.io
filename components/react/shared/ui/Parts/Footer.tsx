import { ArrowUpRight, Github } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="border-t bg-background">
            <div
                className="
                    mx-auto
                    flex
                    max-w-7xl
                    flex-col
                    gap-4
                    px-4
                    py-4
                    text-sm
                    text-muted-foreground
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                    lg:px-8
                "
            >
                <p>
                    ©
                    {' '}
                    {new Date().getFullYear()}
                    {' '}
                    César Daniel Cordero Jiménez
                </p>

                <div
                    className="
                        flex
                        flex-col
                        gap-3
                        sm:flex-row
                        sm:items-center
                        sm:gap-5
                    "
                >
                    <p>
                        Built with React, TypeScript, Webpack & Tailwind CSS.
                    </p>

                    <a
                        href="https://github.com/Cesar90/Cesar90.github.io"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="View portfolio source code on GitHub"
                        className="
                            inline-flex
                            items-center
                            gap-1.5
                            font-medium
                            text-foreground
                            transition-all
                            duration-200
                            hover:-translate-y-0.5
                            hover:text-primary
                        "
                    >
                        <Github className="size-4" />

                        <span>
                            Source Code
                        </span>

                        <ArrowUpRight className="size-3.5" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
