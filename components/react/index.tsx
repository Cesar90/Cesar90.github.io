import { createRoot } from 'react-dom/client';
import {
    // StoreProvider,
    // UserProvider,
    // AppProvider,
    ThemeProvider,
} from '@/app/providers/StoreProvider';
import { Toaster, TooltipProvider } from '@/shared/ui/shadcn/new-york';
import App from './app/App';
import '@/shared/config/i18n/i18n';
import 'devicon/devicon.min.css';
import 'leaflet/dist/leaflet.css';
import '@/app/styles/index.scss';
import './style.scss';

const container = document.getElementById('rootReact');

if (container) {
    const root = createRoot(container);
    root.render(
        <TooltipProvider delayDuration={0}>
            <ThemeProvider defaultTheme="dark" storageKey="portfolio-ui-theme">
                <App />
                <Toaster />
            </ThemeProvider>
        </TooltipProvider>,
    );
}
