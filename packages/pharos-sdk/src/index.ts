export function initializePharos(config: { apiKey: string, baseURL: string }) {
  const baseURL = config.baseURL || 'https://your-pharos-api-url.com';

  async function getTrustScore() {
    const response = await fetch(`${baseURL}/trust-score`, {
      method: 'POST',
      body: JSON.stringify({ userAgent: navigator.userAgent }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.apiKey}`
      }
    });
    return response.json();
  }

  async function requestProof(type: 'email', payload: { email: string }) {
    const response = await fetch(`${baseURL}/request-proof`, {
      method: 'POST',
      body: JSON.stringify({ type, payload }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.apiKey}`
      }
    });
    return response.json();
  }

  return { getTrustScore, requestProof };
}
