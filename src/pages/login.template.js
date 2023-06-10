export default `<html lang="en">
<head>
    <style>
            {{styles}}
    </style>
</head>
<body>
<nav>
    <ul class="{{styles.list1}}">
        <li class='{{styles.nav}}'><a href="#" id="register"><h2>Register</h2></a></li>
        <li class='{{styles.nav}}'><a href="#" id="chat"><h2>Chat list</h2></a></li>
        <li class='{{styles.nav}}'><a href="#" id="settings"><h2>Settings</h2></a></li>
        <li class='{{styles.nav}}'><a href="#" id="error"><h2>Error</h2></a></li>
    </ul>
    <ul class="{{styles.list2}}">
        <li class='{{styles.nav}}'><a href="#" id="settings"><h2>Settings</h2></a></li>
        <li class='{{styles.nav}}'><a href="#" id="error"><h2>Error</h2></a></li>
    </ul>
</nav>
</body>
</html>`