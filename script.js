$(document).ready(function () {
    $('#btn_add').click(function (e) {
        e.preventDefault();
        if ($('input').val() == '') {
            alert("Insira o noma da tarefa");
        }
        else {
            const nova_tarefa = `<li>${$('input').val()}</li>`;
            $(nova_tarefa).appendTo('ul');
            $('input').val('')
            if($('ul li')) {
                $('ul li:last-child').hide();
                $('ul li:last-child').slideDown();
            }
            $.map($('ul li'), (el) => {
                $(el).click((e) => {
                    $(e.currentTarget).addClass('done');
                });
            });
        }
    });
});
