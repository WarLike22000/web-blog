import { getCurrentUser } from "@/actions/getCurrentUser";
import Button from "@/components/Button";
import SignOutButton from "./_Components/SignOutButton";
import Image from "next/image";
import UploadProfile from "./_Components/UploadProfile";

const Profile = async () => {

    const currentUser = await getCurrentUser();
    
    return ( 
        <div className="flex flex-col items-center w-full gap-10">
            <div className="flex sm:flex-row flex-col sm:items-center sm:justify-between w-full gap-4">
                <div className="flex items-end gap-2">
                    <section className="relative">
                        <Image
                            src={`${currentUser?.image ?? "/assets/placeholder.jpg"}`}
                            alt={`${currentUser?.name}`}
                            width={200}
                            height={200}
                            className="object-cover rounded-full"
                        />
                        <UploadProfile />
                    </section>
                    <section className="flex flex-col gap-1">
                        <h5 className="text-2xl text-gray-700">
                            {currentUser?.name}
                        </h5>
                        <p className="text-base text-gray-500">
                            {currentUser?.email}
                        </p>
                    </section>
                </div>
                <SignOutButton />
            </div>

            <div>

            </div>
        </div>
     );
}
 
export default Profile;