var type1 = document.getElementById("type1")
var type2 = document.getElementById("type2")


let None = {
    name: "(None)",
    0: 1,
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 1,
    6: 1,
    7: 1,
    8: 1,
    9: 1,
    10: 1,
    11: 1,
    12: 1,
    13: 1,
    14: 1,
    15: 1,
    16: 1,
    17: 1,
}



let Bug = {
    name: "Bug",
    0: 1,
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 0.5,
    6: 2,
    7: 2,
    8: 1,
    9: 0.5,
    10: 0.5,
    11: 1,
    12: 1,
    13: 1,
    14: 1,
    15: 2,
    16: 1,
    17: 1 
}

let Dark = {
    name: "Dark",
    0: 2,
    1: 0.5,
    2: 1,
    3: 1,
    4: 2,
    5: 2,
    6: 1,
    7: 1,
    8: 0.5,
    9: 1,
    10: 1,
    11: 1,
    12: 1,
    13: 1,
    14: 0,
    15: 1,
    16: 1,
    17: 1 
}

let Dragon = {
    name: "Dragon",
    0: 1,
    1: 1,
    2: 2,
    3: 0.5,
    4: 2,
    5: 1,
    6: 0.5,
    7: 1,
    8: 1,
    9: 0.5,
    10: 1,
    11: 2,
    12: 1,
    13: 1,
    14: 1,
    15: 1,
    16: 1,
    17: 0.5 
}

let Electric = {
    name: "Electric",
    0: 1,
    1: 1,
    2: 1,
    3: 0.5,
    4: 1,
    5: 1,
    6: 1,
    7: 0.5,
    8: 1,
    9: 1,
    10: 2,
    11: 1,
    12: 1,
    13: 1,
    14: 1,
    15: 1,
    16: 0.5,
    17: 1 
}

let Fairy = {
    name: "Fairy",
    0: 0.5,
    1: 0.5,
    2: 0,
    3: 1,
    4: 1,
    5: 0.5,
    6: 1,
    7: 1,
    8: 1,
    9: 1,
    10: 1,
    11: 1,
    12: 1,
    13: 2,
    14: 1,
    15: 1,
    16: 2,
    17: 1 
}

let Fight = {
    name: "Fight",
    0: 0.5,
    1: 0.5,
    2: 1,
    3: 1,
    4: 2,
    5: 1,
    6: 1,
    7: 2,
    8: 1,
    9: 1,
    10: 1,
    11: 1,
    12: 1,
    13: 1,
    14: 2,
    15: 0.5,
    16: 1,
    17: 1 
}

let Fire = {
    name: "Fire",
    0: 0.5,
    1: 1,
    2: 1,
    3: 1,
    4: 0.5,
    5: 1,
    6: 0.5,
    7: 1,
    8: 1,
    9: 0.5,
    10: 2,
    11: 0.5,
    12: 1,
    13: 1,
    14: 1,
    15: 2,
    16: 0.5,
    17: 2 
}

let Flying = {
    name: "Flying",
    0: 0.5,
    1: 1,
    2: 1,
    3: 2,
    4: 1,
    5: 0.5,
    6: 1,
    7: 1,
    8: 1,
    9: 0.5,
    10: 0,
    11: 2,
    12: 1,
    13: 1,
    14: 1,
    15: 2,
    16: 1,
    17: 1 
}

let Ghost = {
    name: "Ghost",
    0: 0.5,
    1: 2,
    2: 1,
    3: 1,
    4: 1,
    5: 0,
    6: 1,
    7: 1,
    8: 2,
    9: 1,
    10: 1,
    11: 1,
    12: 0,
    13: 0.5,
    14: 1,
    15: 1,
    16: 1,
    17: 1 
}

let Grass = {
    name: "Grass",
    0: 2,
    1: 1,
    2: 1,
    3: 0.5,
    4: 1,
    5: 1,
    6: 2,
    7: 2,
    8: 1,
    9: 0.5,
    10: 0.5,
    11: 2,
    12: 1,
    13: 2,
    14: 1,
    15: 1,
    16: 1,
    17: 0.5 
}

