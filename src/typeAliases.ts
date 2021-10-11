// Type Alias

type stringOrNum = string | number
type objWithName = {name: string, uid: string | number}

const logDetails = (uid: stringOrNum, item:string) => {
    console.log(`${item} has a id of ${uid}` );
}
