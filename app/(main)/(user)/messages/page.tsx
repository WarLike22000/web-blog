import { getMessages } from "@/actions/contact";
import Button from "@/components/Button";
import Link from "next/link";
import DeleteMessage from "./_Components/DeleteMessage";

const Messages = async () => {

    const messages = await getMessages();
    
    return ( 
        <section className="w-full rounded-lg shadow-md border p-2 overflow-x-auto">
            <table className="w-full">
                <tr>
                    <th>
                        message
                    </th>
                    <th>
                        name
                    </th>
                    <th>
                        creation date
                    </th>
                    <th>
                        sender
                    </th>
                    <th>
                        delete
                    </th>
                </tr>

                {
                    messages?.map((message) => (
                        <tr key={message.id} className="border-t text-center">
                            <td className="truncate max-w-32 border-r p-2">
                                <Link href={`/messages/${message.id}`}>
                                    {message.message}
                                </Link>
                            </td>
                            

                            <td className="truncate max-w-28 p-2 border-r">
                                {message.name}
                            </td>

                            <td className="p-2 border-r">
                                {message.createdAt.getMonth()} / {message.createdAt.getDate()} / {message.createdAt.getFullYear()}
                            </td>
                            <td className="p-2 border-r">
                                {message.user.name}
                            </td>

                            <td className="p-2 mx-auto">
                                <DeleteMessage id={message.id} />
                            </td>
                        </tr>
                    ))
                }
            </table>
            {
                messages?.length === 0 && (
                    <div className="w-full flex items-center justify-center h-[200px]">
                        <div className="flex flex-col items-center gap-2">
                            <p>
                                Empty
                            </p>
                            <Link href="/contact-us">
                                <Button>
                                    Send message
                                </Button>
                            </Link>
                        </div>
                    </div>
                )
            }
        </section>
     );
}
 
export default Messages;