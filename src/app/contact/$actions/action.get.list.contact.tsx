'use server';


import { API_GetContactList, IRq_GetContactList } from '@/api/contact/api.get.contact.list';
import logger from '@utils/logger';

export async function ACT_GetContactList() {
    try {
        const response = await API_GetContactList();

        return response;
    } catch (error) {
        logger.error('Error while fetch contact list =>> ', error);
    }
}
