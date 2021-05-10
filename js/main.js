let $place_list = document.querySelectorAll('aside ul.places li'),
    $article_list = document.querySelectorAll('article')

let prev_visible_item = 0

let $s

for (let i = 0; i < $place_list.length; i++)
{
    $place_list[i].addEventListener('click', function(){
        if ($article_list[i+1].style.display != 'block'){
            $article_list[i+1].style.display = 'block'
            $article_list[prev_visible_item].style.display = 'none'
            prev_visible_item = i+1
        }
    })
}
