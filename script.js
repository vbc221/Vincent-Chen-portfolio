function openButton(){
  document.querySelector('.mainContent').style.marginLeft='250px';
  document.querySelector('.sideBar').style.display='block';
  document.querySelector('.fa-bars').style.display = 'none';
}

function closeButton(){
  document.querySelector('.mainContent').style.marginLeft = '0px';
  document.querySelector('.sideBar').style.display = 'none';
  document.querySelector('.fa-bars').style.display = 'block';
}