let wake_up_progress = {"getAdata":false,"getQdata":false,"getWord":false,"createKeybord":false,"createDisplay":false,"fin_create":false,"createKeybordEvent":false,"fin":false}
GetCsvData('./public/data/A_data_new.csv',"A");
let filter_array = []

const Progress = ()=>{
  // console.log(wake_up_progress)
  if(wake_up_progress["getAdata"] & !wake_up_progress["getQdata"]){
    filter_array = Array.from(new Set([...A_data]));
    GetCsvData('./public/data/Q_fil_ippan.csv',"Q");
  }else  if(wake_up_progress["getAdata"] & wake_up_progress["getQdata"] & !wake_up_progress["getWord"]){
    GetTodayWord();
  }else if(wake_up_progress["getAdata"] & wake_up_progress["getQdata"] & wake_up_progress["getWord"] & !wake_up_progress["createKeybord"]){
    CreateKeybord();
  }else if(wake_up_progress["getAdata"] & wake_up_progress["getQdata"] & wake_up_progress["getWord"] & wake_up_progress["createKeybord"] & !wake_up_progress["createDisplay"]){
    CreateDisplay();
  }else if(wake_up_progress["getAdata"] & wake_up_progress["getQdata"] & wake_up_progress["getWord"] & wake_up_progress["createKeybord"] & wake_up_progress["createDisplay"] & !wake_up_progress["createKeybordEvent"]){
    wake_up_progress["fin_create"] = true;
    AddKeybordEvent();
  }else if(wake_up_progress["fin_create"] & wake_up_progress["createKeybordEvent"]){
    wake_up_progress["fin"] = true;
    setInterval(DisplayTime, 1000);
    SolvHighlight();
    experienceCheck();
    beforeDataCheck();
    CheckRemaining_all();
    if(pass_day == 26| pass_day == 27){
      alertShow("Update\nハイコントラストモードの追加\nUIの調整\nキーボードの種別変更機能の追加\n残り候補数表示",3000);
    }
  }
}


const DisplayTime = ()=>{
  nowtime = new Date();
  if((23-parseInt(nowtime.getHours())) == 0 & (59-parseInt(nowtime.getMinutes())) == 0 & (59-parseInt(nowtime.getSeconds())) == 0){
    alert("日付が変わりました。単語が変わるためリロードします\nThe date has changed. Reload for word change.")
    location.reload();
  }
  time_left = ("0"+String(23-parseInt(nowtime.getHours()))).slice(-2) + ":" + ("0"+String(59-parseInt(nowtime.getMinutes()))).slice(-2) + ":" + ("0"+String(59-parseInt(nowtime.getSeconds()))).slice(-2);
  if(lang_en){
    document.getElementById("time_left").innerHTML = "<strong>No."+String(pass_day)+"</strong>　Next Tango："+time_left;
  }else{
    document.getElementById("time_left").innerHTML = "<strong>第"+String(pass_day)+"回</strong>　今日の単語 残り："+time_left;
  }
}