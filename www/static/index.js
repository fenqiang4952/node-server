
(function() {
  console.log('lll')
  $.ajax({
    url:'app/addUser',
    type: 'POST',
    data: {
      name: 'xiaoming2',
      sex: 1
    },
    dataType: 'json',
    success: function (data) {
      console.log(data);
    }
  })
})();