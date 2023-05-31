$(document).ready(() => {
    $('#tel').mask('(00) 0.0000-0000')
    $('#CPF').mask('000.000.000-00')
    $('#CEP').mask('00.000-000')

    // console.log($('form'));
    const msg_padrao = "Este campo é necessário"
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: 'email'
            },
            tel: {
                required: true
            },
            CPF: {
                required: true
            },
            end: {
                required: true
            },
            CEP: {
                required: true
            }
        },
        messages: {
            nome: "Seu nome é importante para sabermos como se chama.",
            email: "Seu e-mail é necessário para entrarmos em contato.",
            tel: msg_padrao,
            CPF: msg_padrao,
            end: msg_padrao,
            CEP: msg_padrao
        },
        submitHandler: function (form) {

            let new_name = $('#div_nome input').val();
            let new_email = $('#div_email input').val();
            let new_tel = $('#div_tel input').val();
            let new_CPF = $('#div_CPF input').val();
            let new_CEP = $('#div_CEP input').val();
            let new_end = $('#div_end input').val();

            $("#contatos").append(`<div class="contato">
                <h2>${new_name}</h2>
                <div>
                <p>E-mail: <output>${new_email}</output></p>
                <p>Telefone: <output>${new_tel}</output></p>
                <p>CPF: <output>${new_CPF}</output></p>
                <p>CEP: <output>${new_CEP}</output></p>
                <p>End.: <output>${new_end}</output></p>
            </div>
        </div>`)

            $('.contato').click(function (e) {
                console.log(e);
                $(e.currentTarget.lastElementChild).slideToggle();
            });
            alert('Contato salvo com sucesso.')

            $('#div_nome input').val('');
            $('#div_email input').val('');
            $('#div_tel input').val('');
            $('#div_CPF input').val('');
            $('#div_CEP input').val('');
            $('#div_end input').val('');
        },
        invalidHandler: function (form) {
            alert('Preencha todos os dados.')
        }
    })

})