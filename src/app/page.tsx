import CE_ContactHeader from "../components/contact/SE_ContactHeader";
import CE_ContactList from "../components/contact/CE_ContactList";
import CE_NewContact from "../components/contact/CE_NewContact";
import { ACT_GetContactList } from "./contact/$actions/action.get.list.contact";
import { IRs_GetContactList } from "@/api/contact/api.get.contact.list";

const DUMMY = {
  "message": "Get contacts",
  "data": [
    {
      "id": "93ad6070-c92b-11e8-b02f-cbfa15db428b",
      "firstName": "Frank",
      "lastName": "Zappa",
      "age": 27,
      "photo": "file:///data/user/0/com.contactservice/cache/rn_image_picker_lib_temp_dd8a0c0f-3dd7-45d4-ae05-4f1e93ab1a3d.jpg"
    },
    {
      "id": "b3abd640-c92b-11e8-b02f-cbfa15db428b",
      "firstName": "Luke",
      "lastName": "Skywalker",
      "age": 27,
      "photo": "file:///data/user/0/com.akhmaln.TestCoding/cache/ImagePicker/60305d23-5ab4-4c93-a026-7569e5bd41ce.jpeg"
    },
    {
      "firstName": "Jenifer",
      "lastName": "bob",
      "age": 30,
      "photo": "file:///data/user/0/com.contactservice/cache/rn_image_picker_lib_temp_4debfbce-92eb-45d6-a389-b0c91471a632.jpg",
      "id": "c012d440-44ba-11ef-a284-3353732f2a5d"
    },
    {
      "firstName": "john",
      "lastName": "doe",
      "age": 111,
      "photo": "http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550",
      "id": "a9bc1650-44da-11ef-a284-3353732f2a5d"
    },
    {
      "firstName": "test2",
      "lastName": "test3",
      "age": 2,
      "photo": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSGfpQ3m-QWiXgCBJJbrcUFdNdWAhj7rcUqjeNUC6eKcXZDAtWm",
      "id": "31567be0-44dc-11ef-a284-3353732f2a5d"
    },
    {
      "firstName": "test2",
      "lastName": "test3",
      "age": 3,
      "photo": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSGfpQ3m-QWiXgCBJJbrcUFdNdWAhj7rcUqjeNUC6eKcXZDAtWm",
      "id": "9760c060-44e3-11ef-a284-3353732f2a5d"
    },
    {
      "firstName": "test2",
      "lastName": "test3",
      "age": 3,
      "photo": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSGfpQ3m-QWiXgCBJJbrcUFdNdWAhj7rcUqjeNUC6eKcXZDAtWm",
      "id": "17c3b9b0-44e4-11ef-a284-3353732f2a5d"
    },
    {
      "firstName": "john",
      "lastName": "doe",
      "age": 1,
      "photo": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSGfpQ3m-QWiXgCBJJbrcUFdNdWAhj7rcUqjeNUC6eKcXZDAtWm",
      "id": "5bc341d0-44e4-11ef-a284-3353732f2a5d"
    },
    {
      "firstName": "test8",
      "lastName": "test8",
      "age": 8,
      "photo": "file:///data/user/0/com.contactservice/cache/rn_image_picker_lib_temp_11cfe1ba-e4e4-472a-bd58-5e26f5441992.jpg",
      "id": "f92ddf20-44e4-11ef-a284-3353732f2a5d"
    },
    {
      "firstName": "test8",
      "lastName": "test8",
      "age": 8,
      "photo": "file:///data/user/0/com.contactservice/cache/rn_image_picker_lib_temp_11cfe1ba-e4e4-472a-bd58-5e26f5441992.jpg",
      "id": "27ed08e0-44e5-11ef-a284-3353732f2a5d"
    },
    {
      "firstName": "test8",
      "lastName": "test8",
      "age": 8,
      "photo": "file:///data/user/0/com.contactservice/cache/rn_image_picker_lib_temp_11cfe1ba-e4e4-472a-bd58-5e26f5441992.jpg",
      "id": "37cb13b0-44e5-11ef-a284-3353732f2a5d"
    },
    {
      "firstName": "test8",
      "lastName": "test8",
      "age": 8,
      "photo": "file:///data/user/0/com.contactservice/cache/rn_image_picker_lib_temp_11cfe1ba-e4e4-472a-bd58-5e26f5441992.jpg",
      "id": "3f8c17c0-44e5-11ef-a284-3353732f2a5d"
    },
    {
      "firstName": "Test9",
      "lastName": "Test9",
      "age": 5,
      "photo": "file:///data/user/0/com.contactservice/cache/rn_image_picker_lib_temp_206bf6dc-63d7-4f43-9168-38fa66f981ed.jpg",
      "id": "6c276530-44e7-11ef-a284-3353732f2a5d"
    },
    {
      "firstName": "Test9",
      "lastName": "Test9",
      "age": 5,
      "photo": "file:///data/user/0/com.contactservice/cache/rn_image_picker_lib_temp_206bf6dc-63d7-4f43-9168-38fa66f981ed.jpg",
      "id": "7857f860-44e7-11ef-a284-3353732f2a5d"
    }
  ]
}

export default async function Home() {
  const sortedData = DUMMY.data.sort(function (a, b) {
    return a.firstName.localeCompare(b.firstName)
  });

  const handleFilter = (data: any, searchValue: string) => {
    const result = data.filter((item: any) => {
      const fullname = `${item.firstName} ${item.lastName}`
      fullname.includes(searchValue)
    })

    return result
  }

  const data = await ACT_GetContactList()

  return (
    <main className="min-h-screen w-full bg-[#F4F6F8]">
      <CE_ContactHeader />
      <CE_NewContact data={data as IRs_GetContactList} />
      <CE_ContactList data={data as IRs_GetContactList} />
    </main>
  );
}
