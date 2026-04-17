# Take Home Quiz oleh Christoper Julian Wijaya

# ENDPOINT YANG BISA DIAKSES:
1. POST api/gacha/pull (membutuhkan parameter JSON 
{"username" : username})
   Endpoint ini untuk melakukan gacha dan akan otomatis gagal jika username tersebut mencapai kuota 5 kali

2. GET api/gacha/prizes 
   Endpoint ini untuk mengetahui hadiah yang masih tersedia

3. GET api/gacha/prizewinners
   Endpoint ini untuk mengetahui nama-nama pemenang (dengan disensor)

4. GET api/gacha/history/:username
   Endpoint ini bertujuan untuk mengetahui histori barang yg berhasil didapatkan (hanya jika mengetahui username, termasuk diri sendiri)



# Tambahan:
1. Pemakaian seeder dengan kode seeder.js menggunakan bantuan AI
2. Penyensoran nama dengan masking.js juga memakai bantuan AI
3. Data yang tertulis di database akan tereset setiap kali sistem menjalankan ulang kode (run ulang)