let Ground = {
    name: "Ground",
    0: 1,
    1: 1,
    2: 1,
    3: 0,
    4: 1,
    5: 1,
    6: 1,
    7: 1,
    8: 1,
    9: 2,
    10: 1,
    11: 2,
    12: 1,
    13: 0.5,
    14: 1,
    15: 0.5,
    16: 1,
    17: 2
}

let Ice = {
    name: "Ice",
    0: 1,
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 2,
    6: 2,
    7: 1,
    8: 1,
    9: 1,
    10: 1,
    11: 0.5,
    12: 1,
    13: 1,
    14: 1,
    15: 2,
    16: 2,
    17: 1 
}

let Normal = {
    name: "Normal",
    0: 1,
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 2,
    6: 1,
    7: 1,
    8: 0,
    9: 1,
    10: 1,
    11: 1,
    12: 1,
    13: 1,
    14: 1,
    15: 1,
    16: 1,
    17: 1 
}

let Poison = {
    name: "Poison",
    0: 0.5,
    1: 1,
    2: 1,
    3: 1,
    4: 0.5,
    5: 0.5,
    6: 1,
    7: 1,
    8: 1,
    9: 0.5,
    10: 2,
    11: 1,
    12: 1,
    13: 0.5,
    14: 2,
    15: 1,
    16: 1,
    17: 1 
}

let Psychic = {
    name: "Psychic",
    0: 2,
    1: 2,
    2: 1,
    3: 1,
    4: 1,
    5: 0.5,
    6: 1,
    7: 1,
    8: 2,
    9: 1,
    10: 1,
    11: 1,
    12: 1,
    13: 1,
    14: 0.5,
    15: 1,
    16: 1,
    17: 1 
}

let Rock = {
    name: "Rock",
    0: 1,
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 2,
    6: 0.5,
    7: 0.5,
    8: 1,
    9: 2,
    10: 2,
    11: 1,
    12: 0.5,
    13: 0.5,
    14: 1,
    15: 1,
    16: 2,
    17: 2 
}

let Steel = {
    name: "Steel",
    0: 0.5,
    1: 1,
    2: 0.5,
    3: 1,
    4: 0.5,
    5: 2,
    6: 2,
    7: 0.5,
    8: 1,
    9: 0.5,
    10: 2,
    11: 0.5,
    12: 0.5,
    13: 0,
    14: 0.5,
    15: 0.5,
    16: 0.5,
    17: 1 
}

let Water = {
    name: "Water",
    0: 1,
    1: 1,
    2: 1,
    3: 2,
    4: 1,
    5: 1,
    6: 0.5,
    7: 1,
    8: 1,
    9: 2,
    10: 1,
    11: 0.5,
    12: 1,
    13: 1,
    14: 1,
    15: 1,
    16: 0.5,
    17: 0.5 
}



let TypeList = [None, Bug, Dark, Dragon, Electric, Fairy, Fight, Fire, Flying, Ghost, Grass, Ground, Ice, Normal, Poison, Psychic, Rock, Steel, Water]

let TypeNames = ["None", "Bug", "Dark", "Dragon", "Electric", "Fairy", "Fight", "Fire", "Flying", "Ghost", "Grass", "Ground", "Ice", "Normal", "Poison", "Psychic", "Rock", "Steel", "Water"]







function loadStats() {

    let type1op = type1.options[type1.selectedIndex].text
    let type2op = type2.options[type2.selectedIndex].text

    let newStats = {
        name: "(None)",
        0: 1,
        1: 1,
        2: 1,
        3: 1,
        4: 1,
        5: 1,
        6: 1,
        7: 1,
        8: 1,
        9: 1,
        10: 1,
        11: 1,
        12: 1,
        13: 1,
        14: 1,
        15: 1,
        16: 1,
        17: 1,
    }
    let typeA = {
        name: "(None)",
        0: 1,
        1: 1,
        2: 1,
        3: 1,
        4: 1,
        5: 1,
        6: 1,
        7: 1,
        8: 1,
        9: 1,
        10: 1,
        11: 1,
        12: 1,
        13: 1,
        14: 1,
        15: 1,
        16: 1,
        17: 1,
    }
    let typeB = {
        name: "(None)",
        0: 1,
        1: 1,
        2: 1,
        3: 1,
        4: 1,
        5: 1,
        6: 1,
        7: 1,
        8: 1,
        9: 1,
        10: 1,
        11: 1,
        12: 1,
        13: 1,
        14: 1,
        15: 1,
        16: 1,
        17: 1,
    }

    for(i = 0; i < TypeList.length; i++) {
        if(type1op == TypeList[i].name) {
            typeA = TypeList[i]
        }
        if(type2op == TypeList[i].name) {
            typeB = TypeList[i]
        }

    }

    for(i = 0; i < TypeList.length; i++) {
        newStats[i] = newStats[i] * typeA[i]

        if(typeB.name != "(None)") {
            newStats[i] = newStats[i] * typeB[i]
        }

    }

    for(i = 0; i < TypeList.length-1; i++) {
        document.getElementById(TypeNames[i+1]+"stat").innerHTML = newStats[i]
    }

    
    findMove(newStats)

    colorful(newStats)
}

