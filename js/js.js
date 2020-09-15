let tmp;
tmp="<table border='2' width='600px' cellspacing='0' cellpadding='3' align='center'>"
let i=j=1;//i là hàng, j là cột
for(i=2;i<=9;i++){
    tmp=tmp+"<tr>";
    for(j=1;j<=9;j++){
        tmp=tmp+"<td>"+i+"x"+j+"="+i*j+"</td>";
    }
    tmp=tmp+"</tr>";
}
tmp=tmp+"</table>";
document.write(tmp);