CREATE TABLE "enquiries" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"organization" text DEFAULT '' NOT NULL,
	"email" text NOT NULL,
	"phone" text DEFAULT '' NOT NULL,
	"topic" text NOT NULL,
	"message" text NOT NULL,
	"created_at" text NOT NULL
);
