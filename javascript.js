var sidebar = document.getElementById('sidebar');
var sidebarSmall = document.getElementById('sidebar-small');


function minSidebar(){
    switch(sidebar.style.display === 'block') {
    case true:
        sidebar.style.display = 'none';
        sidebarSmall.style.display = 'block';
        break;
    case false:
        sidebar.style.display = 'block';
        sidebarSmall.style.display = 'none';
        break;
    }
}

function maxSidebar(){
    switch(sidebarSmall.style.display === 'block') {
        case true:
            sidebarSmall.style.display = 'none';
            sidebar.style.display = 'block';
            break;
        case false:
            sidebarSmall.style.display === 'none';
            sidebar.style.display = 'block';
            break;
    }
}


document.getElementById('max-sidebar-btn').addEventListener('click', minSidebar);
document.getElementById('min-sidebar-btn').addEventListener('click', maxSidebar);
