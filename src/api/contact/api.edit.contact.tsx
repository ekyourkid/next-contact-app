'use server';

import axios from 'axios';
import logger from '@utils/logger';
import { ENDPOINTS } from './endpoints';
import { Rq_headers } from './common.headers';
import { revalidatePath } from 'next/cache';

const identity = '[api/contact.edit]';
export interface IRq_PutContact {
    firstName: string
    lastName: string
    age: number
    photo: string
}

export interface IRs_PutContact {
    message: string;
}

export async function API_PutContact(id: string, data: IRq_PutContact) {
    try {
        const response = await axios({
            method: 'PUT',
            url: ENDPOINTS.contact.update + `/${id}`,
            headers: {
                ...Rq_headers,
            },
            data: data,
        });

        revalidatePath(`/contact/edit/${id}`, 'page')
        const result: IRs_PutContact = response.data;
        logger.info(identity, result);

        return result;
    } catch (error: any) {
        return error?.response?.data;
    }
}
