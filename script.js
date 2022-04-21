$('#button1').click(function () {
  localStorage.setItem('place', 'beach')
  placeFinder()
})

$('#button2').click(function () {
  localStorage.setItem('place', 'ice rink')
  placeFinder()
})

$('#button3').click(function () {
  localStorage.setItem('place', 'sandwich shop')
  placeFinder()
})

function placeFinder() {
  if (localStorage.getItem('place') == 'beach') {
    //alert('sunnnn!!!!')
    location.href = 'beach.html'
  } else if (localStorage.getItem('place') == 'ice rink') {
    //alert('weeee!')
    location.href = 'rink.html'
  } else if (localStorage.getItem('place') == 'sandwich shop') {
    //alert('nom nom!')
    location.href = 'sandwich.html'
  }
}
