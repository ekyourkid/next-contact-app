'use server';

import { cookies } from 'next/headers';
import axios from 'axios';

import logger from '@utils/logger';
import { ENDPOINTS } from './endpoints';
import { Rq_headers } from './common.headers';
import { CommonError } from './common.http';

const identity = '[api/contact.create]';

export interface IRq_PostCreateContact {
    repayment: {
        userId: string;
        isRetry: boolean;
        scheme: string;
    };
}

export interface IRs_IRq_PostCreateContact {
    code: number;
    responseCode: string;
    responseDesc: string;
    responseData?: any;
}

export async function API_IRq_PostCreateContact(data: IRq_PostCreateContact) {
    const token = cookies().get('token');

    try {
        const response = await axios({
            method: 'post',
            maxBodyLength: Infinity,
            url: ENDPOINTS.contact.create,
            headers: {
                ...Rq_headers,
                'x-api-key': token?.value,
            },
            data: data,
        });

        const result: IRs_IRq_PostCreateContact = response.data;
        logger.info(identity, result);

        if (typeof result.responseData === 'undefined') return CommonError;
        if (result.responseData === null) return CommonError;

        return result;
    } catch (error: any) {
        return error?.response?.data;
    }
}