loadStats()


function colorful(currentStats) {

    let type1op = type1.options[type1.selectedIndex].text
    let type2op = type2.options[type2.selectedIndex].text

    let ops = [type1op, type2op]
    let boxes = [type1, type2]


    for(i = 0; i < TypeList.length-1; i++) {
        if(document.getElementById(TypeNames[i+1]+"stat").innerHTML == 0.25) {
            document.getElementById(TypeNames[i+1]+"stat").style.backgroundColor = '#991200'
        }
        if(document.getElementById(TypeNames[i+1]+"stat").innerHTML == 0.5) {
            document.getElementById(TypeNames[i+1]+"stat").style.backgroundColor = '#C87800'
        }
        if(document.getElementById(TypeNames[i+1]+"stat").innerHTML == 2) {
            document.getElementById(TypeNames[i+1]+"stat").style.backgroundColor = '#4BAB0F'
        }
        if(document.getElementById(TypeNames[i+1]+"stat").innerHTML == 4) {
            document.getElementById(TypeNames[i+1]+"stat").style.backgroundColor = '#318100'
        }
        if(document.getElementById(TypeNames[i+1]+"stat").innerHTML == 0) {
            document.getElementById(TypeNames[i+1]+"stat").style.backgroundColor = '#000000'
        }
        if(document.getElementById(TypeNames[i+1]+"stat").innerHTML == 1) {
            document.getElementById(TypeNames[i+1]+"stat").style.backgroundColor = '#ffffff00'
        }

    }

    for(i = 0; i < ops.length; i++) {

        if(ops[i] == "Bug") {
            boxes[i].style.backgroundColor = '#6BA500'
            boxes[i].style.borderColor = '#6BA500'
        }
        if(ops[i] == "Dark") {
            boxes[i].style.backgroundColor = '#36303d'
            boxes[i].style.borderColor = '#36303d'
        }
        if(ops[i] == "Dragon") {
            boxes[i].style.backgroundColor = '#141483'
            boxes[i].style.borderColor = '#141483'
        }
        if(ops[i] == "Electric") {
            boxes[i].style.backgroundColor = '#958505'
            boxes[i].style.borderColor = '#958505'
        }
        if(ops[i] == "Fairy") {
            boxes[i].style.backgroundColor = '#d33dd3'
            boxes[i].style.borderColor = '#d33dd3'
        }
        if(ops[i] == "Fight") {
            boxes[i].style.backgroundColor = '#770e0e'
            boxes[i].style.borderColor = '#770e0e'
        }
        if(ops[i] == "Fire") {
            boxes[i].style.backgroundColor = '#9e5008'
            boxes[i].style.borderColor = '#9e5008'
        }
        if(ops[i] == "Flying") {
            boxes[i].style.backgroundColor = '#416bad'
            boxes[i].style.borderColor = '#416bad'
        }
        if(ops[i] == "Ghost") {
            boxes[i].style.backgroundColor = '#352758'
            boxes[i].style.borderColor = '#352758'
        }
        if(ops[i] == "Grass") {
            boxes[i].style.backgroundColor = '#098820'
            boxes[i].style.borderColor = '#098820'
        }
        if(ops[i] == "Ground") {
            boxes[i].style.backgroundColor = '#794d18'
            boxes[i].style.borderColor = '#794d18'
        }
        if(ops[i] == "Ice") {
            boxes[i].style.backgroundColor = '#149daf'
            boxes[i].style.borderColor = '#149daf'
        }
        if(ops[i] == "Normal") {
            boxes[i].style.backgroundColor = '#88775b'
            boxes[i].style.borderColor = '#88775b'
        }
        if(ops[i] == "Poison") {
            boxes[i].style.backgroundColor = '#550c68'
            boxes[i].style.borderColor = '#550c68'
        }
        if(ops[i] == "Psychic") {
            boxes[i].style.backgroundColor = '#8b0d7d'
            boxes[i].style.borderColor = '#8b0d7d'
        }
        if(ops[i] == "Rock") {
            boxes[i].style.backgroundColor = '#62400C'
            boxes[i].style.borderColor = '#62400C'
        }
        if(ops[i] == "Steel") {
            boxes[i].style.backgroundColor = '#6A7276'
            boxes[i].style.borderColor = '#6A7276'
        }
        if(ops[i] == "Water") {
            boxes[i].style.backgroundColor = '#12367e'
            boxes[i].style.borderColor = '#12367e'
        }
        if(ops[i] == "(None)") {
            boxes[i].style.backgroundColor = '#12367e40'
            boxes[i].style.borderColor = '#12367e40'
        }

    }

    for(i = 1; i < 9; i++) {

        for(o = 1; o < 7; o++) {

            let main = document.getElementById("move"+i)
            let sub = document.getElementById("move"+i+"sub"+o)

            let array = [main, sub]

            for(f = 0; f < array.length; f++) {

                if(array[f].innerHTML == "Bug") {
                    array[f].style.backgroundColor = '#6BA500'
                    array[f].style.borderColor = '#6BA500'
                }
                else if(array[f].innerHTML == "Dark") {
                    array[f].style.backgroundColor = '#36303d'
                    array[f].style.borderColor = '#36303d'
                }
                else if(array[f].innerHTML == "Dragon") {
                    array[f].style.backgroundColor = '#141483'
                    array[f].style.borderColor = '#141483'
                }
                else if(array[f].innerHTML == "Electric") {
                    array[f].style.backgroundColor = '#958505'
                    array[f].style.borderColor = '#958505'
                }
                else if(array[f].innerHTML == "Fairy") {
                    array[f].style.backgroundColor = '#d33dd3'
                    array[f].style.borderColor = '#d33dd3'
                }
                else if(array[f].innerHTML == "Fight") {
                    array[f].style.backgroundColor = '#770e0e'
                    array[f].style.borderColor = '#770e0e'
                }
                else if(array[f].innerHTML == "Fire") {
                    array[f].style.backgroundColor = '#9e5008'
                    array[f].style.borderColor = '#9e5008'
                }
                else if(array[f].innerHTML == "Flying") {
                    array[f].style.backgroundColor = '#416bad'
                    array[f].style.borderColor = '#416bad'
                }
                else if(array[f].innerHTML == "Ghost") {
                    array[f].style.backgroundColor = '#352758'
                    array[f].style.borderColor = '#352758'
                }
                else if(array[f].innerHTML == "Grass") {
                    array[f].style.backgroundColor = '#098820'
                    array[f].style.borderColor = '#098820'
                }
                else if(array[f].innerHTML == "Ground") {
                    array[f].style.backgroundColor = '#794d18'
                    array[f].style.borderColor = '#794d18'
                }
                else if(array[f].innerHTML == "Ice") {
                    array[f].style.backgroundColor = '#149daf'
                    array[f].style.borderColor = '#149daf'
                }
                else if(array[f].innerHTML == "Normal") {
                    array[f].style.backgroundColor = '#88775b'
                    array[f].style.borderColor = '#88775b'
                }
                else if(array[f].innerHTML == "Poison") {
                    array[f].style.backgroundColor = '#550c68'
                    array[f].style.borderColor = '#550c68'
                }
                else if(array[f].innerHTML == "Psychic") {
                    array[f].style.backgroundColor = '#8b0d7d'
                    array[f].style.borderColor = '#8b0d7d'
                }
                else if(array[f].innerHTML == "Rock") {
                    array[f].style.backgroundColor = '#62400C'
                    array[f].style.borderColor = '#62400C'
                }
                else if(array[f].innerHTML == "Steel") {
                    array[f].style.backgroundColor = '#6A7276'
                    array[f].style.borderColor = '#6A7276'
                }
                else if(array[f].innerHTML == "Water") {
                    array[f].style.backgroundColor = '#12367e'
                    array[f].style.borderColor = '#12367e'
                }
                else {
                    array[f].style.backgroundColor = '#6BA50000'
                    array[f].style.borderColor = '#6BA50000'
                }

            }

        }

    }

    
    



    

}

