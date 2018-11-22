
var requri  = 'https://api.github.com/users/polo5922';
requestJSON(requri, function(json) {
      if(json.message == "Not Found") {
        $('.user').html("<h2>No User Info Found</h2>");
      }else {
        var reposnum = json.public_repos;
        var output = '<p>Repos: '+reposnum+'</p>';
        console.log(output);
        $('.user').html(output);
}
});


function requestJSON(url, callback) {
    $.ajax({
      url: url,
      complete: function(xhr) {
        callback.call(null, xhr.responseJSON);
      }
    });
  };
