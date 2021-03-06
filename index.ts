type ArraySafe<T> = {
    kind: 'success',
    value: T
}

type UnsafeArray = {
    kind: 'failure',
    reason: string
}

type Result<T> = ArraySafe<T> | UnsafeArray;


function elemAt<T>(elements: Array<T>, index: number): Result<T> {
    const length = elements.length;

    if (length === 0) {
        return { kind: "failure", reason: "array is empty" };
    }

    if (length - 1 < index || index < 0) {
        return { kind: "failure", reason: "no element at that index" };
    } 

    return { kind: "success", value: elements[index] };
}


// Test cases
console.log(elemAt([0, 0, 0], 0));
console.log(elemAt([1, 2, 3], 1));
console.log(elemAt(['a', 'b', 'c'], 2));
console.log(elemAt([], 0));
console.log(elemAt([undefined], 0));
console.log(elemAt([1, 2], 3));
console.log(elemAt([1, 2, 3], -1));



