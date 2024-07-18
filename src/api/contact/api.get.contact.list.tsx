'use server';

import { cookies } from 'next/headers';
import axios from 'axios';

import logger from '@utils/logger';
import { ENDPOINTS } from './endpoints';
import { Rq_headers } from './common.headers';
import { CommonError } from './common.http';

const identity = '[api/contact.list]';

export interface IRq_GetContactList { }

export type T_Contact = {
    id: string,
    firstName: string,
    lastName: string,
    age: number,
    photo: string
}
export interface IRs_GetContactList {
    message: string;
    data: T_Contact[],
}

export async function API_GetContactList() {
    const token = cookies().get('token');
    try {
        const response = await axios({
            method: 'get',
            maxBodyLength: Infinity,
            url: ENDPOINTS.contact.list,
            headers: {
                ...Rq_headers,
                'x-api-key': token?.value,
            },
        });

        const result: IRs_GetContactList = response.data;
        logger.info(identity, result);

        if (typeof result.data === 'undefined') return CommonError;
        if (result.data === null) return CommonError;

        return result;
    } catch (error) {
        return CommonError;
    }
}
