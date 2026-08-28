import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { AxiosError } from 'axios';
import {
    eachMonthOfInterval,
    format,
    parseISO,
} from 'date-fns';
import { enUS, es, fr } from 'date-fns/locale';

export const DATE_FORMAT = 'MM-dd-yyyy';
export const YYYY_MM = 'yyyy-MM';
export const YYYYMMDD_FORMAT = 'yyyy-MM-dd';
export const DATE_FORMAT_ISO = YYYYMMDD_FORMAT;

export const getSafeDateString = (value: Date | string): string => {
    if (value instanceof Date && !Number.isNaN(value.getTime())) {
        return format(value, 'yyyy-MM-dd');
    }

    const parsed = new Date(value);
    if (!Number.isNaN(parsed.getTime())) {
        return format(parsed, 'yyyy-MM-dd');
    }

    return String(value).replace(/[^0-9A-Za-z_-]/g, '-');
};

export enum TaxesEnum {
    W9 = 'W9',
    W2 = 'W2',
}

export enum YesNoEnum {
    Yes = 'Yes',
    No = 'No',
}

export enum MaritalStatusEnum {
    Single = 'Single',
    Married = 'Married',
    Divorced = 'Divorced',
    Widowed = 'Widowed',
}

export const getMonthsInRangeDate = (startDate: string, endDate: string) => {
    const start = parseISO(startDate);
    const end = parseISO(endDate);

    const months = eachMonthOfInterval({ start, end });

    // Format each month in 'yyyy-MM' format
    return months.map((month) => format(month, YYYY_MM));
};

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const normalizeSpaces = (input: string) => {
    return input.trim().replace(/\s+/g, ' ');
};

export function createQueryString(params: Record<string, string | number | boolean | undefined | null>): string {
    const queryString = Object.entries(params)
        .filter(([_, value]) => value !== undefined && value !== null)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
        .join('&');
    return queryString ? `?${queryString}` : '';
}

// Utility to remove undefined or null values from an object
export function cleanPayload<T extends object>(payload: T): Partial<T> {
    return Object.fromEntries(
        Object.entries(payload as Record<string, unknown>)
            .filter(([_, value]) => value !== undefined && value !== null && value !== ''),
    ) as Partial<T>;
}

export const handleAsyncError = (error: AxiosError, rejectWithValue: Function) => {
    if (error.response) {
        if (error.response.status === 422) {
            const errorMessages = error.response.data;
            return rejectWithValue(errorMessages);
        }

        if (error.response.status === 401) {
            const errorMessages = error.response.data;
            return rejectWithValue(errorMessages);
        }

        // If it's an HTTP error, check for DRF bad request (400) response
        if (error.response.status === 400
            || error.response.status === 403
            || error.response.status === 404
            || error.response.status === 409) { // 409 Conflict
            // Extract validation errors from DRF response
            const errorMessages = error.response.data;
            return rejectWithValue(errorMessages);
        }

        return rejectWithValue(`Request failed with status ${error.response.status}`);
    } if (error.request) {
        // If the request was made but no response was received
        return rejectWithValue('No response received from the server');
    }
    // If something else caused the error
    return rejectWithValue('Unexpected error occurred');
};

export function extractErrorMessage(
    result: any,
    defaultErrorMessage: string = 'An unknown error occurred',
): string {
    // debugger;
    const detail = result?.payload?.detail ?? result?.detail;

    if (typeof detail === 'string') {
        return detail;
    }

    if (Array.isArray(detail)) {
        // for (const error of detail) {
        //     if (typeof error === 'object' && error?.ctx?.reason) {
        //         return error.ctx.reason;
        //     }
        // }
        const errorWithReason = detail.find(
            (error) => typeof error === 'object' && error?.ctx?.reason,
        );
        if (errorWithReason) {
            return errorWithReason.ctx.reason;
        }
    }

    return defaultErrorMessage;
}

export function getFilenameFromContentDisposition(cd?: string | null, fallback = 'stubs_by_employee.zip') {
    if (!cd) return fallback;
    // e.g. attachment; filename="something.zip"
    const match = /filename\*?=(?:UTF-8''|")?([^";]+)/i.exec(cd);
    if (match?.[1]) {
        try { return decodeURIComponent(match[1].replace(/"/g, '')); } catch { return match[1]; }
    }
    return fallback;
}

export const getDateLocale = (lang: string) => {
    switch (lang) {
    case 'es':
        return es;
    case 'ht':
        return fr; // or enUS if you prefer English month names for Creole
    default:
        return enUS;
    }
};

export function formatIsoDate(iso?: string | null): string {
    if (!iso) return '-';

    const [y, m, d] = iso.split('-').map(Number);
    if (!y || !m || !d) return iso;

    const date = new Date(y, m - 1, d);
    return Number.isNaN(date.getTime()) ? iso : date.toLocaleDateString();
}

export function parseIsoDateAsLocal(value?: string | null): Date | null {
    if (!value) return null;

    const [y, m, d] = value.split('-').map(Number);
    if (!y || !m || !d) return null;

    return new Date(y, m - 1, d);
}

export function formatIsoDateLabel(value?: string | null): string {
    const parsedDate = parseIsoDateAsLocal(value);
    if (!parsedDate) {
        return value || '';
    }
    return format(parsedDate, YYYYMMDD_FORMAT);
}

export function normalizeIdentifierToken(value: string): string {
    return value
        .trim()
        .toUpperCase()
        .replace(/\s+/g, '') // remove spaces
        .replace(/[^A-Z0-9]/g, ''); // keep alphanumeric only
}

export function buildNameFromParts(...parts: string[]): string {
    return parts
        .map((p) => p?.trim())
        .filter(Boolean)
        .join(' ')
        .replace(/\s+/g, ' ')
        .trim();
}

export function buildIdentifierFromParts(
    parts: string[],
    separator = '_',
): string {
    const normalized = parts
        .map((p) => normalizeIdentifierToken(p))
        .filter(Boolean);

    if (!normalized.length) return '';

    return normalized.join(separator);
}

export const isValidTwoDigitIntString = (value: string) => {
    if (value === '') return true;
    return /^(?:\d{1,2})$/.test(value);
};

const HEX_COLOR_REGEX = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

export const getSafeHexColor = (
    color: string | null | undefined,
    fallback: string,
): string => {
    if (!color) return fallback;
    return HEX_COLOR_REGEX.test(color) ? color : fallback;
};
