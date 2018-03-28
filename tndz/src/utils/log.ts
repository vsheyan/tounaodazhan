// TypeScript file
module Log {
    export function log(message?: any, ...optionalParams: any[]):void{
        egret.log(message?message:optionalParams);
    }
    export function error(message?: any, ...optionalParams: any[]):void{
        egret.error(message?message:optionalParams);
    }
}
