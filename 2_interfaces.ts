interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '123',
    color: '#000',
    size: {
        width: 200,
        height: 100
    }
}

const rect2: Rect = {
    id: '456',
    size: {
        width: 100,
        height: 50
    }
}

const rect3 = {} as Rect;

//======
interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '123',
    size: {
        width: 50,
        height: 20
    },
    getArea(): number {
        return this.size.height * this.size.height;
    }
}

//========
interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date();

    setTime(date: Date): void {
        this.time = date;
    }
}

//========
interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid red',
    padding: '30px',
    width: '300px',
    height: '50px'
}

console.log(css);