"use server";

import axios from "axios";

import logger from "@utils/logger";
import { ENDPOINTS } from "./endpoints";
import { Rq_headers } from "./common.headers";
import { CommonError } from "./common.http";

const identity = "[api/contact.detail]";

export interface IRq_GetContactDetail {
    id: string;
}

export type T_Contact = {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
    photo: string;
};
export interface IRs_GetContactDetail {
    message: string;
    data: T_Contact;
}

export async function API_GetContactDetail(params: IRq_GetContactDetail) {
    try {
        const response = await axios({
            method: "get",
            maxBodyLength: Infinity,
            url: ENDPOINTS.contact.detail + `/${params.id}`,
            headers: {
                ...Rq_headers,
            },
        });

        const result: IRs_GetContactDetail = response.data;
        logger.info(identity, result);

        if (typeof result.data === "undefined") return CommonError;
        if (result.data === null) return CommonError;

        return result;
    } catch (error) {
        return CommonError;
    }
}
