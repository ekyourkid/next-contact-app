'use server';

import { API_IRq_PostCreateContact, IRq_PostCreateContact } from '@/api/contact/api.create.contact';
import logger from '@utils/logger';

export async function ACT_PostCreateContact(data: IRq_PostCreateContact) {
    try {
        const response = await API_IRq_PostCreateContact(data);

        return response;
    } catch (error) {
        logger.error('Error while post create contact =>> ', error);
    }
}
