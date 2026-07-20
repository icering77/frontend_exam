import type { NitroErrorHandler } from 'nitropack';

export default <NitroErrorHandler>function (error, event) {
    event.node.res.setHeader('Content-Type', 'application/json');

    const statusCode = error.statusCode || 500;
    event.node.res.statusCode = statusCode;

    const errorData = (error.data || {}) as any;
    const response = {
        code: errorData.code ?? statusCode,
        msg: errorData.msg ?? error.statusMessage ?? error.message ?? 'Internal Server Error',
    };

    event.node.res.end(JSON.stringify(response));
};
