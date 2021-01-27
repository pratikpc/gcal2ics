# gcal2ics (Google Calendar To Google Cal ICS)

[![npm](https://img.shields.io/npm/v/gcal2ics)](https://www.npmjs.com/package/gcal2ics) [![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![Lint and Format Status](https://github.com/pratikpc/gcal2ics/workflows/Lint-Format/badge.svg)](https://github.com/pratikpc/gcal2ics/actions) [![Unit Test](https://github.com/pratikpc/gcal2ics/workflows/Unit-Test/badge.svg)](https://github.com/pratikpc/gcal2ics/actions)

## Why

Recently, someone shared an embeded Calendar link with me.  
A bit like https://calendar.google.com/calendar/embed?src=info@example.com  
I for obvious reasons wanted to link that embeded Calendar with my Calendar app  
However, direct copy-paste in this scenario would not work
I needed to convert it to https://calendar.google.com/calendar/ical/info@example.com/public/basic.ics  
So inspired from this [SO answer](https://stackoverflow.com/a/56711805) to automate this process, I decided to create gcal2ics (there were a lot of links)

## Usage

COMMAND LINE

```
> gcal2ics https://calendar.google.com/calendar/embed?src=info@example.com

https://calendar.google.com/calendar/ical/info@example.com/public/basic.ics
```

[TypeScript](https://www.typescriptlang.org/)/JavaScript

```js
import gcal2ics from 'gcal2ics';

console.log(
    gcal2ics(
        'https://calendar.google.com/calendar/embed?src=info@example.com'
    )
);
// OUTPUT
// https://calendar.google.com/calendar/ical/info@example.com/public/basic.ics
```
