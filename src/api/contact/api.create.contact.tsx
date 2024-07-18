'use server';

import axios from 'axios';
import logger from '@utils/logger';
import { ENDPOINTS } from './endpoints';
import { Rq_headers } from './common.headers';
import { revalidatePath } from 'next/cache';

const identity = '[api/contact.create]';

export interface IRq_PostCreateContact {
    firstName: string
    lastName: string
    age: number
    photo: string
}

export interface IRs_IRq_PostCreateContact {
    message: string;
}

export async function API_IRq_PostCreateContact(data: IRq_PostCreateContact) {
    try {
        const response = await axios({
            method: 'post',
            maxBodyLength: Infinity,
            url: ENDPOINTS.contact.create,
            headers: {
                ...Rq_headers,
            },
            data: data,
        });
        revalidatePath('/')

        const result: IRs_IRq_PostCreateContact = response.data;
        logger.info(identity, result);

        return result;
    } catch (error: any) {
        return error?.response?.data;
    }
}
