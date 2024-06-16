<?php
// Pastikan ada data yang dikirimkan melalui metode POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ambil data dari formulir
    $nama = htmlspecialchars($_POST["nama"]);
    $email = htmlspecialchars($_POST["email"]);
    $pesan = htmlspecialchars($_POST["pesan"]);
    
    // Kirim email balasan
    $to = "kadekwisnaya17@gmail.com"; // Ganti dengan alamat email Anda
    $subject = "Balasan dari " . $nama;
    $message = "Nama: " . $nama . "\n";
    $message .= "Email: " . $email . "\n\n";
    $message .= "Pesan:\n" . $pesan;
    $headers = "From: " . $email . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "X-Mailer: PHP/" . phpversion();
    
    // Kirim email menggunakan fungsi mail()
    if (mail($to, $subject, $message, $headers)) {
        echo "Balasan Anda telah berhasil dikirim."; // Pesan sukses
    } else {
        echo "Maaf, terjadi kesalahan dalam mengirim balasan."; // Pesan kesalahan
    }
} else {
    // Jika tidak ada data yang dikirimkan via POST, tampilkan pesan error
    echo "Akses langsung ke file ini tidak diizinkan.";
}
?>
