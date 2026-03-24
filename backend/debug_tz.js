const dotenv = require('dotenv');
const path = require('path');

// Load env from the same path server.ts/emailService.ts would use
const envPath = path.join(process.cwd(), '.env');
console.log('Loading .env from:', envPath);
dotenv.config({ path: envPath, override: true });

console.log('APP_TIMEZONE:', process.env.APP_TIMEZONE);

const testDate = new Date('2026-03-31T04:30:00.000Z');
const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit',
    timeZone: process.env.APP_TIMEZONE || 'UTC'
};

const formatted = testDate.toLocaleString('en-US', options);

console.log('UTC Input:', testDate.toISOString());
console.log('Formatted Output:', formatted);

if (formatted.includes('10:00 AM')) {
    console.log('SUCCESS: Timezone is working correctly.');
} else {
    console.log('FAILURE: Timezone is NOT being applied.');
}
