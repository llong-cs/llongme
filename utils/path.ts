export function getBasePath(): string {
    // 使用 NEXT_PUBLIC_ 前缀的环境变量，确保客户端和服务器端行为一致
    return process.env.NEXT_PUBLIC_BASE_PATH || "";
}

export function getAssetPath(path: string): string {
    return `${getBasePath()}${path}`;
}