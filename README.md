# Asp.NET-WebAPI-Il-Ilce
##Packages dosyalarının büyüklüğü sebebiyle tüm proje atılmamıştır. Yalnızca gerekli kısımlar eklenmiştir.

Uygulamayı çalıştırmadan önce, MsSQL Server üzerinde "il_ilce.sql" adlı dosyadaki kodları new query diyerek çalıştırınız.
Database first ile uygulamaya tabloları ve connectionstring'ini ekleyebilirsiniz.
Geri dönüş formatı olarak json kullanılmıştır. XML yapmak için WebApiConfig.cs dosyasından 25.satırı silmeniz yeterlidir.

İster arayüz ile, ister postman ile istekte bulunabilirsiniz.
/Home/Index sayfasını açarak select listesinden verilere ulaşabilirsiniz. **MyScripts/GetMethods.js** içinde ajax ile veriler getirilmektedir.

Json formatında İl listesine ulaşmak için:
/api/IlIlce/GetIl ile tüm illeri json formatında ulaşabilirsiniz.

Yalnızca seçili ile ait ilçelere ulaşmak için:
**/api/IlIlce/GetIlce/"İl** Plakası" ile ulaşabilirsiniz.
İstanbul iline ait ilçelerin listelenmesi için: 
**/api/IlIlce/GetIlce/34** şeklinde istek yapabilirsiniz.
