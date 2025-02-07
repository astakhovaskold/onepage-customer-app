export type chunks = Array<unknown>;

export default class API {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    protected constructor() {}

    protected static get version() {
        return 1;
    }

    protected static get PREFIX_API() {
        return '/api';
    }

    protected static get PREFIX_VERSION() {
        return `/v${this.version}`;
    }

    protected static get api() {
        return `${this.PREFIX_API}${this.PREFIX_VERSION}`;
    }

    protected static joinChunks(...chunks: chunks): string {
        const suffix = chunks.join('/');
        return suffix.length ? `/${suffix}` : '';
    }

    // app
}
