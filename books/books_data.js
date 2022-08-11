let books_json = '{ "books" : [' +
    '{ "title":"Dune" , "author":"FH" , "cover":"https://upload.wikimedia.org/wikipedia/en/d/de/Dune-Frank_Herbert_%281965%29_First_edition.jpg"},' +
    '{ "title":"Childhood\'s End" , "author":"ACC" , "cover":"https://upload.wikimedia.org/wikipedia/en/7/72/ChildhoodsEnd%281stEd%29.jpg"},' +
    '{ "title":"The Hitchhiker\'s Guide to the Galaxy" , "author":"DA" , "cover":"https://upload.wikimedia.org/wikipedia/en/b/bd/H2G2_UK_front_cover.jpg"},' +
    '{ "title":"Rendezvous with Rama" , "author":"ACC" , "cover":"https://upload.wikimedia.org/wikipedia/en/e/e1/Rama_copy.jpg"},' +
    '{ "title":"The Collected Stories of Arthur C. Clarke" , "author":"ACC" , "cover":"https://upload.wikimedia.org/wikipedia/en/d/d7/Collected_stories_clarke.jpg"},' +
    '{ "title":"Ender\'s Game" , "author":"OSC" , "cover":"https://upload.wikimedia.org/wikipedia/en/e/e4/Ender%27s_game_cover_ISBN_0312932081.jpg"} ]}';

function populte_books(placeholder) {
    books_data = JSON.parse(books_json);

    Object.values(books_data.books).forEach(val => {
        $(placeholder).before(
            `<div class="book">
               <div class="side spine">
                   <span class="spine-title"> ${val.title} </span>
                   <span class="spine-author"> ${val.author} </span>
               </div>
               <div class="side top"></div>
               <div class="side cover"
                   style="background-image: url(&quot;${val.cover}&quot;); height: 274px; top: 6px;">
               </div>
          </div>`);
    });
}

/* Usage:
    <body>
        <books></books>
    </body>

    <script>
        populte_books("books")
    </script>
*/