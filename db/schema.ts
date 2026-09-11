import { pgTable, text } from 'drizzle-orm/pg-core';

export const enquiries = pgTable('enquiries', {
	id: text('id').primaryKey(),
	name: text('name').notNull(),
	organization: text('organization').notNull().default(''),
	email: text('email').notNull(),
	phone: text('phone').notNull().default(''),
	topic: text('topic').notNull(),
	message: text('message').notNull(),
	createdAt: text('created_at').notNull(),
});
