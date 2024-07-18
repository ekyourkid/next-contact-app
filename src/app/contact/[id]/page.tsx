import SE_ProfileHeader from "@/components/contact/SE_ProfileHeader";
import Link from "next/link";
import React from "react";
import { ACT_GetContactDetail } from "../$actions/action.get.contact.detail";
import { IRs_GetContactDetail } from "@/api/contact/api.get.contact.detail";

type Props = {
    params: { id: string };
};

const ContactDetailPage = async (props: Props) => {
    const { id } = props.params;
    const data = await ACT_GetContactDetail({ id });

    return (
        <main className="min-h-screen w-full bg-[#F4F6F8] space-y-5">
            <SE_ProfileHeader data={data as IRs_GetContactDetail} />
            <div className="divide-y px-10">
                <section className="bg-white p-5">
                    <article className="py-2 flex flex-col space-y-3">
                        <h1 className="font-semibold">Profile</h1>
                        <Link
                            href={`/contact/edit/${id}`}
                            className="font-light"
                        >
                            Manage profile
                        </Link>
                        <Link href={"#"} className="font-light text-red-500">
                            Delete this contact
                        </Link>
                    </article>
                </section>
            </div>
            <div className="divide-y px-10">
                <section className="bg-white p-5">
                    <article className="py-2 flex flex-col space-y-3">
                        <h1 className="font-semibold">Help & articles</h1>
                        <Link href={"#"} className="font-light">
                            Send feedback
                        </Link>
                        <Link href={"#"} className="font-light">
                            Chat with us
                        </Link>
                        <Link href={"#"} className="font-light">
                            About the apps
                        </Link>
                    </article>
                </section>
            </div>
        </main>
    );
};

export default ContactDetailPage;
