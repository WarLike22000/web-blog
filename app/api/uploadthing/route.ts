import { createRouteHandler } from "uploadthing/next";
import { ourFileRoute } from "./core";

export const { GET, POST } = createRouteHandler({
    router: ourFileRoute,
});