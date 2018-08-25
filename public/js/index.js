// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);

//New added code below

//onclick event of button click
$("#sign-in").on("click", function(event) {
  event.preventDefault();
  $("#sign-in-modal").css("display", "block");
});

//onclick event of button click
$("#create-new-user").on("click", function(event) {
  event.preventDefault();
  $("#new-user-modal").css("display", "block");
});

$("#new-user").on("click", function(event) {
  event.preventDefault();
  //handle the 'New? Sign up now button' ie hide sign in modal
  $("#sign-in-modal").css("display", "none");
  $("#new-user-modal").css("display", "block");
});

//onclick event of - send to user dashboard
$("#submit-user").on("click", function(event) {
  event.preventDefault();
  window.location = "UserPage.html";
});

// when you clicka da x da modal go away
$(".close").on("click", function(e) {
  $(".modal").css("display", "none");
});

<<<<<<< HEAD
=======
// $('#submit-sign-in').on('click', function(e) {
//   // post to sign-in verify api, which will redirect to /Dashboard hopefully
//   e.preventDefault();
//
//   $.post('/api/verify-sign-in', {email: '', password: ''}).then(function(response) {
//     console.log('verified');
//   }).catch(function(e) {
//     console.log('invalid login creds');
//   })
// })

>>>>>>> 7a16ac57d3f7755918a523d6669cb89f9db24309
// Validate login

//

// // Validate new user details
// $('#submit-new-user').on('click', function(e) {
//   // Validate form with jquery validate
//   $("form[name='new-user-form']").validate({
//     // Specify validation rules
//     rules: {
//       // The key name on the left side is the name attribute
//       // of an input field. Validation rules are defined
//       // on the right side
//       firstName: "required",
//       lastName: "required",
//       email: {
//         required: true,
//         // Specify that email should be validated
//         // by the built-in "email" rule
//         email: true
//       },
//       password: {
//         required: true,
//         minlength: 8
//       },
//       address: {
//         required: true
//       },
//       city: {
//         required: true
//       },
//       state: {
//         required: true,
//         rangelength: [2,2]
//       },
//       zip: {
//         required: true,
//         rangelength: [5, 5]
//       },

//     },
//     // Specify validation error messages
//     messages: {
//       firstName: "Please enter your firstname",
//       lastName: "Please enter your lastname",
//       password: {
//         required: "Please provide a password",
//         minlength: "Your password must be at least 8 characters long"
//       },
//       email: "Please enter a valid email address",
//       address: {
//         required: "Please enter your street address"
//       },
//       city: {
//         required: "Please enter your city"
//       },
//       state: {
//         required: "Please enter your state's postal code i.e. MN",
//         rangelength: "State Postal Code should be only 2 leters"
//       },
//       zip: {
//         required: "Please enter your 5 digit zip code",
//         rangelength: "Zip Code should 5 digits (ignore anything following a hyphen)"
//       }
//     },
//     // Make sure the form is submitted to the destination defined
//     // in the "action" attribute of the form when valid
//     submitHandler: function(form) {

//       // Serialize form data
//       let serialForm = $(form).serializeArray();
//       let data = {};
//       for (let i = 0; i < serialForm.length; i++){
//         data[serialForm[i]['name']] = serialForm[i]['value'];
//       }
//       console.log(data);
//       console.log("valid form");

//       $.post('/api/user', data, function(r) {
//         console.log(data)
//         console.log("Woo posted");
//       })
//     }
//   });
// });
