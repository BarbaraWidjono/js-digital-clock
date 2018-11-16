

$(document).ready(() => {
  // let time = function time(){
  //   return Date.now();
  // };
  //
  // let newTime = time();
  //
  //
  // let target = $('#clock');
  // target.html($(`<p>${newTime}<p>`));

  setInterval(changeTime,1000);

  function changeTime(){
    let time = function time(){
      return Date.now();
    };

    let newTime = time();


    let target = $('#clock');
    target.html($(`<p>${newTime}<p>`));
  }


});
