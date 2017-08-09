var init_friend_lookup = function(){
	$("#friend-lookup-form").on("submit", function(e) {
		hideResults();
		showSpinnner();

	    var url = $(this).attr("action"); // the script where you handle the form input.

	    $.ajax({
	           type: "GET",
	           url: url,
	           format: "json",
	           data: $(this).serialize(), // serializes the form's elements.
	           success: function(data)
	           {
					$("#friend-lookup").replaceWith(data);
		       		hideSpinner();
		       		init_friend_lookup();
	           },
	           error: function(e, xhr, status, error){
	           		hideSpinner();
	           		$("#friend-lookup-errors").show();
					$("#friend-lookup-errors").html("User was not found!");
				}
	         });

	    e.preventDefault(); // avoid to execute the actual submit of the form.
	});

	function hideResults()
	{
		$("#friend-lookup-errors").hide();
		$("#friend-lookup-results").hide();
	}
};

$(document).ready(function(){
	init_friend_lookup();
});



