import { WriteStream } from "fs";
export default async function(width: number, height: number, downloadPath: string): Promise<WriteStream>