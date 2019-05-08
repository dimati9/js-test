(function($) {
    $(function() {
    $('.btn').click(function () {
        $arr = [];
        $legal = ['A','B','C','D','E','F','G','H'];
       $pos = $('.pos').val().toUpperCase();
       $pos = $pos.substring(0, 2);
       $pos = $.trim($pos);
        if (!$pos.match(/\D/g) || !$pos.match(/\d/g)) {
            alert('Неверные параметры');
            return false;
        } else {
            $pos1 = $pos.match(/\D/).toString();
            $pos2 = parseInt($pos.match(/\d/));
        }
        if($pos1 == '' || $pos1 == undefined || ($.inArray( $pos1, $legal) == -1) || !isNaN($pos1)) {
            alert('Неверные параметры');
            return false;
        }

        if($pos2 == '' || isNaN($pos2) || $pos2 <= 0 || $pos2 >= 9) {
            alert('Неверные параметры');
            return false;
        }


        $posY = { 'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8};
        $decode = { 1:'A', 2:'B', 3:'C', 4:'D', 5:'E', 6:'F', 7:'G', 8:'H'};



        alert(search($posY[$pos1], $pos2));

        function search(g_x,g_y) {

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
                         if (((x-2) > 0) && ((y+1 ) <= 8)) {
                             $arr.push($decode[x-=2] + (y+=1));
                         }
                         break;
                     case 6:
                         if (((x+2) <= 8) && ((y-1 ) > 0)) {
                             $arr.push($decode[x+=2] + (y-=1));
                         }
                         break;
                     case 7:
                         if (((x+2) <= 8) && ((y+1 ) <= 8)) {
                             $arr.push($decode[x+=2] + (y+=1));
                         }
                         break;
                 }
             }

            return $arr
        }





    })
    })
})(jQuery)