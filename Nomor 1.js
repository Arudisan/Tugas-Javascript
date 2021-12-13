const nama = "Ardi"; 
var uts =  70 ;
var uas =  70 ;
var nilai_rata_rata = uts + uas / 2 ;
if (nilai_rata_rata >= 75 ) {
    keterangan ="lulus";
}else if( nilai_rata_rata >= 50) {
    keterangan ="remidi";

}else {
    keterangan ="tidak lulus" ;
}
document.write("Nama = " + nama + "<br/>" + "UTS :" +uts + "<br/>" +"UAS :" +uas+ "<br/>" +"Nilai Rata-Rata :" + nilai_rata_rata + "<br/>" +"*Note : Selamat Anda" + keterangan )