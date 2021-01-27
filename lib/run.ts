import { argv } from 'process';
import AsGoogleICSLink from '.';

const embedUrl = argv[2];
if (embedUrl != null) {
    const icsUrl = AsGoogleICSLink(embedUrl);
    console.log(icsUrl);
}