function findMove(currentStats) {

    let type1op = type1.options[type1.selectedIndex].text
    let type2op = type2.options[type2.selectedIndex].text

    //console.log("I am ", type1op, type2op)

    let weak = []
    let recMoves = []

    let strongRec = false

    //reset
    for(i = 1; i < 9; i++) {

        for(o = 1; o < 7; o++) {

            let main = document.getElementById("move"+i)
            let sub = document.getElementById("move"+i+"sub"+o)

            let array = [main, sub]

            for(f = 0; f < array.length; f++) {
                array[f].innerHTML = ""
            }
        }
    }

    

    //identify weaknesses
    for(i = 0; i < 19; i++) {
        if(currentStats[i] == 2) {
            weak.push(TypeList[i+1].name) 
        }
    }
    //identify weaknesses weakness lol
    for(i = 0; i < weak.length; i++) {
        for(o = 1; o < TypeList.length; o++) {  
            if(TypeList[o].name == weak[i]) {
                for(z = 0; z < 19; z++) {
                    if(TypeList[o][z] == 2) {
                        recMoves.push(TypeList[z+1].name)
                    }
                }
            }
        }  
    }


    




    //count it
    let counts = {};
    let shortRec = recMoves.reduce(function(a,b){if (a.indexOf(b) < 0 ) a.push(b);return a;},[]);
    recMoves.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });


    let t = 1
    let g = 1
    let k = 1

    t = 1
    g = 1
    k = 1

    //update info
    for(o = 1; o < TypeList.length; o++) { 
        for(i = 0; i < shortRec.length; i++) {
            if(TypeList[o].name == shortRec[i]) {
                if(counts[TypeList[o].name] >= 2) {
            
                    document.getElementById("move"+(t)).innerHTML = TypeList[o].name

                    for(blue = 0; blue < weak.length; blue++) {

                        for(green = 0; green < TypeList.length; green++) {
               
                            if(weak[blue] == TypeList[green].name) {
        
                                for(y = 0; y < 19; y++) {

                                    if(TypeList[green][y] == 2) {
                                        if(TypeList[y+1].name == TypeList[o].name) {
                                            document.getElementById("move"+t+"sub"+k).innerHTML
                                            = weak[blue]
                                            k++
                                        }
                                    }
                                }
                            }
                        }
                    }

                    

                    t++ 
                    k=1
                    
                    counts[TypeList[o].name] = 0
                    strongRec = true  
                }
            } 
        }
    }
    for(o = 1; o < TypeList.length; o++) {
        for(i = 0; i < shortRec.length; i++) {
            if(TypeList[o].name == shortRec[i]) {
                if(strongRec == false) {
//                     document.getElementById("recStren").innerHTML = "*only slightly recommended"
                    document.getElementById("move"+(g)).innerHTML = TypeList[o].name

                    //i am electric

                    const Grass = TypeList[o].name
                    

                    for(w = 0; w < weak.length; w++) {

                        const Ground = weak[w]

                        for(green = 0; green < TypeList.length; green++) {

                            const getGroundStat = TypeList[green]

                            if(Ground == getGroundStat.name) {
                                //console.log("Found weakness, ", Ground, ", stats")
                                for(y = 0; y < 19; y++) {

                                    const weakIndex = y

                                    if(getGroundStat[weakIndex] == 2) {

                                        //console.log(Ground," is weak to ", TypeList[weakIndex+1].name)

                                        if(TypeList[weakIndex+1].name == Grass) {
                                            console.log("adding ", Ground, " to ", ("move"+t+"sub"+k))
                                            document.getElementById("move"+g+"sub"+k).
                                            innerHTML = Ground
                                            k++
                                        }
                                    }
                                }
                            }
                        }
                    }

                    g++ 
                    k=1
                }
            } 
        }
    }

    console.log("strongRec", strongRec)
    

    console.log("weak = ",weak)
    console.log("shortRec = ",shortRec)

}





