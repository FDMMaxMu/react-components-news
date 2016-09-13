/*
    Clarity ID:
    PH-
    OTHER-
    000-  -always a number
    PRG-
    
    IT number:
    IT-
    PH-
    
    Sometimes the Clarity ID is the same as IT number. 
*/
var detect = function (user_input) {
    const it_reg = /^((PH)|(IT))/i;
    const clarity_reg = /^((PH)|(OTHER)|(PRG)|(000\d{5}))/i;

    var it_reg_result = user_input.match(it_reg);
    var clarity_reg_result = user_input.match(clarity_reg);
    
    if ((it_reg_result === null) && (clarity_reg_result === null)) {
        console.log("This is actually an illegal input");
    }
    else if ((it_reg_result !== null) && (clarity_reg_result !== null)) {
        console.log("We have these results that are both it number and clarity id");
    }
    else if ((it_reg_result !== null) && (clarity_reg_result === null)) {
        console.log("We got an it number");
    }
    else if ((it_reg_result === null) && (clarity_reg_result !== null)) {
        console.log("We got a clarity id");
    }
}