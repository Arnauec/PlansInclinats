
<html>
	<head>
		<title>Projecte de Recerca</title>
		<script language="javascript" type="text/javascript" src="functions/main.js"></script>
	</head>
	<body onload="pintarLinea(0);" bgcolor="#FFEC8B">
		<table width="100%" height="100%">
			<tr height="15%">
				<td width="20%"></td>
				<td width="60%"><p style="text-align:center;font-family:Tahoma;font-size:22"><u>Simulador de plans inclinats en Javascript</u></p></td>
				<td width="20%"></td>
			</tr>
			<tr height="70%">
				<td align="center">
					<p style="text-align:center;font-family:Tahoma;font-size:20;"><u>Dades</u></p>
						<p style="text-align:center;font-family:Tahoma;">Massa del Cos (kg)</p>
						<input type="text" name="massa" id="massa" style="text-align:center;font-family:Tahoma;" onchange="calcularPes(), pintarLinea();"/>
						<p style="text-align:center;font-family:Tahoma;">Angle pla (º)</p>
						<input type="text" name="angle" id="angle" style="text-align:center;font-family:Tahoma;" onchange="calcularAltura(), calcularLlargada(),pintarLinea();"/>
						<p style="text-align:center;font-family:Tahoma;">Pes del Cos (N)</p>
							<input type="text" name="pes" id="pes" style="text-align:center;font-family:Tahoma;" onchange="calcularMassa(), pintarLinea();"/>
						<p style="text-align:center;font-family:Tahoma;">Fregament Estàtic</p>
							<input type="text" name="festatic" id="festatic" style="text-align:center;font-family:Tahoma;" onchange="pintarLinea();"/>
						<p style="text-align:center;font-family:Tahoma;">Fregament Dinàmic</p>
							<input type="text" name="fdinamic" id="fdinamic" style="text-align:center;font-family:Tahoma;" onchange="pintarLinea();"/>
						<p style="text-align:center;font-family:Tahoma;">Llargada del pla (m)</p>
							<input type="text" name="llargada" id="llargada" style="text-align:center;font-family:Tahoma;" onchange="calcularAltura(), calcularAngle(), pintarLinea();"/>
						<p style="text-align:center;font-family:Tahoma;">Altura (m)</p>
							<input type="text" name="altura" id="altura" style="text-align:center;font-family:Tahoma;" onchange="calcularLlargada(), calcularAngle(), pintarLinea();"/>
						<br>
				</td>
				<td align="center" bgcolor="#FFEC8B" style="background-image:url(./fons.png);background-repeat:no-repeat; background-position: 50% 50%;">
					<canvas id="recerca" width="500px" height="400px">El teu navegador de la edat de pedra no soporta Canvas, fes el favor de utilitzar el Google Chrome!</canvas>
				</td>
				<td align="center">
					<p style="text-align:center;font-family:Tahoma;font-size:20;"><u>Resultats</u></p>
						<p style="text-align:center;font-family:Tahoma;">Temps total de la Baixada (seg.)</p>
							<input type="text" name="ttotal" id="ttotal" style="text-align:center;font-family:Tahoma;" />
						<p style="text-align:center;font-family:Tahoma;">Temps transcurregut (seg.)</p>
							<input type="text" name="ttrans" id="ttrans" style="text-align:center;font-family:Tahoma;" value="0"/>
						<p style="text-align:center;font-family:Tahoma;">Acceleracio (m/s2)</p>
							<input type="text" name="acceleracio" id="acceleracio" style="text-align:center;font-family:Tahoma;" />
						<p style="text-align:center;font-family:Tahoma;">Velocitat (m/s)</p>
							<input type="text" name="velocitat" id="velocitat" style="text-align:center;font-family:Tahoma;" />
						<p style="text-align:center;font-family:Tahoma;">Energia Cinètica (J)</p>
							<input type="text" name="ecinetica" id="ecinetica" style="text-align:center;font-family:Tahoma;" />
						<p style="text-align:center;font-family:Tahoma;">Energia Potencial (J)</p>
							<input type="text" name="epotencial" id="epotencial" style="text-align:center;font-family:Tahoma;" />
							<input type="hidden" name="alturanova" id="alturanova" style="text-align:center;font-family:Tahoma;" />
				</td>
			</tr>
			<tr height="15%">
				<td align="center"><img src="./info.png" onmouseover="this.src='./infob.png';" onmouseout="this.src='./info.png';" onclick="window.open('./formules.html', 'formules', 'width=500,height=500,menubar=no,status=no,toolbar=no');"/></td>
				<td align="center">
					<input type="button" style="height: 50px; width: 200px" name="simular" id="simular" value="Simular" onclick="simular();">
					<input type="hidden" style="height: 50px; width: 200px" name="aturar" id="aturar" value="Congelar" onclick="aturar();">
					<input type="button" style="height: 50px; width: 200px" name="inicial" id="inicial" value="Punt Inicial" onclick="puntInicial(),location.reload();">
					<input type="button" style="height: 50px; width: 200px" name="reset" id="reset" value="Reset" onclick="location.reload(true);"><br><br>
					<p style="text-align:center;font-family:Tahoma;font-size:12;">Arnau Estebanell ©</p>
				</td>
				<td></td>
			</tr>
		</table>
	</body>
</html>
