class Main {

    public constructor() {

    }

    public sumAllElements(list: Array<number>): number {
        return list.reduce(function(curr, next) {
            return curr + next;
        }, 0);
    }

}

export default Main;