// this action (https://svelte.dev/tutorial/actions) allows us to
// progressively enhance a <form> that already works without JS
export function enhance(
	form: HTMLFormElement,
	{
		pending,
		error,
		result
	}: {
		pending?: (data: FormData, form: HTMLFormElement) => void;
		//todo Remove the 2 | null. made compiler happy.
		error?: (res: Response | null, error: Error | null, form: HTMLFormElement) => void;
		result: (res: Response, form: HTMLFormElement) => void;
	}
) {
	let current_token: {};

	async function handle_submit(e: Event) {
		const token = (current_token = {});

		e.preventDefault();

		const body = new FormData(form);

		if (pending) pending(body, form);

		try {
			const res = await fetch(form.action, {
				method: form.method,
				headers: {
					accept: 'application/json'
				},
				body
			});

			if (token !== current_token) return;

			if (res.ok) {
				result(res, form);
			} else if (error) {
				error(res, null, form);
			} else {
				console.error(await res.text());
			}
		} catch (e) {
			if (error) {
				//todo Remove line. ade compiler happy.
				const err = (e instanceof Error)? e : null
				error(null, err, form);
			} else {
				throw e;
			}
		}
	}

	form.addEventListener('submit', handle_submit);

	return {
		destroy() {
			form.removeEventListener('submit', handle_submit);
		}
	};
}
