var TelegramBot = require('node-telegram-bot-api'); //se invoca la libreria de none-telegram-bot-api


var monitor = {name:"monitor", code: 16, ID: 717550092, city: "cali", age: 19, category: "cita", numberPhone: 321457889,  chatOnline: false};
var girl11 = {name:"Jeka", code: 11, ID: 1250187130, city: "cali", age: 28, category: "amistad", numberPhone: 3212215487,  chatOnline: false};
var girl12 = {name:"maryu", code: 12, ID: 1204215559, city: "cali", age: 22, category: "cita", numberPhone: 3155584525,  chatOnline: false};
var girl13 = {name:"luisa", code: 13, ID: 1115398938, city: "cali", age: 18, category: "amistad", numberPhone: 3187895847,  chatOnline: false};
var girl14 = {name:"nayi", code: 14, ID: 1135835787, city: "cali", age: 30, category: "amistad", numberPhone: 3217896587,  chatOnline: false};
var girl15 = {name:"La Gata", code: 15, ID: 933443152, city: "cali", age: 18, category: "cita", numberPhone: 3202235689,  chatOnline: false};

var chatMonitor = {name:"Chat Room 2", token: '1274008775:AAFeXXPT9b2tK_V77dElNmZ0ErG74oK9aaw', used: true, userOk: false, girlOK: false, link: "t.me/user_bog_bot"}; //monitor


