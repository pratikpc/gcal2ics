import { argv } from 'process';
import gcal2ics from '.';

const embedUrl = argv[2];
if (embedUrl != null) {
    const icsUrl = gcal2ics(embedUrl);
    console.log(icsUrl);
}
