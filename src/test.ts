import { db } from './server/db';
import { log } from 'console';

await db.user.create({
    data: {
        emailAddress: 'test@gmial.com',
        firstName: 'olive',
        lastName: 'monk',
    },
});

log('done');
