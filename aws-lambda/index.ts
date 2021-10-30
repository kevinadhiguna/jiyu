import { Context, Handler } from "aws-lambda";
import { IReqEvent } from "./IReqEvent";
import { IRes } from "./IRes";

export const handler: Handler<IReqEvent, IRes> = async (
    event: IReqEvent,
    context: Context
): Promise => {
    console.log("Hello from AWS Lambda powered by TypeScript!");
};
