var n=100;

var a= n % 10;
var b = (n / 10) % 10;
var c = n / 100;

if(n<100 || n > 999){
    console.log("N nhap sai");
  }

  else{
  switch(c){
    case 1: console.log("Một trăm");break;
    case 2: console.log("Hai trăm");break;
    case 3: console.log("Ba trăm");break;
    case 4: console.log("Bốn trăm ");break;
    case 5: console.log("Năm trăm");break;
    case 6: console.log("Sáu trăm ");break;
    case 7: console.log("Bảy trăm  ");break;
    case 8: console.log("Tám trăm ");break;
    case 9: console.log("Chín trăm ");break;
    
  }
  if (b % 10 == 0 && a != 0){
    printf("lẻ ");
  }
  switch(b){
    case 1: console.log("mười ");;break;
    case 2: console.log("Hai  mươi");break;
    case 3: console.log("Ba  mươi");break;
    case 4: console.log("Bốn  mươi ");break;
    case 5: console.log("Năm  mươi");break;
    case 6: console.log("Sáu  mươi ");break;
    case 7: console.log("Bảy  mươi  ");break;
    case 8: console.log("Tám  mươi ");break;
    case 9: console.log("Chín mươi ");break;
  }
  switch(a){
    case 1: console.log("một ");break;
    case 2: console.log("Hai  ");break;
    case 3: console.log("Ba  ");break;
    case 4: console.log("Bốn  ");break;
    case 5: console.log("Năm  ");;break;
    case 6: console.log("Sáu   ");break;
    case 7: console.log("Bảy    ");break;
    case 8: console.log("Tám  ");break;
    case 9: console.log("Chín  ");break;
  }

}

var t= 2;
if(t<=1 ||t<=12){
    switch(t)
    {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12: 

        console.log("Thang co 31 ngay");break;  
        
        case 2 :
            console.log("Thang co 28 ngay");break;  
            
        case 4:     case 6:      case 9:      case 11: 
        console.log("Thang co 30 ngay");break; 
    }

  
   
}

