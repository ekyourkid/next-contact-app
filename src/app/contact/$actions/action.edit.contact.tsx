'use server';

import { API_PutContact, IRq_PutContact } from '@/api/contact/api.edit.contact';
import logger from '@utils/logger';

export async function ACT_EditContact(id: string, data: IRq_PutContact) {
    try {
        const response = await API_PutContact(id, data);
        return response;
    } catch (error) {
        logger.error('Error while edit contact =>> ', error);
    }
}
