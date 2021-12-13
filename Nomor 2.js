let diskon;
let harga =[20000,40000,65000,80000] ;
for(let i = 0; i< harga.length; i++){
   document.write("<br>data barang-"+ i + "harga = " + harga[i]) ;
   if(harga[i] >= 50000 ){
     diskon = 0.05 * harga[i];
     document.write("<br>diskon 5% =" + diskon ) ;
   }
}



