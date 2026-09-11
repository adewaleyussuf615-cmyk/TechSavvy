import { neon } from '@netlify/neon';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from '@/db/schema';

export function getDB() {
	return drizzle({ client: neon(), schema });
}
