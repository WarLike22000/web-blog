import {
    generateUploadButton,
    generateUploadDropzone,
} from "@uploadthing/react";

import type { OurFileRoute } from "@/app/api/uploadthing/core";

export const UploadButton = generateUploadButton<OurFileRoute>();
export const UploadDropzone = generateUploadDropzone<OurFileRoute>();