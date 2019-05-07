(function($) {
    $('.start').click(function (e) {
        e.preventDefault();
        $(this).text('Обновить');
        game();
    })
    $('.show').click(function (e) {
        e.preventDefault();
            $('.pole').find('a').each(function () {
                $(this).toggleClass('hidden');
            })
            setTimeout(function () {
                $('.pole').find('a').each(function () {
                    $(this).toggleClass('hidden');
                })
            }, 500)

    })

    function game() {
            $timer = setInterval(setClockWithCurrentTime, 1000);
        let sec = 0;
        let min = 0;

            function setClockWithCurrentTime() {
               sec += 1;
               if (sec >= 60) {
                   sec = 0;
                   min +=1;
               }
               $('h2').text('Прошло: '+min+ ' минут(ы) и ' +sec +' секунд(ы)');
        }


        let codes = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8], i, j, x, y;
        for(y = codes.length; y;)
        {
            j = Math.floor(Math.random() * y);
            x = codes[--y];
            codes[y] = codes[j];
            codes[j] = x;
        }
        $text = '';
        for(j = 0; j < 16; j++) {
            $text += '<a color="' + codes[j] + '" class="color' + codes[j] + ' hidden" color=""> </a>';

        };
        $('.pole').html($text);

        let check = false, selcolor = 0, sela, steps = 0, open = 0, timer, a = $('.pole').find('a');
        console.log(a);
        for(let i = 0; i < a.length; i++){
            $(a[i]).bind('click', function(e){

                steps++;
                let el = $(this);
                //временно показываем цвет кликнутого блока
                el.toggleClass('hidden');
                setTimeout(function(){
                    //если кликнули на вторую картинку в паре
                    if(check){
                        check = false;
                        //если цвета совпали
                        if(el.attr('color') == selcolor){
                            open++;
                            //если количество совпадений = максимально возможному
                            if(open == 8){
                                alert('Вы выйграли за  ' + min + ' минут(ы) и ' + sec + ' секунд');
                                $('.start').text('Новая игра');
                                clearInterval($timer);
                            }
                        }
                        else{
                            //если цвета не совпали, то прячем блок
                            sela.toggleClass('hidden');
                            el.toggleClass('hidden');
                        }
                    }
                    else{
                        //если кликнули на первую картинку в паре
                        selcolor = el.attr('color'); sela = el; check = true;
                    }
                }, 100);
            });
        };

    }


})(jQuery)