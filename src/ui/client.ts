import { createClient } from 'meteor-rpc';
import { ApiModule } from '@/api/api.module';

export const client = createClient<ApiModule>();
