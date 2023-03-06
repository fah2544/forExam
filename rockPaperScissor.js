//rock = 1   paper = 2   scissor = 3
//รับค่า parameter มาจาก user ว่าเลือก ค้อน กรรไกร กระดาษ
//ในหน้าhtml ตรง onclick="play(ใส่parameterมาด้วย)"
  
function play(userPlay){
    alert(userPlay); //เพื่อดูว่า user เลือกตัวไหน

    //ตอนนี้เรารู้แล้วว่า user เลือกอะไร ต่อมาก็มาดูว่าคอมพิวเตอร์เลือกอะไรโดยใช้ random
    computerPlay = Math.floor((Math.random() * 3) + 1);

    //ขึ้นรูปที่user กับ คอม เลือก
    changeImage("user Image :" , userPlay);
    changeImage("computerImage :" , computerPlay);

    //ดูคะแนน
    userPoint = document.getElementById("userScore").value;  //คะแนนไปรับมาจาก id="userScore" ใน html
    computerPoint = document.getElementById("computerScore").value;  //คะแนนไปรับมาจาก id="computerScore" ใน html
    
    //check ดูว่า user กับ คอม ใครชนะ 
    //(ฝั่งไหนมากกว่าฝั้งนั้นชนะ ยกเว้น 1กะ3 ที่ 1ชนะ3)
    if( userPlay == 1 && computerPlay == 3 || userPlay == 2 && computerPlay == 1 || userPlay == 3 && computerPlay == 2){ 
        userPoint++;
        alert("you won this round")
        document.getElementById("userScore").value = userPoint; //update คะแนนลง html
    }else if (computerPlay == 1 && userPlay == 3 || computerPlay == 2 && userPlay == 1 || computerPlay ==31 && userPlay == 2){
        computerPoint++;   
        alert("computer won this round")
        document.getElementById("computerScore").value = computerPoint;  //update คะแนนลง html
    }

    //ใครชนะ (ชนะ 3 ใน 5)
    if(userPoint >= 3){
        alert("You are the winner");
        resetScore();
    }else if (computerPoint >= 3){
        alert("You loser!!");
        resetScore();
    }


}



//function reset score
//หลังจากจบเกมหรือหาคนชนะได้แล้ว จะรีเซ็ตคะแนน
function resetScore() {
    document.getElementById("userScore").value = 0;
    document.getElementById("computerScore").value = 0;
} 


//function สำหรับเปลี่ยนรูป (คลิกที่ตัวไหนก็จะเปลี่ยนรูปเป็นอันนั้น)
//รับ parameter ว่าเปลี่ยนรูปไหนและรูปนั้นคือเบอร์อะไร
function changeImage(imageId , playNumber){
    if (playNumber == 1){                 //ถ้ากด 1 รูปจะเปลี่ยนเป็น ค้อน
        imageChange = "rock.png"
    }else if (playNumber == 2){           //ถ้ากด 2 รูปจะเปลี่ยนเป็น กระดาษ
        imageChange = "paper.png"
    }else {
        imageChange = "scissor.png"       //ถ้ากด 3 รูปจะเปลี่ยนเป็น กรรไกร
    }
    document.getElementById(imageId).src = imageChange;  //แล้วเอารูปนั้นแสดงขึ้น src ใน html
}
