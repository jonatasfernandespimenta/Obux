declare global {
  interface Window {
    AdminBro?: {
      [key: string]: number,
    };
  }
}

const generateId = (key: string): string => {
  const accessKey = `UNIQUE_KEY_${key}`
  window.AdminBro = window.AdminBro || {}
  window.AdminBro[accessKey] = (Number.parseInt(window.AdminBro[accessKey] as any, 10) || 0) + 1
  return [accessKey, window.AdminBro[accessKey]].join('_')
}

export default generateId
