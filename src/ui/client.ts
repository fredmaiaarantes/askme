import { createClient } from "grubba-rpc";
import { ApiModule } from "@/api/api.module";

export const client = createClient<ApiModule>();