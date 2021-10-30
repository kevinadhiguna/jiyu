interface ReqEvent {
    key1: string;
    key2: string;
    key3: string;
    key4: string;
}

interface Res {
    statusCode: number,
    body: string,
}

const handler = () => {
    console.log("Hello to AWS Lambda from TypeScript!");
}
