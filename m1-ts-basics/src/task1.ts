
    // ======================= starts =====================

function repeatString (str:string, length:number) : string{
  
    let result = ''
    for (let i = 0; i <length; i++) {
         result = result + str
    }
    return result

    // return str.repeat(length)
    // return Array(length).fill(str).join("")
}

 const result = repeatString("mehedi", 5)
 console.log(result);

    
// ======================= ends =====================
