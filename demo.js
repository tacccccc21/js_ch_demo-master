$(function () {

  function doCalc() {
    if (inputsEmpty()) {
      $resultArea.html('入力されていない入力欄があります');
      return;
    }
    updateResultArea();
  }

  function inputsEmpty() {
    if (getNum1Val() === '' || getNum2Val() === '') {
      return true;
    } else {
      return false;
    }
  }

  function updateResultArea() {
    var val1 = getNum1Val();
    var val2 = getNum2Val();
    var sum = val1 + val2;
    $resultArea.html(val1 + ' + ' + val2 + ' = ' + sum);
  }

  function getNum1Val() {
    return $input1.val();
  }

  function getNum2Val() {
    return $input2.val();
  }

  var $input1 = $('#num1');
  var $input2 = $('#num2');
  var $resultArea = $('#result_area');
  var $sumBtn = $('#sum_btn');
  $sumBtn.on('click', doCalc);

});
