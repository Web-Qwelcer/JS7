let $place_list = document.querySelectorAll('aside ul.places li'),
    $article_list = document.getElementsByClassName('list__article');

const homeArticle = document.getElementById('home-article');

let prev_visible_item = 0;

for (let i = 0; i < $place_list.length; i++)
{
    const currentPlace = $place_list[i];

    currentPlace.addEventListener('click', function() {
        homeArticle.style.display = 'none';

        $place_list[prev_visible_item].classList.remove('active');

        if (currentPlace.classList.contains('active')) {
            currentPlace.classList.remove('active');
        } else {
            currentPlace.classList.add('active');
        }

        $article_list[prev_visible_item].classList.remove('visible');
        $article_list[i].classList.add('visible');

        prev_visible_item = i;
    });

    currentPlace.addEventListener('mouseover', () => {
        currentPlace.classList.add('hover');
    }, false);

    currentPlace.addEventListener('mouseleave', () => {
        currentPlace.classList.remove('hover');
    }, false);
}
