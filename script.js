function firstLast6(arr) {
    if (arr[0] == 6 || arr[arr.length - 1] == 6) {
        return true;
    } else {
        return false;
    }
}

function has23(arr) {
    if (arr[0] == 2 || arr[1] == 2) {
        return true;
    }
    if (arr[0] == 3 || arr[1] == 3) {
        return true;
    } else {
        return false;
    }
}

function fix23(arr) {
    if (arr[0] == 2 && arr[1] == 3) {
        arr[1] = 0;
        return arr;
    }
    if (arr[1] == 2 && arr[2] == 3) {
        arr[2] = 0;
        return arr;
    } else {
        return arr;
    }
}

function countYZ(arr){
    arr = arr.toLowerCase();
    var b = 0;
    var c = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i] == " " && arr[i-1] == "y") {
            b++;
        }
    }
    for(var i=0; i<arr.length; i++) {
        if (arr[i] == " " && arr[i-1] == "z") {
            c++;
        }
    }
    if(arr[arr.length-1] == "z"){
        c++
    }
    if(arr[arr.length-1] == "y"){
        b++
    }
    return b+c;
}

function endOther(x,y){
    x = x.toLowerCase();
    y = y.toLowerCase();
    if(x.length>=y.length) {
        if (y == x.substring(x.length - y.length, x.length)) {
            return true;
        } else {
            return false;
        }
    }
    if(y.length>x.length){
        if (x == y.substring(y.length-x.length, y.length)){
            return true;
        }else{
            return false;
        }
    }
}

function starOut(x){
    var y = "";
    for(var i=0; i<x.length; i++){
        if(!(x.substring(i-1, i) == "*" || x.substring(i+1,i+2) == "*" || x.substring(i, i+1) == "*")){
            y = y+x.substring(i,i+1);
        }
    }
    return y;
}

function getSandwich(x){
    var y = "";
    if(!(x.indexOf("bread") == x.lastIndexOf("bread"))) {
        return x.substring(x.indexOf("bread") +5, x.lastIndexOf("bread"));
    }else{
        return y;
    }
}

function canBalance(arr) {
    for (var i = 0; i < arr.length; i++) {
        var b = 0;
        var c = 0;
        for (var z = 0; z <= i; z++) {
            b+= arr[z];
        }
        for(var q = i+1; q<arr.length; q++){
            c+= arr[q];
        }
        if (b == c){
            return true;
        }
    }
    return false;
}

function countClumps(arr){
    var b = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i] == arr[i +1]){
            while(arr[i] == arr[i+1]){
                i++
            }
            b = b+1;
        }
    }
    return b;
}

function evenlySpaced(a,b,c){
    if(c-b==b-a || a-b==b-c || b-c==b-a || b-a == a-c || a-c == c-b){
        return true;
    }else{
        return false;
    }
}

function tester(){
    document.getElementById("output").innerHTML += firstLast6(arr);
    document.getElementById("output").innerHTML += has23(arr);
    document.getElementById("output").innerHTML += fix23(arr);
    document.getElementById("output").innerHTML += countYZ(arr);
    document.getElementById("output").innerHTML += endOther(x,y);
    document.getElementById("output").innerHTML += starOut(x);
    document.getElementById("output").innerHTML += getSandwich(x);
    document.getElementById("output").innerHTML += countClumps(arr);
    document.getElementById("output").innerHTML += evenlySpaced(a,b,c);
}