'use server';

import { API_DeleteContact, IRq_DeleteContact } from '@/api/contact/api.delete.contact';
import logger from '@utils/logger';

export async function ACT_DeleteContact(params: IRq_DeleteContact) {
    try {
        const response = await API_DeleteContact(params);

        return response;
    } catch (error) {
        logger.error('Error while delete contact =>> ', error);
    }
}
