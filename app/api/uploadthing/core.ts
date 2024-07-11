import { getCurrentUser } from "@/actions/getCurrentUser";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

export const ourFileRoute = {
    imageUploader: f({ image: { maxFileSize: "4MB" } })
        .middleware(async (): Promise<any> => {
            const user = await getCurrentUser();

            if(!user) throw new UploadThingError("Unauthorized");

            return user;
        })
        .onUploadComplete(async ({ metadata, file }) => {
            return file;
        })
} satisfies FileRouter;

export type OurFileRoute = typeof ourFileRoute;