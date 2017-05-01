class Main {

    public constructor() {

    }

    public sumAllElements(list: Array<number>): number {
        return list.reduce(function(curr, next) {
            return curr + next;
        }, 0);
    }

    private static testPrivateMethod(): string {
        return 'private test';
    }

    public static testInternalMethod(): string {
        return 'test';
    }

    public static testPublicMethod(): string {
        Main.testInternalMethod();
        return 'public test';
    }

    public static testPublicMethodWithoutInternalCall(): string {
        return 'public test';
    }

    public static getPromiseForTest(): Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([1,2,3]);
            }, 1000);
        });
    }

    public static getAnObjectByPromise(): Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    firstname: 'Tony',
                    lastname: 'Stark'
                });
            }, 1000);
        });
    }

    public static getRejectedPromise(): Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error('Error on promise!'));
            }, 1000);
        });
    }

}

export default Main;