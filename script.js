body{
font-family: Arial;
display:flex;
justify-content:center;
align-items:center;
height:100vh;
background:#10eadf;
}

.calculator{
background:white;
padding:20px;
border-radius:10px;
box-shadow:0 0 10px rgba(0,0,0,0.2);
}

#display{
width:100%;
height:40px;
font-size:20px;
margin-bottom:10px;
text-align:right;
padding:5px;
}

.buttons{
display:grid;
grid-template-columns:repeat(4,60px);
gap:10px;
}

button{
height:50px;
font-size:18px;
border:none;
background:#db34b7;
color:white;
border-radius:5px;
cursor:pointer;
}

button:hover{
background:#2980b9;
}