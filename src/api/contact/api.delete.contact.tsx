'use server';

import axios from 'axios';
import logger from '@utils/logger';
import { ENDPOINTS } from './endpoints';
import { Rq_headers } from './common.headers';
import { CommonError } from './common.http';

const identity = '[api/contact.delete]';

export interface IRq_DeleteContact {
    repayment: {
        userId: string;
        isRetry: boolean;
        scheme: string;
    };
}

export interface IRs_DeleteContact {
    code: number;
    responseCode: string;
    responseDesc: string;
    responseData?: any;
}

export async function API_DeleteContact(data: IRq_DeleteContact) {
    try {
        const response = await axios({
            method: 'post',
            maxBodyLength: Infinity,
            url: ENDPOINTS.contact.delete,
            headers: {
                ...Rq_headers,
            },
            data: data,
        });

        const result: IRs_DeleteContact = response.data;
        logger.info(identity, result);

        if (typeof result.responseData === 'undefined') return CommonError;
        if (result.responseData === null) return CommonError;

        return result;
    } catch (error: any) {
        return error?.response?.data;
    }
}
