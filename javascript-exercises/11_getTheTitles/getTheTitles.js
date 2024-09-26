const getTheTitles = function(books) {
    let titles = [];
    books.map(function (bk) {
        titles.push(bk.title)
    })
    return titles
};

const book = [
    {
        title: 'Book',
        author: 'Name'
    },
    {
        title: 'Book2',
        author: 'Name2'
    }
]


// Do not edit below this line
module.exports = getTheTitles;
