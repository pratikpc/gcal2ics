// Based on https://stackoverflow.com/questions/30766477/google-calendar-ical-url-for-public-calendar

// Return the first param associated with the URL
export function ParamFromURL(
    url: string | URL | null,
    param: string
): string | null {
    if (url == null) return null;
    if (typeof url === 'string')
        return ParamFromURL(new URL(url), param);
    return url.searchParams.get(param);
}

export function AsGoogleICSLink(
    url: string | URL | null
): string {
    const src = ParamFromURL(url, 'src');
    return src == null
        ? (url || '').toString()
        : `https://calendar.google.com/calendar/ical/${src}/public/basic.ics`;
}

export default AsGoogleICSLink;
