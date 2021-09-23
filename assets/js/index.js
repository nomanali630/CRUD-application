

$('#add_user').submit((event)=>{
    alert('Data Inserted Successfully')
})


$('#update_user').submit((event)=>{
    event.preventDefault();
    var unindexed_array = $('#update_user').serializeArray();
    var data = {}


    $.map(unindexed_array,((n,i)=>{
        data[n['name']] = n['value']
    }))

    var request = {
        "url" : `http://localhost:5000/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }
    $.ajax(request).done(function(response){
        alert('Data Updated Succesfully')
    })

})

if(window.location.pathname == '/'){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")
        console.log("thisData :",this)
    var request1 = {
        "url" : `http://localhost:5000/api/users/${id}`,
        "method" : "DELETE",
    }
     if(confirm('Do really want to Delete this user?')){
        $.ajax(request1).done(function(response){
            alert('Data deleted Succesfully')
            location.reload()
        })
     }

    })
}