var room1 = {name:"Chat Room 1", token: '1214211400:AAEpxCew-CPwZotWVIrtOAVgGK731UNhUlA', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_1_bot"};
var room2 = {name:"Chat Room 2", token: '838906383:AAGAyVvkVQL1bKkw4DZ9K5KQ08HY_pkILvM',  used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_2_bot"};
var room3 = {name:"Chat Room 3", token: '1223414025:AAGxl_XNZOA0IVl4ZEkWvCpoIL-A2e9MwzM', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/romm_3_bot"};
var room4 = {name:"Chat Room 4", token: '1234970132:AAGRdMLWE9R7_9Ovjwi0ZfcKTnTURTn5mgQ', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_4_bot"};
var room5 = {name:"Chat Room 5", token: '1198020310:AAF_YUAQTIBCGHcK8MPUAA_FupGUim-EpKc', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_5_bot"};
var room6 = {name:"Chat Room 6", token: '1170692133:AAGUVL7iyrcG6Xo4SnWfAEJslS_cF_InWI4', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_6_bot"};
var room7 = {name:"Chat Room 7", token: '1182303392:AAEaegNRGhPYetdS47HKX4u8SRIrq15a1sY', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/room_7_bot"};
var room8 = {name:"Chat Room 8", token: '1266204356:AAEMD4OCm9n75dYjNEqsbLSse61eys6ECCs', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/user_cali_bot"};
var room9 = {name:"Chat Room 9", token: '1054009828:AAFNXsqZ8eCHq4_nssTWfi8vGz-nZYMoaBc', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/UserCali_bot"};
var room10 = {name:"Chat Room 10", token: '1071043028:AAE82MBopRIrsVnRvij9J3YG-Cd_Mn98V8c', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/ChicaCali_bot"};
var room11 = {name:"Chat Room 11", token: '1103870332:AAHMLWODcJ2G9g4emsAJpNArieFGhUp5PCc', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/Chica_1_bot"};
var room12 = {name:"Chat Room 12", token: '1132983720:AAEjkuSy6Zgh7upIGaOJS6fy2MnY5ageMs0', used: false, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: "t.me/roomss_5_bot"};

// var room8 = {name:"Chat Room 3", token: '', used: true, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: ""};
// var room9 = {name:"Chat Room 3", token: '', used: true, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: ""};
// var room10 = {name:"Chat Room 3", token: '', used: true, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: ""};
// var room11 = {name:"Chat Room 3", token: '', used: true, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: ""};
// var room12 = {name:"Chat Room 3", token: '', used: true, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: ""};
// var room13 = {name:"Chat Room 3", token: '', used: true, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: ""};
// var room14 = {name:"Chat Room 3", token: '', used: true, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: ""};
// var room15 = {name:"Chat Room 3", token: '', used: true, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: ""};
// var room16 = {name:"Chat Room 3", token: '', used: true, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: ""};
// var room17 = {name:"Chat Room 3", token: '', used: true, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: ""};
// var room18 = {name:"Chat Room 3", token: '', used: true, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: ""};
// var room19 = {name:"Chat Room 3", token: '', used: true, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: ""};
// var room20 = {name:"Chat Room 3", token: '', used: true, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: ""};
// var room21 = {name:"Chat Room 3", token: '', used: true, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: ""};
// var room22 = {name:"Chat Room 3", token: '', used: true, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: ""};
// var room23 = {name:"Chat Room 3", token: '', used: true, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: ""};
// var room24 = {name:"Chat Room 3", token: '', used: true, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: ""};
// var room25 = {name:"Chat Room 3", token: '', used: true, userOk: false, girlOK: false, user: 0, girl: 0, userName: '', girlName:'', link: ""};


var rooms = [room1, room2, room3, room4, room5, room6, room7, room8, room9, room10, room11, room12];
var girls = [girl11, girl12, girl13, girl14, girl15];

//var userBaned = [ {name: 'david', id: 1115689097} ]; // in this array push the user baned for used no accept words
var userBaned = []; // in this array push the user baned for used no accept words

var users = [
    {name: 'david', id: 851567315}, 
    {name: 'alejandro', id: 921828190}
    ]; // in this array push the each user into the principal bot chat 1115689097 vicky

var keywords = ["email", "gmail", "hotmail","yahoo", "outlook", "msn", "google", "instagram", "whatsapp","mail","snapchat","tik", "tok","tango","facebook","face","book","http","@","arroba",".com",".co",".net",".org","www","telegram", "numero","celular","celu","300","301","302","303","304","305","306","307","308","310","311","312","313","314","315","316","317","318","319","320","321","322","323","carrera","cra","calle","cll","ave","avenida","autopista","buscame","llamame","#","movistar","tres"];

var tokenPrincipal = '1145096687:AAFVKlN7KkpQCmdjjWLOiuZEVVLGHQwzbWg'; //  t.me/cali_girls_bot  bot principal
var tokenMonitor = chatMonitor.token;
var userMonitor =  monitor.ID;
var idBot0 = "";


var botMonitor = new TelegramBot(tokenMonitor, {polling:true}); 
var botPrincipal = new TelegramBot(tokenPrincipal, {polling:true}); 

var botRoom1 = new TelegramBot(room1.token, {polling:true}); 
var botRoom2 = new TelegramBot(room2.token, {polling:true}); 
var botRoom3 = new TelegramBot(room3.token, {polling:true}); 
var botRoom4 = new TelegramBot(room4.token, {polling:true}); 
var botRoom5 = new TelegramBot(room5.token, {polling:true}); 
var botRoom6 = new TelegramBot(room6.token, {polling:true}); 
var botRoom7 = new TelegramBot(room7.token, {polling:true}); 
var botRoom8 = new TelegramBot(room8.token, {polling:true}); 
var botRoom9 = new TelegramBot(room9.token, {polling:true}); 
var botRoom10 = new TelegramBot(room10.token, {polling:true}); 
var botRoom11 = new TelegramBot(room11.token, {polling:true}); 
var botRoom12 = new TelegramBot(room12.token, {polling:true}); 

var textNoAccept = "Estas usando palabras NO ACEPTADAS, Sí persiste tu cuenta sera cancelada!";
var textNoAcceptToUser = " esta tratando de escribirte texto no aceptado";
var textNoAcceptToGirl = " esta tratando de escribirte texto no aceptado";
/* 
function sendMessageRoom(msgText,roomSelect,userChat,girlChat,typeAnswer,nameUser,nameGirl)
this function let send message between user and girl inside to Room selected, also send error message for No accept words
the parameters are: msgText= message to send, roomSelect= choice tehe room to send message, userChat & girlChat are the code id for each one, 
typeAnswer is the type of answer do you need who send  "textNoAcceptUser", "textNoAcceptGirl", "toUser", "toGirl"
nameUser and nameGirl are the first name get in from telegram chat register who write.
Also send all message to userMonitor indicate who write.
*/
function sendMessageRoom(msgText,roomSelect,userChat,girlChat,typeAnswer,nameUser,nameGirl) {

console.log(typeAnswer);

    switch (roomSelect) {
            case 1:

                console.log(msgText); console.log(roomSelect); console.log(userChat); console.log(girlChat); console.log(typeAnswer); console.log(nameUser); console.log(nameGirl);
                if (typeAnswer=='textNoAcceptUser') {            
                    botRoom1.sendMessage(userChat,nameUser+textNoAccept);
                    botRoom1.sendMessage(girlChat,nameUser+textNoAcceptToUser);
                    botMonitor.sendMessage(monitor.ID, 'room 1: '+ nameUser+' intenta enviar texto no aceptado: "'+msgText+'"');
                } else if(typeAnswer=='textNoAcceptGirl') {
                    botRoom1.sendMessage(girlChat,nameGirl+textNoAccept);
                    botRoom1.sendMessage(userChat,nameGirl+textNoAcceptToGirl);
                    botMonitor.sendMessage(monitor.ID, 'room 1: '+nameGirl+' intenta enviar texto no aceptado: "'+msgText+'"');        
                } else if (typeAnswer=='toUser') {
                    botRoom1.sendMessage(userChat,nameGirl+' dice: '+msgText);
                    botMonitor.sendMessage(monitor.ID, 'room 1: '+ nameGirl+' dice a '+nameUser+': '+msgText);
                } else if (typeAnswer=='toGirl') {
                    botRoom1.sendMessage(girlChat,nameUser+' dice: '+msgText);  
                    botMonitor.sendMessage(monitor.ID, 'room 1: '+nameUser+' dice a '+nameGirl+': '+msgText);
                }
                
            
            
            break;
            case 2:
                console.log(msgText); console.log(roomSelect); console.log(userChat); console.log(girlChat); console.log(typeAnswer); console.log(nameUser); console.log(nameGirl);
                if (typeAnswer=='textNoAcceptUser') {            
                    botRoom2.sendMessage(userChat,nameUser+textNoAccept);
                    botRoom2.sendMessage(girlChat,nameUser+textNoAcceptToUser);
                    botMonitor.sendMessage(monitor.ID, 'room 2: '+nameUser+' intenta enviar texto no aceptado: "'+msgText+'"');
                } else if(typeAnswer=='textNoAcceptGirl') {
                    botRoom2.sendMessage(girlChat,nameGirl+textNoAccept);
                    botRoom2.sendMessage(userChat,nameGirl+textNoAcceptToGirl);
                    botMonitor.sendMessage(monitor.ID, 'room 2: '+nameGirl+' intenta enviar texto no aceptado: "'+msgText+'"');        
                } else if (typeAnswer=='toUser') {
                    botRoom2.sendMessage(userChat,nameGirl+' dice: '+msgText);
                    botMonitor.sendMessage(monitor.ID, 'room 2: '+nameGirl+' dice a '+nameUser+': '+msgText);
                } else if (typeAnswer=='toGirl') {
                    botRoom2.sendMessage(girlChat,nameUser+' dice: '+msgText);  
                    botMonitor.sendMessage(monitor.ID, 'room 2: '+nameUser+' dice a '+nameGirl+': '+msgText);
                }
            break;
            case 3:
                console.log(msgText); console.log(roomSelect); console.log(userChat); console.log(girlChat); console.log(typeAnswer); console.log(nameUser); console.log(nameGirl);
                if (typeAnswer=='textNoAcceptUser') {            
                    botRoom3.sendMessage(userChat,nameUser+textNoAccept);
                    botRoom3.sendMessage(girlChat,nameUser+textNoAcceptToUser);
                    botMonitor.sendMessage(monitor.ID, 'room 3: '+nameUser+' intenta enviar texto no aceptado: "'+msgText+'"');
                } else if(typeAnswer=='textNoAcceptGirl') {
                    botRoom3.sendMessage(girlChat,nameGirl+textNoAccept);
                    botRoom3.sendMessage(userChat,nameGirl+textNoAcceptToGirl);
                    botMonitor.sendMessage(monitor.ID, 'room 3: '+nameGirl+' intenta enviar texto no aceptado: "'+msgText+'"');        
                } else if (typeAnswer=='toUser') {
                    botRoom3.sendMessage(userChat,nameGirl+' dice: '+msgText);
                    botMonitor.sendMessage(monitor.ID, 'room 3: '+nameGirl+' dice a '+nameUser+': '+msgText);
                } else if (typeAnswer=='toGirl') {
                    botRoom3.sendMessage(girlChat,nameUser+' dice: '+msgText);  
                    botMonitor.sendMessage(monitor.ID, 'room 3: '+nameUser+' dice a '+nameGirl+': '+msgText);
                }
            break;
            case 4:
                console.log(msgText); console.log(roomSelect); console.log(userChat); console.log(girlChat); console.log(typeAnswer); console.log(nameUser); console.log(nameGirl);
                if (typeAnswer=='textNoAcceptUser') {            
                    botRoom4.sendMessage(userChat,nameUser+textNoAccept);
                    botRoom4.sendMessage(girlChat,nameUser+textNoAcceptToUser);
                    botMonitor.sendMessage(monitor.ID, 'room 4: '+nameUser+' intenta enviar texto no aceptado: "'+msgText+'"');
                } else if(typeAnswer=='textNoAcceptGirl') {
                    botRoom4.sendMessage(girlChat,nameGirl+textNoAccept);
                    botRoom4.sendMessage(userChat,nameGirl+textNoAcceptToGirl);
                    botMonitor.sendMessage(monitor.ID, 'room 4: '+nameGirl+' intenta enviar texto no aceptado: "'+msgText+'"');        
                } else if (typeAnswer=='toUser') {
                    botRoom4.sendMessage(userChat,nameGirl+' dice: '+msgText);
                    botMonitor.sendMessage(monitor.ID, 'room 4: '+nameGirl+' dice a '+nameUser+': '+msgText);
                } else if (typeAnswer=='toGirl') {
                    botRoom4.sendMessage(girlChat,nameUser+' dice: '+msgText);  
                    botMonitor.sendMessage(monitor.ID, 'room 4: '+nameUser+' dice a '+nameGirl+': '+msgText);
                }
            break;

            case 5:
                console.log(msgText); console.log(roomSelect); console.log(userChat); console.log(girlChat); console.log(typeAnswer); console.log(nameUser); console.log(nameGirl);
                if (typeAnswer=='textNoAcceptUser') {            
                    botRoom5.sendMessage(userChat,nameUser+textNoAccept);
                    botRoom5.sendMessage(girlChat,nameUser+textNoAcceptToUser);
                    botMonitor.sendMessage(monitor.ID, 'room 5: '+ nameUser+' intenta enviar texto no aceptado: "'+msgText+'"');
                } else if(typeAnswer=='textNoAcceptGirl') {
                    botRoom5.sendMessage(girlChat,nameGirl+textNoAccept);
                    botRoom5.sendMessage(userChat,nameGirl+textNoAcceptToGirl);
                    botMonitor.sendMessage(monitor.ID, 'room 5: '+nameGirl+' intenta enviar texto no aceptado: "'+msgText+'"');        
                } else if (typeAnswer=='toUser') {
                    botRoom5.sendMessage(userChat,nameGirl+' dice: '+msgText);
                    botMonitor.sendMessage(monitor.ID, 'room 5: '+ nameGirl+' dice a '+nameUser+': '+msgText);
                } else if (typeAnswer=='toGirl') {
                    botRoom5.sendMessage(girlChat,nameUser+' dice: '+msgText);  
                    botMonitor.sendMessage(monitor.ID, 'room 5: '+ nameUser+' dice a '+nameGirl+': '+msgText);
                }
            break;
            case 6:
                console.log(msgText); console.log(roomSelect); console.log(userChat); console.log(girlChat); console.log(typeAnswer); console.log(nameUser); console.log(nameGirl);
                if (typeAnswer=='textNoAcceptUser') {            
                    botRoom6.sendMessage(userChat,nameUser+textNoAccept);
                    botRoom6.sendMessage(girlChat,nameUser+textNoAcceptToUser);
                    botMonitor.sendMessage(monitor.ID, 'room 6: '+nameUser+' intenta enviar texto no aceptado: "'+msgText+'"');
                } else if(typeAnswer=='textNoAcceptGirl') {
                    botRoom6.sendMessage(girlChat,nameGirl+textNoAccept);
                    botRoom6.sendMessage(userChat,nameGirl+textNoAcceptToGirl);
                    botMonitor.sendMessage(monitor.ID, 'room 6: '+nameGirl+' intenta enviar texto no aceptado: "'+msgText+'"');        
                } else if (typeAnswer=='toUser') {
                    botRoom6.sendMessage(userChat,nameGirl+' dice: '+msgText);
                    botMonitor.sendMessage(monitor.ID, 'room 6: '+nameGirl+' dice a '+nameUser+': '+msgText);
                } else if (typeAnswer=='toGirl') {
                    botRoom6.sendMessage(girlChat,nameUser+' dice: '+msgText);  
                    botMonitor.sendMessage(monitor.ID, 'room 6: '+nameUser+' dice a '+nameGirl+': '+msgText);
                }
            break;
            case 7:
                console.log(msgText); console.log(roomSelect); console.log(userChat); console.log(girlChat); console.log(typeAnswer); console.log(nameUser); console.log(nameGirl);
                if (typeAnswer=='textNoAcceptUser') {            
                    botRoom7.sendMessage(userChat,nameUser+textNoAccept);
                    botRoom7.sendMessage(girlChat,nameUser+textNoAcceptToUser);
                    botMonitor.sendMessage(monitor.ID, 'room 7: '+nameUser+' intenta enviar texto no aceptado: "'+msgText+'"');
                } else if(typeAnswer=='textNoAcceptGirl') {
                    botRoom7.sendMessage(girlChat,nameGirl+textNoAccept);
                    botRoom7.sendMessage(userChat,nameGirl+textNoAcceptToGirl);
                    botMonitor.sendMessage(monitor.ID, 'room 7: '+nameGirl+' intenta enviar texto no aceptado: "'+msgText+'"');        
                } else if (typeAnswer=='toUser') {
                    botRoom7.sendMessage(userChat,nameGirl+' dice: '+msgText);
                    botMonitor.sendMessage(monitor.ID, 'room 7: '+nameGirl+' dice a '+nameUser+': '+msgText);
                } else if (typeAnswer=='toGirl') {
                    botRoom7.sendMessage(girlChat,nameUser+' dice: '+msgText);  
                    botMonitor.sendMessage(monitor.ID, 'room 7: '+nameUser+' dice a '+nameGirl+': '+msgText);
                }
            break;
            case 8:
                console.log(msgText); console.log(roomSelect); console.log(userChat); console.log(girlChat); console.log(typeAnswer); console.log(nameUser); console.log(nameGirl);
                if (typeAnswer=='textNoAcceptUser') {            
                    botRoom8.sendMessage(userChat,nameUser+textNoAccept);
                    botRoom8.sendMessage(girlChat,nameUser+textNoAcceptToUser);
                    botMonitor.sendMessage(monitor.ID, 'room 8: '+nameUser+' intenta enviar texto no aceptado: "'+msgText+'"');
                } else if(typeAnswer=='textNoAcceptGirl') {
                    botRoom8.sendMessage(girlChat,nameGirl+textNoAccept);
                    botRoom8.sendMessage(userChat,nameGirl+textNoAcceptToGirl);
                    botMonitor.sendMessage(monitor.ID, 'room 8: '+nameGirl+' intenta enviar texto no aceptado: "'+msgText+'"');        
                } else if (typeAnswer=='toUser') {
                    botRoom8.sendMessage(userChat,nameGirl+' dice: '+msgText);
                    botMonitor.sendMessage(monitor.ID, 'room 8: '+nameGirl+' dice a '+nameUser+': '+msgText);
                } else if (typeAnswer=='toGirl') {
                    botRoom8.sendMessage(girlChat,nameUser+' dice: '+msgText);  
                    botMonitor.sendMessage(monitor.ID, 'room 8: '+nameUser+' dice a '+nameGirl+': '+msgText);
                }
            break;
            case 9:
                console.log(msgText); console.log(roomSelect); console.log(userChat); console.log(girlChat); console.log(typeAnswer); console.log(nameUser); console.log(nameGirl);
                if (typeAnswer=='textNoAcceptUser') {            
                    botRoom9.sendMessage(userChat,nameUser+textNoAccept);
                    botRoom9.sendMessage(girlChat,nameUser+textNoAcceptToUser);
                    botMonitor.sendMessage(monitor.ID, 'room 9: '+nameUser+' intenta enviar texto no aceptado: "'+msgText+'"');
                } else if(typeAnswer=='textNoAcceptGirl') {
                    botRoom9.sendMessage(girlChat,nameGirl+textNoAccept);
                    botRoom9.sendMessage(userChat,nameGirl+textNoAcceptToGirl);
                    botMonitor.sendMessage(monitor.ID, 'room 9: '+nameGirl+' intenta enviar texto no aceptado: "'+msgText+'"');        
                } else if (typeAnswer=='toUser') {
                    botRoom9.sendMessage(userChat,nameGirl+' dice: '+msgText);
                    botMonitor.sendMessage(monitor.ID, 'room 9: '+nameGirl+' dice a '+nameUser+': '+msgText);
                } else if (typeAnswer=='toGirl') {
                    botRoom9.sendMessage(girlChat,nameUser+' dice: '+msgText);  
                    botMonitor.sendMessage(monitor.ID, 'room 9: '+nameUser+' dice a '+nameGirl+': '+msgText);
                }
            break;
            case 10:
                console.log(msgText); console.log(roomSelect); console.log(userChat); console.log(girlChat); console.log(typeAnswer); console.log(nameUser); console.log(nameGirl);
                if (typeAnswer=='textNoAcceptUser') {            
                    botRoom10.sendMessage(userChat,nameUser+textNoAccept);
                    botRoom10.sendMessage(girlChat,nameUser+textNoAcceptToUser);
                    botMonitor.sendMessage(monitor.ID, 'room 10: '+nameUser+' intenta enviar texto no aceptado: "'+msgText+'"');
                } else if(typeAnswer=='textNoAcceptGirl') {
                    botRoom10.sendMessage(girlChat,nameGirl+textNoAccept);
                    botRoom10.sendMessage(userChat,nameGirl+textNoAcceptToGirl);
                    botMonitor.sendMessage(monitor.ID, 'room 10: '+nameGirl+' intenta enviar texto no aceptado: "'+msgText+'"');        
                } else if (typeAnswer=='toUser') {
                    botRoom10.sendMessage(userChat,nameGirl+' dice: '+msgText);
                    botMonitor.sendMessage(monitor.ID, 'room 10: '+nameGirl+' dice a '+nameUser+': '+msgText);
                } else if (typeAnswer=='toGirl') {
                    botRoom10.sendMessage(girlChat,nameUser+' dice: '+msgText);  
                    botMonitor.sendMessage(monitor.ID, 'room 10: '+nameUser+' dice a '+nameGirl+': '+msgText);
                }
            break;
            case 11:
                console.log(msgText); console.log(roomSelect); console.log(userChat); console.log(girlChat); console.log(typeAnswer); console.log(nameUser); console.log(nameGirl);
                if (typeAnswer=='textNoAcceptUser') {            
                    botRoom11.sendMessage(userChat,nameUser+textNoAccept);
                    botRoom11.sendMessage(girlChat,nameUser+textNoAcceptToUser);
                    botMonitor.sendMessage(monitor.ID, 'room 11: '+nameUser+' intenta enviar texto no aceptado: "'+msgText+'"');
                } else if(typeAnswer=='textNoAcceptGirl') {
                    botRoom11.sendMessage(girlChat,nameGirl+textNoAccept);
                    botRoom11.sendMessage(userChat,nameGirl+textNoAcceptToGirl);
                    botMonitor.sendMessage(monitor.ID, 'room 11: '+nameGirl+' intenta enviar texto no aceptado: "'+msgText+'"');        
                } else if (typeAnswer=='toUser') {
                    botRoom11.sendMessage(userChat,nameGirl+' dice: '+msgText);
                    botMonitor.sendMessage(monitor.ID, 'room 11: '+nameGirl+' dice a '+nameUser+': '+msgText);
                } else if (typeAnswer=='toGirl') {
                    botRoom11.sendMessage(girlChat,nameUser+' dice: '+msgText);  
                    botMonitor.sendMessage(monitor.ID, 'room 11: '+nameUser+' dice a '+nameGirl+': '+msgText);
                }
            break;
            case 12:
                console.log(msgText); console.log(roomSelect); console.log(userChat); console.log(girlChat); console.log(typeAnswer); console.log(nameUser); console.log(nameGirl);
                if (typeAnswer=='textNoAcceptUser') {            
                    botRoom12.sendMessage(userChat,nameUser+textNoAccept);
                    botRoom12.sendMessage(girlChat,nameUser+textNoAcceptToUser);
                    botMonitor.sendMessage(monitor.ID, 'room 12: '+nameUser+' intenta enviar texto no aceptado: "'+msgText+'"');
                } else if(typeAnswer=='textNoAcceptGirl') {
                    botRoom12.sendMessage(girlChat,nameGirl+textNoAccept);
                    botRoom12.sendMessage(userChat,nameGirl+textNoAcceptToGirl);
                    botMonitor.sendMessage(monitor.ID, 'room 12: '+nameGirl+' intenta enviar texto no aceptado: "'+msgText+'"');        
                } else if (typeAnswer=='toUser') {
                    botRoom12.sendMessage(userChat,nameGirl+' dice: '+msgText);
                    botMonitor.sendMessage(monitor.ID, 'room 12: '+nameGirl+' dice a '+nameUser+': '+msgText);
                } else if (typeAnswer=='toGirl') {
                    botRoom12.sendMessage(girlChat,nameUser+' dice: '+msgText);  
                    botMonitor.sendMessage(monitor.ID, 'room 12: '+nameUser+' dice a '+nameGirl+': '+msgText);
                }
            break;
        default:
            break;
    }
    
}

function sendMessageUserGirl(msgText,whoWriteId,userChat,girlChat,nameUser,nameGirl,roomSel) {
    
    var wordUser = -1;
    var wordGirl = -1;
    var Upos=-1;
    var Gpos=-1;
    
    if (whoWriteId==userChat)
    {
        
            echoRev = msgText.toLowerCase();
            echoRev = echoRev.replace(/ /g, "");
            //uso foreach para recorrer cada elemento del array
            keywords.forEach(function(element) 
            {
                //En caso de existir se asigna la posición en pos
                wordUser = echoRev.indexOf(element.toString());
       
                if (wordUser!=-1)
                {
                    Upos=1;
    
                }

            });
                    
            if (Upos==1)
            {
                sendMessageRoom(msgText,roomSel,userChat,girlChat,"textNoAcceptUser",nameUser,nameGirl);
                //botRoom5.sendMessage(userChat,"Estas usando palabras NO ACEPTADAS, Sí persiste tu cuenta sera cancelada!");
                //botRoom5.sendMessage(girlChat,"El usuario esta tratando de escribirte texto no aceptado");
                //botMonitor.sendMessage(monitor.ID, nameUser+' intenta enviar texto no aceptado '+msgText);
                
                Upos=-1;
                
            } else {
                //console.log(msgText);console.log(whoWriteId);console.log(userChat);console.log(girlChat);
                sendMessageRoom(msgText,roomSel,userChat,girlChat,"toGirl",nameUser,nameGirl);
                        //botRoom5.sendMessage(girlChat,"usuario#1 dice: "+msgText); //933443152 es el numero identificador de la chica   
                        //botMonitor.sendMessage(monitor.ID, "usuario#1 dice: "+msgText);
                        
                        
                       // console.log(msgText);
                        
                    }
      } else if (whoWriteId==girlChat)
                {

                echoRev = msgText.toLowerCase();
                echoRev = echoRev.replace(/ /g, "");
                //uso foreach para recorrer cada elemento del array
                keywords.forEach(function(element) {
                //En caso de existir se asigna la posición en pos
                wordGirl = echoRev.indexOf(element.toString());
            
                    if (wordGirl!=-1){
                        Gpos=1;
            
                    }

        });
       
            if (Gpos==1){

                sendMessageRoom(msgText,roomSel,userChat,girlChat,'textNoAcceptGirl',nameUser,nameGirl);

                // botRoom5.sendMessage(girlChat,"Estas usando palabras NO ACEPTADAS, Sí persiste tu cuenta sera cancelada!");
                // botRoom5.sendMessage(userChat,"La chica esta tratando de escribirte texto no aceptado");
                // botMonitor.sendMessage(monitor.ID, 'La chica intenta enviar texto no aceptado '+msgText);
        
                Gpos=-1;
            }else{
                sendMessageRoom(msgText,roomSel,userChat,girlChat,"toUser",nameUser,nameGirl);
            // botRoom5.sendMessage(userChat,"chica#1 dice: "+msgText);
            // botMonitor.sendMessage(monitor.ID, "chica#1 dice: "+msgText);
            // console.log(msgText);
            }
       
    }

}

function roomSelect(){

    var encontrado=false;
    var cont = 0;
    var sizeRooms = rooms.length;

    while (encontrado==false) {
    
        if (cont<sizeRooms){

            if(rooms[cont].used==false){
                encontrado=true
                console.log('final de la funcion var cont: '+cont);
                console.log('estatus de la variable encontrado '+encontrado);
                return cont;
            }else {
               cont ++
            }

        }

        if (cont==sizeRooms){
            encontrado=true;
            return -1;
            
        }
        
        

    }

   
}

botPrincipal.onText(/^\/start/, function(msg){
  console.log(msg.text);
  let chatId = msg.chat.id;
  console.log(msg.chat.id);
  idBot0 = msg.chat.id;
  let username = msg.from.username;
  botPrincipal.sendMessage(chatId, "Bienvenido, " + username + " al chat de citas, escribe el codigo de la chica:");

});

botPrincipal.on('message', function(msg){
    
    let chatId = msg.chat.id;
    let mensaje_principal = msg.text;
    let username = msg.from.first_name;
    console.log(msg);

    userPos=users.findIndex(usuarioE =>{
        return usuarioE.id==chatId;
    });

    banedPos=userBaned.findIndex(usuario =>{
        return usuario.id==chatId;
    });
    
if (banedPos != -1) {
    console.log('usuario baneado')
    botPrincipal.sendMessage(chatId, "Hola, " + userBaned[banedPos].name + " estas en la lista de Baneados, debes esperar 8 dias para poder ingresar de nuevo");
    botMonitor.sendMessage(monitor.ID, 'el usuario '+ userBaned[banedPos].name +' con codigo: '+userBaned[banedPos].id+' esta baneado y esta tratando de escribir');
}   else{

   
    switch(mensaje_principal){
        case '11':
         g=0;
            roomSelected=roomSelect();
            if (roomSelected==-1){
                console.log('todas las salas ocupadas');
                botPrincipal.sendMessage(chatId, username+'Lo sentimos! todas las salas de chat estan ocupadas y no podemos enlazarte con '+girls[g].name+' intenta mas tarde');
                botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' no encontro sala de chat para enlazarse con el codigo: '+girls[g].code+' de la chica '+girls[g].name);
            }else {
                var photo = 'chica11a.jpg';
                rooms[roomSelected].used=true; 
                rooms[roomSelected].user=chatId;  
                rooms[roomSelected].girl=girls[g].ID; 
                rooms[roomSelected].girlName=girls[g].name; 
                rooms[roomSelected].userName=username;
                console.log('sala encontrada: '+rooms[roomSelected].name); console.log('id usuario asignado: '+rooms[roomSelected].user); console.log('id chica asignada: '+rooms[roomSelected].girl);
                // botPrincipal.sendMessage(chatId, 'Bienvenido, ingresa al '+rooms[roomSelected].name+' de '+girl15.name+' haz click en el siguiente enlace: '+ rooms[roomSelected].link);
                botPrincipal.sendMessage(girls[g].ID, 'Hola chica el usuario '+username+' te va escribir al '+rooms[roomSelected].name+' haz click en este link: ', {
                    reply_markup: {
                      inline_keyboard: [[
                        {
                          text: 'Ingresa al '+rooms[roomSelected].name,
                          url: rooms[roomSelected].link
                        }
                      ]]
                    }
                    });
                botPrincipal.sendPhoto(chatId, photo, {caption: girls[g].name});
                botPrincipal.sendMessage(chatId,'Se ha seleccionado el '+rooms[roomSelected].name+' para chatear con '+girls[g].name+', presiona el siguiente boton: ', {
                    reply_markup: {
                      inline_keyboard: [[
                        {
                          text: 'Ingresa al '+rooms[roomSelected].name,
                          url: rooms[roomSelected].link
                        }
                      ]]
                    }
                  });
                  botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' ingreso el codigo correcto '+girls[g].code+' de la chica '+girls[g].name+' y el room habilitado es: '+ rooms[roomSelected].link);
  

            }
            break;
        
        case '12':
            
        g=1;
            roomSelected=roomSelect();
            if (roomSelected==-1){
                console.log('todas las salas ocupadas');
                botPrincipal.sendMessage(chatId, username+'Lo sentimos! todas las salas de chat estan ocupadas y no podemos enlazarte con '+girls[g].name+' intenta mas tarde');
                botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' no encontro sala de chat para enlazarse con el codigo: '+girls[g].code+' de la chica '+girls[g].name);
            }else {
                var photo = 'chica12a.jpg';
                rooms[roomSelected].used=true; 
                rooms[roomSelected].user=chatId;  
                rooms[roomSelected].girl=girls[g].ID; 
                rooms[roomSelected].girlName=girls[g].name; 
                rooms[roomSelected].userName=username;
                console.log('sala encontrada: '+rooms[roomSelected].name); console.log('id usuario asignado: '+rooms[roomSelected].user); console.log('id chica asignada: '+rooms[roomSelected].girl);
                // botPrincipal.sendMessage(chatId, 'Bienvenido, ingresa al '+rooms[roomSelected].name+' de '+girl15.name+' haz click en el siguiente enlace: '+ rooms[roomSelected].link);
                botPrincipal.sendMessage(girls[g].ID, 'Hola chica el usuario '+username+' te va escribir al '+rooms[roomSelected].name+' haz click en este link: ', {
                    reply_markup: {
                      inline_keyboard: [[
                        {
                          text: 'Ingresa al '+rooms[roomSelected].name,
                          url: rooms[roomSelected].link
                        }
                      ]]
                    }
                    });
                botPrincipal.sendPhoto(chatId, photo, {caption: girls[g].name});
                botPrincipal.sendMessage(chatId,'Se ha seleccionado el '+rooms[roomSelected].name+' para chatear con '+girls[g].name+', presiona el siguiente boton: ', {
                    reply_markup: {
                      inline_keyboard: [[
                        {
                          text: 'Ingresa al '+rooms[roomSelected].name,
                          url: rooms[roomSelected].link
                        }
                      ]]
                    }
                  });
                  botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' ingreso el codigo correcto '+girls[g].code+' de la chica '+girls[g].name+' y el room habilitado es: '+ rooms[roomSelected].link);
  

            }
            break;
        case '13':
           
        g=2;
            roomSelected=roomSelect();
            if (roomSelected==-1){
                console.log('todas las salas ocupadas');
                botPrincipal.sendMessage(chatId, username+'Lo sentimos! todas las salas de chat estan ocupadas y no podemos enlazarte con '+girls[g].name+' intenta mas tarde');
                botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' no encontro sala de chat para enlazarse con el codigo: '+girls[g].code+' de la chica '+girls[g].name);
            }else {
                var photo = 'chica13a.jpg';
                rooms[roomSelected].used=true; 
                rooms[roomSelected].user=chatId;  
                rooms[roomSelected].girl=girls[g].ID; 
                rooms[roomSelected].girlName=girls[g].name; 
                rooms[roomSelected].userName=username;
                console.log('sala encontrada: '+rooms[roomSelected].name); console.log('id usuario asignado: '+rooms[roomSelected].user); console.log('id chica asignada: '+rooms[roomSelected].girl);
                // botPrincipal.sendMessage(chatId, 'Bienvenido, ingresa al '+rooms[roomSelected].name+' de '+girl15.name+' haz click en el siguiente enlace: '+ rooms[roomSelected].link);
                botPrincipal.sendMessage(girls[g].ID, 'Hola chica el usuario '+username+' te va escribir al '+rooms[roomSelected].name+' haz click en este link: ', {
                    reply_markup: {
                      inline_keyboard: [[
                        {
                          text: 'Ingresa al '+rooms[roomSelected].name,
                          url: rooms[roomSelected].link
                        }
                      ]]
                    }
                    });
                botPrincipal.sendPhoto(chatId, photo, {caption: girls[g].name});
                botPrincipal.sendMessage(chatId,'Se ha seleccionado el '+rooms[roomSelected].name+' para chatear con '+girls[g].name+', presiona el siguiente boton: ', {
                    reply_markup: {
                      inline_keyboard: [[
                        {
                          text: 'Ingresa al '+rooms[roomSelected].name,
                          url: rooms[roomSelected].link
                        }
                      ]]
                    }
                  });
                  botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' ingreso el codigo correcto '+girls[g].code+' de la chica '+girls[g].name+' y el room habilitado es: '+ rooms[roomSelected].link);
  

            }
            break;
        case '14':
        g=3;
            roomSelected=roomSelect();
            if (roomSelected==-1){
                console.log('todas las salas ocupadas');
                botPrincipal.sendMessage(chatId, username+'Lo sentimos! todas las salas de chat estan ocupadas y no podemos enlazarte con '+girls[g].name+' intenta mas tarde');
                botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' no encontro sala de chat para enlazarse con el codigo: '+girls[g].code+' de la chica '+girls[g].name);
            }else {
                var photo = 'chica14a.jpg';
                rooms[roomSelected].used=true; 
                rooms[roomSelected].user=chatId;  
                rooms[roomSelected].girl=girls[g].ID; 
                rooms[roomSelected].girlName=girls[g].name; 
                rooms[roomSelected].userName=username;
                console.log('sala encontrada: '+rooms[roomSelected].name); console.log('id usuario asignado: '+rooms[roomSelected].user); console.log('id chica asignada: '+rooms[roomSelected].girl);
                // botPrincipal.sendMessage(chatId, 'Bienvenido, ingresa al '+rooms[roomSelected].name+' de '+girl15.name+' haz click en el siguiente enlace: '+ rooms[roomSelected].link);
                botPrincipal.sendMessage(girls[g].ID, 'Hola chica el usuario '+username+' te va escribir al '+rooms[roomSelected].name+' haz click en este link: ', {
                    reply_markup: {
                      inline_keyboard: [[
                        {
                          text: 'Ingresa al '+rooms[roomSelected].name,
                          url: rooms[roomSelected].link
                        }
                      ]]
                    }
                    });
                botPrincipal.sendPhoto(chatId, photo, {caption: girls[g].name});
                botPrincipal.sendMessage(chatId,'Se ha seleccionado el '+rooms[roomSelected].name+' para chatear con '+girls[g].name+', presiona el siguiente boton: ', {
                    reply_markup: {
                      inline_keyboard: [[
                        {
                          text: 'Ingresa al '+rooms[roomSelected].name,
                          url: rooms[roomSelected].link
                        }
                      ]]
                    }
                  });
                  botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' ingreso el codigo correcto '+girls[g].code+' de la chica '+girls[g].name+' y el room habilitado es: '+ rooms[roomSelected].link);
  

            }
            break;     
        case '15':
        g=4;
            roomSelected=roomSelect();
            if (roomSelected==-1){
                console.log('todas las salas ocupadas');
                botPrincipal.sendMessage(chatId, username+'Lo sentimos! todas las salas de chat estan ocupadas y no podemos enlazarte con '+girls[g].name+' intenta mas tarde');
                botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' no encontro sala de chat para enlazarse con el codigo: '+girls[g].code+' de la chica '+girls[g].name);
            }else {
                var photo = 'chica15a.jpg';
                rooms[roomSelected].used=true; 
                rooms[roomSelected].user=chatId;  
                rooms[roomSelected].girl=girls[g].ID; 
                rooms[roomSelected].girlName=girls[g].name; 
                rooms[roomSelected].userName=username;
                console.log('sala encontrada: '+rooms[roomSelected].name); console.log('id usuario asignado: '+rooms[roomSelected].user); console.log('id chica asignada: '+rooms[roomSelected].girl);
                // botPrincipal.sendMessage(chatId, 'Bienvenido, ingresa al '+rooms[roomSelected].name+' de '+girl15.name+' haz click en el siguiente enlace: '+ rooms[roomSelected].link);
                botPrincipal.sendMessage(girls[g].ID, 'Hola chica el usuario '+username+' te va escribir al '+rooms[roomSelected].name+' haz click en este link: ', {
                    reply_markup: {
                      inline_keyboard: [[
                        {
                          text: 'Ingresa al '+rooms[roomSelected].name,
                          url: rooms[roomSelected].link
                        }
                      ]]
                    }
                    });
                botPrincipal.sendPhoto(chatId, photo, {caption: girls[g].name});
                botPrincipal.sendMessage(chatId,'Se ha seleccionado el '+rooms[roomSelected].name+' para chatear con '+girls[g].name+', presiona el siguiente boton: ', {
                    reply_markup: {
                      inline_keyboard: [[
                        {
                          text: 'Ingresa al '+rooms[roomSelected].name,
                          url: rooms[roomSelected].link
                        }
                      ]]
                    }
                  });
                  botMonitor.sendMessage(monitor.ID, 'el usuario '+username+' ingreso el codigo correcto '+girls[g].code+' de la chica '+girls[g].name+' y el room habilitado es: '+ rooms[roomSelected].link);
  

            }
            break;   

        default:
            if (userPos == -1) {  //eres usuario nuevo
                console.log("eres nuevo "+username)
                    botPrincipal.sendMessage(chatId, "Bienvenido, " + username + " al chat de citas, escribe el codigo de la chica:");
                    users.push({name: username, id: chatId});
                    botMonitor.sendMessage(monitor.ID, 'NUEVO usuario '+msg.from.first_name+' con codigo id: '+chatId);
            } else {
               console.log("ya eres usuario "+username)
                    botPrincipal.sendMessage(chatId, 'Has ingresado un codigo errado, vuelve a escribir el codigo de la chica:  ');
            }
            
        // users.forEach(element => {
        //         if (chatId==element.id) {
        //             console.log("ya eres usuario "+element.name)
        //             botPrincipal.sendMessage(chatId, 'Has ingresado un codigo errado, vuelve a escribir el codigo de la chica:  ');
                    
        //         }else{
        //             console.log("eres nuevo "+element.name)
        //             botPrincipal.sendMessage(chatId, "Bienvenido, " + username + " al chat de citas, escribe el codigo de la chica:");
        //             users.push({name: username, id: chatId});
        //         }
        //     });
            
    }
}

     
});

// Room 1  ==>>
botRoom1.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=1;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 2  ==>>
botRoom2.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=2;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 3  ==>>
botRoom3.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=3;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 4  ==>>
botRoom4.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=4;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 5  ==>>
botRoom5.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=5;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 6  ==>>
botRoom6.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=6;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 7  ==>>
botRoom7.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=7;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 8  ==>>
botRoom8.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=8;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 9  ==>>
botRoom9.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=9;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 10  ==>>
botRoom10.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=10;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 11  ==>>
botRoom11.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=11;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 12  ==>>
botRoom12.on('message', function(msg){   
    
    let chatId = msg.chat.id; 
    let echo = msg.text;
    console.log("texto: "+echo);
    numRoom=12;
    let userRoom=rooms[numRoom-1].user;
    let girlRoom=rooms[numRoom-1].girl;
    let girlName=rooms[numRoom-1].girlName;
    let userName=rooms[numRoom-1].userName;
    sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,numRoom);
    
});
// Room 5 ==>>
// botRoom5.on('message', function(msg){   //la funcion onText permite recibir los textos e ID de quien ingresa al Bot
    
//     let chatId = msg.chat.id; // msg.chat.id se encarga de recoger el id del chat donde se está realizando la petición.
//     //let username1 = msg.from.first_name;
//     let echo = msg.text;
//     console.log("texto: "+echo);
//     let userRoom=rooms[4].user;
//     let girlRoom=rooms[4].girl;
//     let girlName=rooms[4].girlName;
//     let userName=rooms[4].userName;

//     // if (username1==girlName15){
//     //     username = msg.from.first_name; //msg.from.first_name se encarga de recoger el nombre del usuario
//     // }else{
//     //     username="sin nombre";
//     // }

//     // if (username1==girlRoom){
//     //     username = msg.from.first_name; //msg.from.first_name se encarga de recoger el nombre del usuario
//     // }else{
//     //     username="sin nombre";
//     // }
//     sendMessageUserGirl(echo,chatId,userRoom,girlRoom,userName,girlName,5);
//     //sendMessageUserGirl(msgText,whoWriteId,userChat,girlChat,nameUser,nameGirl) 
// });



  
    botMonitor.on('message', function(msg){console.log("estamos dentro del bot monitor") });


  


    