export let fp: string
export const getFp = () => fp
export const recordFingerprint = () => {
  // return Date.now().valueOf()
  if (typeof window !== 'undefined') {
		// @ts-ignore
		import('https://openfpcdn.io/fingerprintjs/v3')
			.then(FingerprintJS => FingerprintJS.load())
			.then(fp => fp.get())
      .then(result => fp = result.visitorId);
  }
}


