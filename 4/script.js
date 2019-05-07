(function($) {
    $(function() {
        $code = { 'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8};
        $decode = { 1:'A', 2:'B', 3:'C', 4:'D', 5:'E', 6:'F', 7:'G', 8:'H'};


        create();
        function create() {
            for ($i = 1; $i <= 10; $i++) {
                for($c = 1; $c <= 10; $c++) {

                    if ($i == 1 || $i == 10) {
                        if ($c == 1 || $c == 10) {
                            $('<a>', {href: '#', class: 'empty', text: '', 'data-system': 'i='+$i+'c='+$c}).appendTo('.table');
                        } else {
                            $('<a>', {href: '#', class: 'empty', text: ($decode[$c-1]), 'data-system': 'i='+$i+'c='+$c}).appendTo('.table');
                        }
                    } else if ($c == 1 || $c == 10) {
                        $('<a>', {href: '#', class: 'empty',text: ($i-1), 'data-system': 'i='+$i+'c='+$c}).appendTo('.table');
                    }
                    else {
                        $('<a>', { href: '#', class: $decode[$c-1]+($i-1), 'data-system': 'i='+$i+'c='+$c}).appendTo('.table');
                    }
                }
            }
        }

        $('a').click(function () {
            if($(this).hasClass('empty')) {
                return false;
            }

            if (!$(this).hasClass('select')) {
                $('.table').find('a').each(function () {
                    $(this).removeClass('permissible');
                    $(this).removeClass('select');
                })
            }
           $element = ($(this).attr('class'));
            $(this).toggleClass('select');
            $pos1 = $element.match(/\D/);
            $pos2 = parseInt($element.match(/\d/));
            $arr = search($code[$pos1], $pos2);
            $.each($arr,function(index,value){
                    $('.'+value).toggleClass('permissible');

            });






        if($pos1 == '' || $pos1 == undefined) {
            alert('Неверные параметры');
        }
        if($pos2 == '' || isNaN($pos2)) {
            alert('Неверные параметры');
        }






        function search(g_x,g_y) {
            $arr = [];
             for($i = 0; $i <= 7; $i++) {
                 x = g_x;
                 y = g_y;
                 switch ($i) {
                     case 0:
                         if (((x+=1) <= 8) && ((y+=2 )<= 8)) {
                             $arr.push($decode[x] + (y));
                         }
                         break;
                     case 1:
                         if (((x-=1) > 0) && ((y+=2 ) <= 8)) {
                             $arr.push($decode[x] + (y));
                         }
                         break;
                     case 2:
                         if (((x+=1) <= 8) && ((y-=2 ) > 0)) {
                             $arr.push($decode[x] + (y));
                         }
                         break;
                     case 3:
                         if (((x-1) > 0) && ((y-2 ) > 0)) {
                             $arr.push($decode[x-=1] + (y-=2));
                         }
                         break;
                     case 4:
                         if (((x-2) > 0) && ((y-1 ) > 0)) {
                             $arr.push($decode[x-=2] + (y-=1));
                         }
                         break;
                     case 5:
                         if (((x-2) > 0) && ((y+1 ) > 0)) {
                             $arr.push($decode[x-=2] + (y+=1));
                         }
                         break;
                     case 6:
                         if (((x+2) > 0) && ((y-1 ) > 0)) {
                             $arr.push($decode[x+=2] + (y-=1));
                         }
                         break;
                     case 7:
                         if (((x+2) > 0) && ((y+1 ) > 0)) {
                             $arr.push($decode[x+=2] + (y+=1));
                         }
                         break;

                 }
             }

            return $arr
        }
        });





    })
})(jQuery)