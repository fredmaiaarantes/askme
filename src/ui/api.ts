import { createClient } from "grubba-rpc";
import type { Server } from "../api/main";

export const api = createClient<Server>();