let result = document.getElementById('screen')

numClicked=(num)=>{
    result.value += num
}

opClicked=(operator)=>{
    result.value += operator
}

clearResult=()=>{
    result.value = ""
}

calculate=()=>{
    result.value = eval(result.value)
}
