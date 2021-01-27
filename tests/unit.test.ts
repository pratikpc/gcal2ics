import { expect } from 'chai';
import AsGoogleICSLink, { ParamFromURL } from '../lib';

describe('Google Calendar URL to iCAL', () => {
    it('Param from URL Check', () => {
        // URL get key value
        const value = ParamFromURL(
            'http://localhost?key=value',
            'key'
        );
        expect(value).to.be.equal('value');
    });
    it('Convert Embed Google Cal to ICS', () => {
        // Example from https://stackoverflow.com/questions/30766477/google-calendar-ical-url-for-public-calendar
        const calendar = AsGoogleICSLink(
            'https://calendar.google.com/calendar/embed?src=info@example.com'
        );
        expect(calendar).to.be.equal(
            'https://calendar.google.com/calendar/ical/info@example.com/public/basic.ics'
        );
    });
    it('Should be Null if Param is not part of the URL', () => {
        // URL get key value
        const value = ParamFromURL(
            'http://localhost?key=value',
            'unknown'
        );
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        expect(value).is.null;
    });
    it('Return original link back if src is not part of Google Calendar URL', () => {
        // Example from https://stackoverflow.com/questions/30766477/google-calendar-ical-url-for-public-calendar
        const calendar = AsGoogleICSLink(
            'https://calendar.google.com/calendar/ical/info@example.com/public/basic.ics'
        );
        expect(calendar).to.be.equal(
            'https://calendar.google.com/calendar/ical/info@example.com/public/basic.ics'
        );
    });
});
