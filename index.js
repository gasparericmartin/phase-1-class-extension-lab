class Polygon {
    constructor(array) {
        this.sides = array
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((acc, e) => acc + e, 0)
    }

}

class Triangle extends Polygon {
    get isValid() {
        if(
            (this.sides[0] + this.sides[1]) > this.sides[2]
            && (this.sides[1] + this.sides[2]) > this.sides[0]
            && (this.sides[0] + this.sides[2]) > this.sides[1]
        )
        {
            return true
        }
        
        return false
    }
}

class Square extends Polygon {
    get isValid() {
        let holder = true
        this.sides.map(e => {
            if (this.sides[0] !== e) {
                holder = false
            }
        })
        return holder
    }

    get area() {
        return this.sides[0] * this.sides[1]
    }
}