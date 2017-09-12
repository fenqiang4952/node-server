
(function() {
  var transUserList = function (data) {
    var $userList = $('.userList').eq(0)
    console.log(data);
    data.forEach(function (item) {
      var $span = $('<span>',{class: 'name'}).append(item.name)
      var $span1 = $('<span>',{class: 'sex'}).append(item.sex === 1?'男':'女')
      var $li = $('<li>',{class: 'userItem'}).append($span).append($span1)
      $userList.append($li)
    })
  }


  $.ajax({
    url:'app/getUserAll',
    type: 'GET',
    dataType: 'json',
    success: function (data) {
      transUserList(data.result);
    }
  })
})();