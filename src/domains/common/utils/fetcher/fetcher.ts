export const fetcher = async (url: string, options: any) => {
  try {
    const foptions = options ?? {};
    const _options = {
      ...foptions,
      headers: {
        'content-type': 'application/json',
        'x-app-version': '1.0.0',
        'x-timestamp': String(new Date()),
        'x-channel': 'WA',
        'x-device-id': window?.navigator?.userAgent,
        'x-lat': options.lat,
        'x-long': options.long,
        Authorization: options.requestType === 'Basic' ? `Basic ${window.btoa(`${process.env.NEXT_PUBLIC_BASIC_USER}:${process.env.NEXT_PUBLIC_BASIC_PASSWORD}`)}` : '',
        ...(foptions.headers || {}),
      },
    };

    const http = await fetch(url, _options);
    const data = await http.json();
    return data;
  } catch (error) {
    console.error(error)
    return null
  }
}