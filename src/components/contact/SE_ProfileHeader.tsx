"use server";

import React from "react";
import {
    IRs_GetContactDetail,
    T_Contact,
} from "@/api/contact/api.get.contact.detail";
import Image from "next/image";

const fallbackSrc =
    "https://as2.ftcdn.net/v2/jpg/00/64/67/63/1000_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg";

const SE_ProfileHeader = ({ data }: { data: IRs_GetContactDetail }) => {
    const today = new Date();
    const thisYear = today.getFullYear();
    const user = data?.data;

    return (
        <div className="flex flex-col justify-center items-center space-y-5 bg-white h-max w-full p-10 py-8">
            <Image
                className="rounded-full size-28 object-cover"
                src={fallbackSrc}
                alt="Profile"
                width={60}
                height={60}
            />
            <section className="text-center">
                <h1 className="text-lg font-semibold">
                    {user.firstName} {user.lastName}
                </h1>
                <p className="text-gray-500">
                    Born at {thisYear - user.age}, current age {user.age} years
                </p>
            </section>
        </div>
    );
};

export default SE_ProfileHeader;
