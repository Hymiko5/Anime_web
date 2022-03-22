$( document ).ready(function() {
  $('#next-btn').click(function() {
    const url = new URL(window.location.href);
    let count = url.pathname.split('/')[2];
    if(!count)count=0;
    count++;
//     $.ajax({
//       type: 'GET',
//       url: '/lastest/' + count,
//       data: { link: String(link) },
//       success: function(data) {
//         let list = [];
//         console.log(data.list.data);
//         data.list.data.forEach(function(ele) {
//           let single = [
//         `<div class='card m-2 user-card'>`,
//             `<img class='card-img-top' src=${ele.attributes.posterImage.original} alt='Card image cap' height='200px' />`,
//             `<div class='card-body'>,
//               <h5 class='card-title'>${ele.attributes.titles.en_jp}</h5>,
// </div>`,
//             `</div>`
//               ];
//           list.push(single.join(''))
//         })
//         $('#list-movies').html(list.join(''));
//         link = data.list.links.next;
//       }
//     })

    window.location.href = `/lastest/${count}`;
    
  })
})
