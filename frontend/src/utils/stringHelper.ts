export const safeConcatUrl = (baseUrl: string, path: string, params?: { [key: string]: any }) => {
  try {
    const url = new URL(baseUrl)
    url.pathname = `${url.pathname.replace(/\/$/, '')}/${encodeURIComponent(path).replace(/%2F/g, '/')}`

    if (params && typeof params === 'object') {
      Object.keys(params).forEach((key) => {
        const value = params[key]
        if (value !== undefined && value !== null) {
          url.searchParams.append(encodeURIComponent(key), encodeURIComponent(value))
        }
      })
    }

    return url.toString()
  } catch (error) {
    console.error('Invalid URL:', error)
    return null
  }
}

export const getQueryParams = (url: string) => {
  try {
    const queryString = url.split('?')[1]
    if (!queryString) {
      return {}
    }

    const queryParams: Record<string, string> = {}
    const pairs = queryString.split('&')

    pairs.forEach((pair: string) => {
      const [key, value] = pair.split('=')
      if (key) {
        queryParams[decodeURIComponent(key)] = decodeURIComponent(value || '')
      }
    })

    return queryParams
  } catch (error) {
    console.error('Error parsing query parameters:', error)
    return {}
  }
}

export const handleMapOption = (enums: Record<string, string>) => {
  return Object.entries(enums).map(([key, value]) => ({
    value: key,
    label: value
  }))
}