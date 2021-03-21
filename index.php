<!doctype html>
<html>
  <head>
    <title>Open Bingo Generator</title>
    <style>
      .numberCircle{
        width: 120px;
        line-height: 120px;
        border-radius: 50%;
        text-align: center;
        font-size: 72px;
        border: 2px solid #666;
      }

      .numberCircleSmall{
        width: 120px;
        line-height: 120px;
        border-radius: 50%;
        text-align: center;
        font-size: 32px;
        border: 2px solid #666;
      }
    </style>
    <script src="config.js"></script>
    <script src="main.js"></script>
  </head>



  <body>

<table border="0" cellpadding="5" cellspacing="0" width="100%">
  <tbody>
    <tr>
      <td id="" align="center" valign="middle"><h1>Open Bingo Generator</h1></td>
      <td id="" align="center" valign="middle"><div class="numberCircle" id="currentNumber">--</div></td>
    </tr>
    <tr>
      <td id="" align="center" valign="middle"></td>
      <td id="" align="center" valign="middle"><input value="Call Next Number!" type="button" onclick="javscript:callNum()"></td>
    </tr>

  </tbody>
</table>

    <div id="numberGrid"></div>

    <div>
      <div class="heading003">Numbers Called: <span id="ballsCalled">set via js</span></div>
      <div class="heading003">Numbers Left:   <span id="ballsLeft">set via js</span></div>
      <div class="heading003">Game Size:   <span id="gameSize">set via js</span></div>
    </div>

    <div class="heading003">Called Numbers: <span id="callLog"></span></div>


  </body>



</html>


