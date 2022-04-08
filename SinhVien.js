function SinhVien(masv, hoten, cmnd, sodt, email, toan, ly, hoa) {
  this.MaSV = masv;
  this.HoTen = hoten;
  this.Cmnd = cmnd;
  this.SoDT = sodt;
  this.Email = email;
  this.Toan = toan;
  this.Ly = ly;
  this.Hoa = hoa;
  this.TinhDTB = function () {
    this.DTB = (Number(this.Toan) + Number(this.Ly) + Number(this.Hoa)) / 3;
    this.dtb = this.DTB.toFixed(1);
  };
  this.XepLoai = function () {
    if (this.DTB <= 10 && this.DTB >= 8) {
      this.Loai = "Xếp loại Giỏi";
    } else if (this.DTB < 8 && this.DTB >= 6.5) {
      this.Loai = "Xếp loại Khá";
    } else if (this.DTB < 6.5 && this.DTB >= 5) {
      this.Loai = "Xếp loại Trung Bình";
    } else {
      this.Loai = "Xếp loại yếu";
    }
  };
}
