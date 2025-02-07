import {createServer} from 'miragejs';

function bootstrap() {
    return createServer({
        routes() {
            this.passthrough();
        },
    });
}

export default bootstrap;
