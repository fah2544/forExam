function play() {
  //random ship position (1-8)
  var randomPosition = Math.floor(Math.random() * 8 + 1);

  //store ship positon 3 position (_ , _+1 , _+2)
  shipPosition1 = randomPosition;
  shipPosition2 = randomPosition + 1;
  shipPosition3 = randomPosition + 2;
  console.log(shipPosition1, shipPosition2, shipPosition3);

  //if user play and hit correct the box will turn to green
  //if user got wrong it will turn to red
  seaTable = document.getElementById("sea"); //อ้างอิงไปหากล่อง
  seaColumn = seaTable.getElementsByTagName("td"); //เมื่อเข้าไปในtable id sea แล้วให้ไปหาแท็ก td ทั้งหมด เป็น array โดยตำแหน่งจะมี 0-9

  //ตั้งค่าแรกเริ่มให้ hit ก่อน (ส่วนมาค่าเริ่มต้นจะเป็น 0 "" false)
  hit1 = false;
  hit2 = false;
  hit3 = false;

  //user play
  shot = prompt("what position you want to shot btw 1-10?");

  //check ว่า hit มั้ย (วน 5 รอบเพราะเล่น 5 ครั้ง)
  for (i = 0; i < 5; i++) {
    //ถ้า user เดาถูก
    if ( shot == shipPosition1 || shot == shipPosition2 || shot == shipPosition3 ) {
      alert("Hit!");
      //ถ้า hit ก็เปลี่ยนสีของช่องนั้นด้วย ซึ่งเนื่องจากมันเก็บเป็น array ตำแหน่งกับเชื่องมันไม่เท่ากัน ช่อง5 แต่ตำแหน่ง4 (5-1) ตอนกำหนดสีเลยต้องเป็น -1
      seaColumn[shot - 1].style.backgroundColor = "red";
      //ถ้า hit ที่ positionไหน ก็จะให้ hitนั้นที่ตั้งไว้ตอนต้น = true
      if (shot == shipPosition1) {
        hit1 = true;
      } else if (shot == shipPosition2) {
        hit2 = true;
      } else {
        hit3 = true;
      }

    } else { //ถ้า user เดาผิด
      alert("miss!");
    }

    //ถ้าเดา 3 รอบแล้วถูก 3 รอบก็ไม่ต้องวน 5 แล้วชนะเลย
    if(hit1 == true && hit2 == true && hit3 == true){
        alert("you are the winner");
        break; // break คือหยุกลูปแล้วออก
    }
  }

  //ถ้าวนครบ 5 รอบแล้วไม่ hit เลยก็คือแพ้
  if(hit1 == flase || hit2 == false || hit3 == false){
    alert("loser!")
  }
}
