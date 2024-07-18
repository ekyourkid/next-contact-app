import CE_ContactHeader from "../components/contact/SE_ContactHeader";
import CE_ContactList from "../components/contact/CE_ContactList";
import CE_NewContact from "../components/contact/CE_NewContact";
import { ACT_GetContactList } from "./contact/$actions/action.get.list.contact";
import { IRs_GetContactList } from "@/api/contact/api.get.contact.list";

export default async function Home() {
  const data = await ACT_GetContactList()

  return (
    <main className="min-h-screen w-full bg-[#F4F6F8]">
      <CE_ContactHeader />
      <CE_NewContact data={data as IRs_GetContactList} />
      <CE_ContactList data={data as IRs_GetContactList} />
    </main>
  );
}
