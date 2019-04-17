$(function() {
    $('.change-devoured').on('click', function(event) {
        var id = $(this).data('id');
        var newBurger = $(this).data('newBurger');
        var newBurgerState = {
            is_devoured: newBurger
        };
        var idDev = 
        {
            id: id
        }

        console.log("onclick devoure", id)

        $.ajax('/api/burgers/', {

            type: 'PUT',
           // data: newBurgerState
           data: idDev
        }).then(
            function() {
                console.log('burger devoured', newBurgerState);
                location.reload();
            }
        );
    });

    $('.create-form').on('submit', function(event) {
        event.preventDefault();
        var newBurger = {
            name: $('#burger').val().trim(),
            is_devoured: $('[name=devoured]:checked').val().trim()
        };

        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(
            function() {
                console.log('created new burger');
                location.reload();
            }
        )
    });
    $('.delete-burger').on('click', function(event) {
        var id = $(this).data('id');
        $.ajax('/api/burgers/' + id, {
            type: 'DELETE'
        }).then(
            function() {
                console.log('deleted burger', id);
                location.reload();
            }
        );
    });
});

