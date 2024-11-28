//Singleton

//object  literals

const mySym=Symbol("key1")
const JsUser={
    name:"ashu",
    "full name":"ashwini daware",
    [mySym]:"myKey1",//symbol data type [ ] brackets  madhech declared  karava lagtho otherwise  tho string  dt ghetto 
    location:"sinnar",
    age:24,
    email:"ashuu@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Sunday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);//jr double quot madhe values  astil tr tya [] brackets ch access krta yeta
// console.log(JsUser["full name"]);
// console.log (JsUser[mySym]);

JsUser.email="sam@gmail.com"
//Object.freeze(JsUser)//after freeze method  we can't  modify our data
JsUser.email="tina@gmail.com"
//console.log(JsUser.email);

JsUser.greeting=function() {
    console.log("hello world ");
    
}

JsUser.greetingTwo =function() {
    console.log(`hello world ,${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

