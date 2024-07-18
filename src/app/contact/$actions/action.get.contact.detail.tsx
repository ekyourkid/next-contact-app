'use server';


import { API_GetContactDetail, IRq_GetContactDetail } from '@/api/contact/api.get.contact.detail';
import logger from '@utils/logger';

export async function ACT_GetContactDetail(params: IRq_GetContactDetail) {
    try {
        const response = await API_GetContactDetail(params);

        return response;
    } catch (error) {
        logger.error('Error while fetch contact detail =>> ', error);
    }
}
