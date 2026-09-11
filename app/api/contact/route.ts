import { getDB } from '@/lib/db';
import { enquiries } from '@/db/schema';
import { validateEnquiry } from '@/lib/enquiry';

export async function POST(request: Request) {
	if (
		request.headers.get('origin') &&
		request.headers.get('origin') !== new URL(request.url).origin
	) {
		return Response.json(
			{ error: 'Please send your enquiry through this website.' },
			{ status: 403 },
		);
	}
	if (!request.headers.get('content-type')?.includes('application/json')) {
		return Response.json({ error: 'Unsupported request.' }, { status: 415 });
	}
	if (Number(request.headers.get('content-length')) > 16000) {
		return Response.json({ error: 'Your message is too long.' }, { status: 413 });
	}
	let data;
	try {
		const body = await request.text();
		if (body.length > 16000) {
			return Response.json({ error: 'Your message is too long.' }, { status: 413 });
		}
		data = validateEnquiry(JSON.parse(body));
	} catch (error) {
		return Response.json(
			{ error: error instanceof Error ? error.message : 'Please check your message.' },
			{ status: 400 },
		);
	}
	if (data.website) {
		return Response.json({ error: 'Unable to accept this submission.' }, { status: 400 });
	}
	const id = crypto.randomUUID();
	try {
		await getDB().insert(enquiries).values({
			id,
			name: data.name,
			organization: data.organization,
			email: data.email,
			phone: data.phone,
			topic: data.topic,
			message: data.message,
			createdAt: new Date().toISOString(),
		});
		return Response.json({ id }, { status: 201, headers: { 'Cache-Control': 'no-store' } });
	} catch {
		return Response.json(
			{ error: 'Your message could not be saved. Please try again shortly.' },
			{ status: 503 },
		);
	}
}
